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
    const { className, onClick, title, icon, children } = this.props
    return (
      <div
        className={api.setClasses(
          ["button", className],
          { button_icon: title }
        )}
        onClick={onClick}
      >
        <span>{title}</span>
        {icon && this.renderIcon()}
        {children}
      </div>
    );
  }
}