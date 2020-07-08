import React from 'react';
import api from '../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Button extends React.Component {
  static defaultProps = {
    className: "",
    title: "",
    icon: false,
    onClick: () => false
  }

  renderIcon = () => {
    if (typeof this.props.icon !== "string") return <FontAwesomeIcon icon={this.props.icon} className="button__icon" />
    return false;
  }

  render() {
    return (
      <div
        className={api.setClasses(
          ["button", this.props.className],
        )}
        onClick={this.props.onClick}
      >
        <span>{this.props.title}</span>
        {this.props.icon && this.renderIcon()}
        {this.props.children}
      </div>
    );
  }
}