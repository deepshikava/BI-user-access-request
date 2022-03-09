//React Imports
import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

//Redux Imports
import { connect } from 'react-redux';

//Action Imports
import { getBigInsightsUserDetails } from "../../Actions/ActionsUserDetails/ActionsUserDetails";
import { addNewBigInsightsUser } from "../../Actions/ActionsUserDetails/ActionsUserDetails";
import { assignUserGroupsBigInsights } from "../../Actions/ActionsUserDetails/ActionsUserDetails";

//Component Imports
import CardsBiUserInfo from '../../Components/Cards/CardsBiUserInfo';
import CardsBiUserGroupInfo from '../../Components/Cards/CardsBiUserGroupInfo';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';

class BiUsersShowDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleAssignGroupRequest = this.handleAssignGroupRequest.bind(this);
        this.handleNewRequest = this.handleNewRequest.bind(this);
    }

    componentDidMount() {
        if (this.props.match.params.action === "addUser") {
            this.props.addNewBIUser(this.props.location.state.country, this.props.location.state.project, this.props.location.state.username);
            if (this.props.data.notes === "USER_ALREADY_EXIST_IN_BI") {
                this.props.getBIUserDetails(this.props.location.state.country, this.props.location.state.project, this.props.location.state.username);
            }
        }
        else {
            if (this.props.match.params.action === "assignGroups") {
                this.props.assignUserGroups(this.props.location.state.country, this.props.location.state.project, this.props.location.state.username, this.props.location.state.assignGroupsObj);
            }
            else {
                this.props.getBIUserDetails(this.props.location.state.country, this.props.location.state.project, this.props.location.state.username);
            }
        }
    }

    handleAssignGroupRequest(e) {
        e.preventDefault();
        var assignGroupsInputs = {
            country: this.props.location.state.country,
            project: this.props.location.state.project,
            username: this.props.location.state.username
        }
        this.props.history.push(`/BiUsersAssignGroups/`, assignGroupsInputs);
    }

    handleNewRequest(e) {
        e.preventDefault();
        this.props.history.push("/");
    }

    render() {
        if (this.props.loading) {
            return <LoadingSpinner />
        }

        if (this.props.error) {
            return <div style={{ color: 'red' }}>ERROR: Unexpected Error in fetching User Details from Server!!! [{this.props.error}]. <br /> Please contact L2 BI Team for further assistance</div>
        }

        return (
            <div>
                {
                    (typeof this.props.data.notes != 'undefined')
                        ? (this.props.data.notes === "NO_USER_IN_LDAP")
                            ?
                            <h4 style={{ paddingTop: '1%' }}>The given user name [{this.props.location.state.username}] is not found in LDAP. Please validate the LDAP username and retry. If issue still persists, Please contact L2 BI Team.</h4>
                            :
                            ((this.props.data.notes === "NO_USER_IN_BI") && (this.props.match.params.action === "getInfo"))
                                ? <div>
                                    {this.props.history.push(`/BiUsersAddUser/`, this.props.location.state)}
                                </div>
                                :
                                ((this.props.data.notes === "NO_USER_IN_BI") && (this.props.match.params.action === "addUser"))
                                    ? <div>
                                        <LoadingSpinner />
                                    </div>
                                    :
                                    <div>
                                        <div style={{ fontSize: "1.3vw", fontWeight: "bold", paddingTop: "1%" }}>
                                            BI User Information
                                        </div>
                                        <CardsBiUserInfo />
                                        <CardsBiUserGroupInfo />
                                        <button type="submit" className="btn btn-primary text-center" style={{ fontSize: '1.2vw', fontWeight: 'bold', margin: '1%' }} onClick={this.handleNewRequest}>Back</button>
                                        <button type="submit" className="btn btn-success text-center" style={{ fontSize: '1.2vw', fontWeight: 'bold', margin: '1%' }} onClick={this.handleAssignGroupRequest}>Add / Remove Group Access</button>
                                    </div>
                        : <LoadingSpinner />
                }
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewBIUser: (country, project, username) => {
            dispatch(addNewBigInsightsUser(country, project, username));
        },
        getBIUserDetails: (country, project, username) => {
            dispatch(getBigInsightsUserDetails(country, project, username));
        },
        assignUserGroups: (country, project, username, group) => {
            dispatch(assignUserGroupsBigInsights(country, project, username, group));
        }
    };
};

const mapStateToProps = state => ({
    data: state.BiUserDetails.data,
    loading: state.BiUserDetails.loading,
    error: state.BiUserDetails.error,
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(BiUsersShowDetails)
);
