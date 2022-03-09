//React Imports
import React, { Component } from "react";

class InputDropDownProject extends Component {

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
                            Project
            </label>
                    </div>
                    <select
                        className="custom-select"
                        id="inputGroupSelect01"
                        style={{ fontSize: "1vw" }}
                        onChange={this.handleChange}
                    >
                        <option disabled hidden value=""></option>
                        <option>Choose... </option>
                        <option value="BI">Big Insights</option>
                        <option value="RI">Retailer Insights</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default InputDropDownProject;
