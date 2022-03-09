//React Imports
import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import axios from "axios";

//Redux Imports
import { connect } from "react-redux";

//Component Imports
import CardsBiUserInfo from '../../Components/Cards/CardsBiUserInfo';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import ListsAllGroups from '../../Components/Lists/ListsAllGroups';
import ListsUserGroups from '../../Components/Lists/ListsUserGroups';

//Config Import
import config from "../../config";

//React 3rd Party npm package Imports
import swal from 'sweetalert';

class BiUserAssignGroups extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allGroupList: [],
            userGroupList: this.props.data.userGroups,
            userGroupListCopy: this.props.data.userGroups,
            addGroupItem: "",
            removeGroupItem: ""
        };
        this.handleAddGroupItem = this.handleAddGroupItem.bind(this);
        this.handleRemoveGroupItem = this.handleRemoveGroupItem.bind(this);
        this.handleUpdateGroupRequest = this.handleUpdateGroupRequest.bind(this);
        this.handleCancelRequest = this.handleCancelRequest.bind(this);
        this.handleNewRequest = this.handleNewRequest.bind(this);
    }

    componentDidMount() {
        axios.get(`${config.urlConnection.urlBiUserAccess}/Group/${this.props.location.state.country}/${this.props.location.state.project}`)
            .then(groups => {
                this.setState({ allGroupList: groups.data })
            })
            .catch(err => console.log(err))
    }

    handleUpdateGroupRequest(e) {
        e.preventDefault();
        var assignGroupsObj = this.props.data;
        assignGroupsObj.userGroups = this.state.userGroupList;
        var userData = {
            country: this.props.location.state.country,
            project: this.props.location.state.project,
            username: this.props.location.state.username,
            assignGroupsObj: assignGroupsObj
        }
        this.props.history.push(`/BiUsersShowDetails/assignGroups/`, userData);
    }

    handleCancelRequest(e) {
        e.preventDefault();
        var userData = {
            country: this.props.location.state.country,
            project: this.props.location.state.project,
            username: this.props.location.state.username
        }
        this.props.history.push(`/BiUsersShowDetails/getInfo/`, userData);
    }

    handleNewRequest(e) {
        e.preventDefault();
        this.props.history.push("/");
    }


    handleAddGroupItem(addItem) {
        var addObj = this.state.allGroupList.filter(obj => obj.groupName === addItem);
        console.log(addObj[0])
        swal({
            title: `Do you want to add this Group ? [${addItem}]`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willAdd) => {
            if (willAdd) {
                this.setState(prevState => ({
                    userGroupList: [addObj[0], ...prevState.userGroupList]
                }));
            } else {
                swal(`The Selected Group [${addItem}] is not added !`);
            }
        });
    }

    handleRemoveGroupItem(index) {
        const list = this.state.userGroupList;
        swal({
            title: `Do you want to remove this Group ? [${list[index].groupName}]`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                list.splice(index, 1);
                this.setState({ list });
                // const newList = this.state.userGroupList.splice(this.state.userGroupList.indexOf(removeObj), 1);
                this.setState({ userGroupList: list });
            } else {
                swal(`The Selected Group [${list[index].groupName}] is not deleted !`);
            }
        });
    }

    render() {
        if (this.props.loading) {
            return <LoadingSpinner />
        }

        if (this.props.error) {
            return <div style={{ color: 'red' }}>ERROR: Unexpected Error in fetching User Details from Server!!! [{this.props.error}]. <br /> Please contact L2 BI Team for further assistance</div>
        }

        //All Group List - Big Insights
        var allgroup = [];
        this.state.allGroupList.map(obj => {
            allgroup.push(obj.groupName)
        })

        //Specific User Assigned Group List - Big Insights
        var usergroup = [];
        this.state.userGroupList.map(obj => {
            usergroup.push(obj.groupName)
        })

        //Filtered All Group List - Removed the user assigned groups from All group List
        const filteredAllGroupsArray = allgroup.filter(function (x) {
            return usergroup.indexOf(x) < 0;
        });

        return (
            <div>
                {
                    (typeof this.props.data != 'undefined')
                        ? <div>
                            <div className="pull-right vertical-align" style={{ padding: '0.5%' }}>
                                <button className="btn btn-primary" onClick={this.handleNewRequest}>
                                    <i className="fa fa-home" aria-hidden="true" style={{ fontSize: '1.7vw' }}>
                                    </i>
                                </button>
                            </div>
                            <div style={{ fontSize: "1.3vw", fontWeight: "bold", paddingTop: "1%" }}>
                                BI User Information
                            </div>
                            <CardsBiUserInfo />
                            <div style={{ fontSize: "1.3vw", fontWeight: "bold", padding: '1.5%' }}>
                                BI User Group Infromation
                             </div>
                            {(this.state.allGroupList === []) ?
                                <LoadingSpinner />
                                :
                                <div>
                                    <div className="row" style={{ fontSize: "1.1vw", paddingBottom: '2%' }}>
                                        <div className="col d-flex justify-content-center">
                                            <div class="card" style={{ width: '85%' }}>
                                                <div class="card-header" style={{ fontWeight: "bold" }}>
                                                    All Available Groups
                                            </div>
                                                <div class="card-body" style={{ maxHeight: '40vh', overflowY: 'scroll', padding: '0' }}>
                                                    <ListsAllGroups
                                                        GroupItems={filteredAllGroupsArray}
                                                        onClick={(a) => {
                                                            this.setState({ addGroupItem: a }, function () {
                                                                console.log(this.state.addGroupItem)
                                                            });
                                                            this.handleAddGroupItem(a)
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <div class="card" style={{ width: '85%' }}>
                                                <div class="card-header" style={{ fontWeight: "bold" }}>
                                                    Given User Assigned Groups
                                            </div>
                                                <div class="card-body" style={{ maxHeight: '40vh', overflowY: 'scroll', padding: '0' }}>
                                                    <ListsUserGroups
                                                        GroupItems={usergroup}
                                                        onClick={(a) => {
                                                            this.setState({ removeGroupItem: a }, function () {
                                                                console.log(this.state.removeGroupItem)
                                                            });
                                                            this.handleRemoveGroupItem(a)
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-danger text-center" style={{ fontSize: '1.1vw', fontWeight: 'bold', margin: '0.5%' }} onClick={this.handleCancelRequest}>Cancel</button>
                                    <button type="submit" className="btn btn-success text-center" style={{ fontSize: '1.1vw', fontWeight: 'bold', margin: '0.5%' }} onClick={this.handleUpdateGroupRequest}>Update Group Access</button>
                                </div>
                            }
                        </div>
                        :
                        <LoadingSpinner />
                }
            </div>
        )

    }
}

const mapStateToProps = state => ({
    data: state.BiUserDetails.data,
    loading: state.BiUserDetails.loading,
    error: state.BiUserDetails.error,
});

export default withRouter(
    connect(mapStateToProps, null)(BiUserAssignGroups)
);