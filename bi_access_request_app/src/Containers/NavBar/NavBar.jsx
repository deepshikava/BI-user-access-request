//React Imports
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Component Imports
import LandingPage from "../LandingPage/LandingPage";
import BiUsersShowDetails from "../BiUsers/BiUsersShowDetails";
import BiUsersAddUser from "../BiUsers/BiUsersAddUser";
import BiUserAssignGroups from "../BiUsers/BiUserAssignGroups";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Router>
                <div className="App">
                    <div>
                        <nav
                            className="navbar navbar-dark bg-primary"
                            style={{ padding: "0.1%" }}
                        >
                            <div
                                className="navbar-brand"
                                style={{ marginLeft: "0.7%", fontSize: "1.3vw" }}
                            >
                                <b>BI - User Access Request Portal</b>
                            </div>
                        </nav>
                    </div>
                    <Switch>
                        {/* -----++++++----- HOME PAGE ROUTES -----++++++----- */}
                        <Route exact path="/" component={LandingPage} />
                        <Route exact path="/BiUsersShowDetails/:action/" component={BiUsersShowDetails} />
                        <Route exact path="/BiUsersAddUser/" component={BiUsersAddUser} />
                        <Route exact path="/BiUsersAssignGroups/" component={BiUserAssignGroups} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default NavBar;
