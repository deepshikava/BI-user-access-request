//React Imports
import React, { Component } from 'react';

class ListsUserGroups extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    removeItem(index) {
        this.props.onClick(index);
    }

    render() {
        return (
            <ul class="list-group list-group-flush">
                {
                    this.props.GroupItems.map((groupInfo, i) => (
                        <li
                            key={i}
                            class="list-group-item list-group-item-action list-group-item-light text-dark"
                            value={groupInfo}
                            onClick={() => this.removeItem(i)}
                        >
                            {groupInfo}
                            <div className="pull-right vertical-align">
                                <i className="fa fa-trash text-danger" aria-hidden="true" style={{ fontSize: '1.5vw' }}>
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

export default ListsUserGroups;