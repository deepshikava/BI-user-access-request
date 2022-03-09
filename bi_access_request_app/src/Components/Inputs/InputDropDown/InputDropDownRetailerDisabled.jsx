//React Imports
import React, { Component } from "react";

class InputDropDownRetailerDisabled extends Component {

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
                        disabled
                    >
                        <option disabled hidden value=""></option>
                        <option>Choose... </option>
                        <option value="R1">Retailer 1</option>
                        <option value="R2">Retailer 2</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default InputDropDownRetailerDisabled;
