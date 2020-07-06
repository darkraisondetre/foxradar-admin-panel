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
        title: "Button",
        icon: false,
        actionsList: () => false
    }

    actionsList = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    renderIcon = () => {
        if (typeof this.props.icon !== "string") return <FontAwesomeIcon icon={this.props.icon} className="button__icon"/>
    }

    render() {
        return (
            <div className="bulkContainer">
                <div
                className={api.setClasses(
                    [this.defaultClassName, "button", this.props.className],
                    {isLink: this.props.isLink}
                )}
                onClick={this.actionsList}
                >
                    {this.props.title}
                    {this.props.icon && this.renderIcon()}
                    
                </div>
                <select className={this.state.isToggleOn ? 'list hidden' : 'list'} multiple size="9">
                    <option className="list__item">Adjust Time for All</option>
                    <option className="list__item">Disconnect All Users for All</option>
                    <option className="list__item">Disable All</option>
                    <option className="list__item bb">Enable All</option>
                    <option className="list__item">Adjust Time for Selected</option>
                    <option className="list__item">Disconnect Selected</option>
                    <option className="list__item">Disable Selected</option>
                    <option className="list__item">Enable Selected</option>
                    <option className="list__item">Delete Selected</option>
                </select>
            </div>
        );
    }
}