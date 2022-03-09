//React Imports
import React, { Component } from "react";

//Redux Imports
import { connect } from 'react-redux';

class CardsBiUserGroupInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        if (!this.props.data.userGroups)
            return (
                <div>No Groups Available Till Now</div>
            )
        return (
            <div>
                <div style={{ fontSize: "1.3vw", fontWeight: "bold", padding: '0.75%' }}>
                    BI User Group Details
                </div>
                <div className='container d-flex justify-content-center'>
                    <div className='card' style={{ width: '75%' }}>
                        <div class="card-header" style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                            User Assigned Groups
                        </div>
                        <div class="card-body" style={{ maxHeight: '35vh', overflowY: 'scroll' }}>
                            {this.props.data.userGroups.map((order) => {
                                return (
                                    <div style={{ fontSize: "1.1vw", padding: '0.2%' }}>
                                        {order.groupName}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.BiUserDetails.data,
    loading: state.BiUserDetails.loading,
    error: state.BiUserDetails.error,
});

export default connect(
    mapStateToProps, null
)(CardsBiUserGroupInfo);