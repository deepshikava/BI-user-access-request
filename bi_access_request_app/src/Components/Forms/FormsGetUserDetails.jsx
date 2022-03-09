// ReactJS Imports
import React from "react";
import { withRouter } from "react-router-dom";

//Redux Imports
import { connect } from "react-redux";

//React 3rd Party npm package Imports
import swal from 'sweetalert';

//Component Imports
import InputTextBox from "../../Components/Inputs/InputTextBox/InputTextBox";
import InputDropDownCountry from "../../Components/Inputs/InputDropDown/InputDropDownCountry";
import InputDropDownProject from "../../Components/Inputs/InputDropDown/InputDropDownProject";
import InputDropDownRetailer from "../../Components/Inputs/InputDropDown/InputDropDownRetailer";
import InputDropDownRetailerDisabled from "../../Components/Inputs/InputDropDown/InputDropDownRetailerDisabled";

//Setting Constant Value
const INITIAL_STATE = {
    username: "",
    country: "",
    project: "",
    retailer: "",
    error: true,
    open: false,
};

class FormsGetUserDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Front End Validations
    validation = () => {
        if (this.state.username === "") {
            swal("Warning !!!", "The User Name Field is Empty.");
            return false;
        }
        if (this.state.country === "") {
            swal("Warning !!!", "Please select a value for the Country Field");
            return false;
        }
        if (this.state.project === "") {
            swal("Warning !!!", "Please select a value for the Project Field");
            return false;
        }
        if ((this.state.project === "RI") && (this.state.retailer === "")) {
            swal("Warning !!!", "Please select a value for the Retailer Field");
            return false;
        }
        return true;
    }

    //After Submission, Clearing the values from all fields from the targeting request form
    handleReset = () => {
        this.setState({
            username: "",
            country: "",
            project: "",
            retailer: "",
            error: true,
            open: false,
        });
    };

    //Handle Get User Details button functionality
    handleSubmit(e) {
        e.preventDefault();
        if (this.validation()) {
            this.handleReset();
            var userInputs = {
                country: this.state.country,
                project: this.state.project,
                username: this.state.username
            }
            this.props.history.push(`/BiUsersShowDetails/getInfo/`, userInputs);
        }
    }

    render() {
        return (
            <div style={{ padding: "1%" }}>
                {/* ------$$$$$$$------- GET USER DETAILS FORM -------$$$$$$$$-------- */}
                <div style={{ fontSize: "1.3vw", fontWeight: "bold" }}>
                    BI Users - Access Request
                </div>
                <div className="row" style={{ paddingTop: "1%" }}>
                    {/* ------------- Input - Promotions/BL Numbers - Text Box --------------- */}
                    <div className="col">
                        <InputTextBox
                            LabelProp="User Name"
                            PlaceHolderProp="Enter Username"
                            ValueProp={this.state.username}
                            onChange={(a) => {
                                this.setState({ username: a }, function () { });
                            }}
                        />
                    </div>
                    {/* --------------- Input - Country - Drop Down Box --------------- */}
                    <div className="col">
                        <InputDropDownCountry
                            onChange={(a) => {
                                this.setState({ country: a }, function () {
                                });
                            }}
                        />
                    </div>
                    {/* --------------- Input - Project - Drop Down Box --------------- */}

                    <div className="col">
                        <InputDropDownProject
                            onChange={(a) => {
                                this.setState({ project: a }, function () {
                                });
                            }}
                        />
                    </div>
                    {/* ------------- Input - Retailer - Drop Down Box --------------- */}
                    <div className="col">
                        {(this.state.project === "RI") ?
                            <InputDropDownRetailer
                                countryProps={this.state.country}
                                onChange={(a) => {
                                    this.setState({ retailer: a }, function () {
                                    });
                                }}
                            />
                            :
                            <InputDropDownRetailerDisabled
                                onChange={(a) => {
                                    this.setState({ retailer: a }, function () {
                                    });
                                }}
                            />
                        }
                    </div>

                    <div className="col-*-2" style={{ marginRight: '0.5%' }}>
                        <button type="submit" className="btn btn-success text-center" style={{ fontSize: '1.075vw', fontWeight: 'bold' }} onClick={this.handleSubmit}>Get User Details</button>
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
    connect(mapStateToProps, null)(FormsGetUserDetails)
);