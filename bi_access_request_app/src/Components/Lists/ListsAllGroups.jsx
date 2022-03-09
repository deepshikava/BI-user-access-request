//React Imports
import React, { Component } from 'react';

class ListsAllGroups extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleClick(groupName) {
        // this.props.onClick(e.target.textContent);
        this.props.onClick(groupName);
    }


    render() {

        return (
            <ul class="list-group list-group-flush">
                {
                    this.props.GroupItems.map(groupInfo => (
                        <li
                            class="list-group-item list-group-item-action list-group-item-light text-dark"
                            value={groupInfo}
                            // onClick={this.handleClick.bind(this)}
                            onClick={() => this.handleClick(groupInfo)}
                        >
                            {groupInfo}
                            <div className="pull-right vertical-align">
                                <i className="fa fa-plus text-primary" aria-hidden="true" style={{ fontSize: '1.5vw' }}>
                                </i>
                            </div>
                        </li>
                    )
                    )
                }
            </ul>
        );
    }
}

export default ListsAllGroups;