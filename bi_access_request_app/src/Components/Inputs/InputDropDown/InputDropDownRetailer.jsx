//React Imports
import React, { Component } from "react";
import axios from "axios";

//Config Import
import config from "../../../config";

class InputDropDownRetailer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allRetailerInfo: [],
            selectedTeam: "",
        };
    }

    componentDidMount() {
        if (this.props.countryProps == "")
            alert("Please select a country");
        axios.get(`${config.urlConnection.urlBiUserAccess}/Retailer/${this.props.countryProps}`)
            .then(groups => {
                console.log("Retailers", groups.data);
                this.setState({ allRetailerInfo: groups.data })
                console.log("Retailers in state", this.state.allRetailerInfo);
            })
            .catch(err => console.log(err))
    }

    handleChange = (event) => {
        this.props.onChange(event.target.value);
    };

    render() {
        return (
            <div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label
                            className="input-group-text"
                            for="inputGroupSelect01"
                            style={{ fontSize: "1vw" }}
                        >
                            Retailer
                        </label>
                    </div>
                    <select
                        className="custom-select"
                        id="inputGroupSelect01"
                        style={{ fontSize: "1vw" }}
                        onChange={this.handleChange}
                    >
                        <option hidden value=""></option>
                        <option>Choose... </option>
                        <option value="R1">Retailer 1</option>
                        <option value="R2">Retailer 2</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default InputDropDownRetailer;
