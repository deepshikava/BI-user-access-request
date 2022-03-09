//React Imports
import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

//Redux Imports
import { connect } from "react-redux";

class BiUsersAddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: this.props.location.state.country,
            project: this.props.location.state.project,
            username: this.props.location.state.username
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push(`/BiUsersShowDetails/addUser/`, this.state);
    }

    handleCancel(e) {
        e.preventDefault();
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <div style={{ fontSize: "1.3vw", fontWeight: "bold", paddingTop: "1%" }}>
                    BI User Information
                </div>
                <div style={{ paddingTop: '1%' }}>
                    <h4>The given user name [{this.state.username}] does not exits in the BI system. So, Do you like to add this user to the {(this.state.project === "BI") ? "Big Insights" : "Retailer Insights"} - {(this.state.country === "US") ? "USA" : (this.state.country === "UK") ? "United Kingdom" : (this.state.country === "JP") ? "Japan" : (this.state.country === "FR") ? "France" : (this.state.country === "IT") ? "Italy" : "Germany"} project ?  </h4>
                    <button type="submit" className="btn btn-danger text-center" style={{ fontSize: '1.2vw', fontWeight: 'bold', margin: '1%' }} onClick={this.handleCancel}>Cancel</button>
                    <button type="submit" className="btn btn-success text-center" style={{ fontSize: '1.2vw', fontWeight: 'bold', margin: '1%' }} onClick={this.handleSubmit}>Add New User</button>
                </div>
            </div>
        );
    }
}

export default withRouter(
    connect(null, null)(BiUsersAddUser)
);