//React Imports
import React, { Component } from "react";

//Component Imports
import BiUsersGetDetails from "../BiUsers/BiUsersGetDetails";

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <BiUsersGetDetails />
            </div>
        );
    }
}

export default LandingPage;
