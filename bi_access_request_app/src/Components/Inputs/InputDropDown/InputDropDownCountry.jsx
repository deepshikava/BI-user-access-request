//React Imports
import React, { Component } from "react";

class InputDropDownCountry extends Component {

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
                            Country
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
                        <option value="US">USA</option>
                        <option value="UK">UK</option>
                        <option value="JP">JAPAN</option>
                        <option value="FR">FRANCE</option>
                        <option value="IT">ITALY</option>
                        <option value="DE">GERMANY</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default InputDropDownCountry;
