import React from 'react';
import api from '../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Button extends React.Component {
    static defProps ={
        className: "",
        isLink: false,
        title: "",
        icon: false,
        onClick: () => false
    }

    handleClick = () => {
        alert('click');
    }

    renderIcon = () => {
        if (typeof this.props.icon !== "string") return <FontAwesomeIcon icon={this.props.icon} />
    }

    render() {
        return (
            <div
            className={api.setClasses(
                [this.defaultClassName, "button", this.props.className],
                {isLink: this.props.isLink}
            )}
            onClick={this.props.onClick}
            >
                {this.props.title}
                {this.props.icon && this.renderIcon()}
            </div>
        );
    }
}