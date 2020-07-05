import React from 'react';
import api from '../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class ButtonAction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            isHidden: true
        };
    
        this.actionsList = this.actionsList.bind(this);
    }

    static defProps ={
        className: "",
        isLink: false,
        title: "",
        icon: false,
        actionsList: () => false
    }

    actionsList = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    renderIcon = () => {
        if (typeof this.props.icon !== "string") return <FontAwesomeIcon icon={this.props.icon} />
    }

    render() {
        return (
            <div>
                <button
                className={api.setClasses(
                    [this.defaultClassName, "button", this.props.className],
                    {isLink: this.props.isLink}
                )}
                onClick={this.actionsList}
                >
                    {this.props.title}
                    {this.props.icon && this.renderIcon()}
                    
                </button>
                <div className={this.state.isToggleOn ? 'listContainer hidden' : 'listContainer'}>
                    <ul className="list br-3">
                        <li className="list__item"><a href="#">Disconnect All Users for All</a></li>
                        <li className="list__item"><a href="#">Disable All</a></li>
                        <li className="list__item"><a href="#">Enable All</a></li>
                        <hr />
                        <li className="list__item"><a href="#">Disconnect All Users for Selected</a></li>
                        <li className="list__item"><a href="#">Disable Selected</a></li>
                        <li className="list__item"><a href="#">Enable Selected</a></li>
                        <li className="list__item"><a href="#">Delete Selected</a></li>

                    </ul>
                </div>
            </div>
        );
    }
}