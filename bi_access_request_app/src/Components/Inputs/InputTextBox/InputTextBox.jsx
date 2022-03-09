//React Imports
import React, { Component } from "react";

class InputTextBox extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span
                            className="input-group-text"
                            id="basic-addon1"
                            style={{ fontSize: "1vw" }}
                        >
                            {this.props.LabelProp}
                        </span>
                    </div>
                    <input
                        style={{ fontSize: "1vw" }}
                        type="text"
                        className="form-control"
                        name={this.props.NameProp}
                        placeholder={this.props.PlaceHolderProp}
                        aria-label={this.props.LabelProp}
                        value={this.props.ValueProp}
                        onChange={this.handleChange.bind(this)}
                        aria-describedby="basic-addon1"
                    />
                </div>
            </div>
        );
    }
}

export default InputTextBox;
