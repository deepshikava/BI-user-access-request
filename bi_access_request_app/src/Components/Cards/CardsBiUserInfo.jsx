//React Imports
import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

//Redux Imports
import { connect } from 'react-redux';

//3rd party package Imports
import ReactTooltip from "react-tooltip";

class CardsBiUserInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const country = this.props.match.params.country;
        const project = this.props.match.params.project;
        return (
            <div>
                <div style={{ paddingTop: "1%" }}>
                    <div className="row" style={{ fontSize: "1.1vw", paddingLeft: '1%', paddingRight: '1%' }}>
                        <div className="col">
                            <div className="card bg-light" style={{ textAlign: 'start' }}>
                                <div class="card-body">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <b>Country</b>
                                                </td>
                                                <td>
                                                    <b>&nbsp;&nbsp;&nbsp;---&nbsp;&nbsp;&nbsp;</b>
                                                </td>
                                                <td>
                                                    {(country === "US") ? "USA" : (country === "UK") ? "United Kingdom" : (country === "JP") ? "Japan" : (country === "FR") ? "France" : (country === "IT") ? "Italy" : "Germany"}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>Project</b>
                                                </td>
                                                <td>
                                                    <b>&nbsp;&nbsp;&nbsp;---&nbsp;&nbsp;&nbsp;</b>
                                                </td>
                                                <td>
                                                    {(project === "BI") ? "Big Insights" : "Retailer Insights"}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card bg-light" style={{ textAlign: 'start' }}>
                                <div class="card-body">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <b>Name</b>
                                                </td>
                                                <td>
                                                    <b>&nbsp;-&nbsp;</b>
                                                </td>
                                                <td data-tip data-for="nameTip">
                                                    {this.props.data.name.substring(0, 41)}
                                                </td>
                                                <ReactTooltip id="nameTip" place="top" effect="solid" type="dark">
                                                    {this.props.data.name}
                                                </ReactTooltip>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>Email ID</b>
                                                </td>
                                                <td>
                                                    <b>&nbsp;-&nbsp;</b>
                                                </td>
                                                <td data-tip data-for="emailIdTip">
                                                    {this.props.data.email.substring(0, 41)}
                                                </td>
                                                <ReactTooltip id="emailIdTip" place="bottom" effect="solid" type="dark">
                                                    {this.props.data.email}
                                                </ReactTooltip>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card bg-light" style={{ textAlign: 'start' }}>
                                <div class="card-body">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <b>LDAP User Name</b>
                                                </td>
                                                <td>
                                                    <b>&nbsp;&nbsp;&nbsp;---&nbsp;&nbsp;&nbsp;</b>
                                                </td>
                                                <td>
                                                    {this.props.data.ldapUserId}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>User ID</b>
                                                </td>
                                                <td>
                                                    <b>&nbsp;&nbsp;&nbsp;---&nbsp;&nbsp;&nbsp;</b>
                                                </td>
                                                <td>
                                                    {this.props.data.userId}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
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

export default withRouter(
    connect(mapStateToProps, null)(CardsBiUserInfo)
);
