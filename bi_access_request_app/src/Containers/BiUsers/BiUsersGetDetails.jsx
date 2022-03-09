//React Imports
import React, { Component } from "react";

//Component Imports
import FormsGetUserDetails from '../../Components/Forms/FormsGetUserDetails';

class BiUsersGetDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <FormsGetUserDetails />
            </div>
        );
    }
}

export default BiUsersGetDetails;
