import React from 'react';
import api from '../api';

export default class Row extends React.Component {
  static defaultProps = {
    className: "",
    title: "Row",
  }

  render() {
    return (
      <div
        className="row">
        <div className="row__row">
          <div className={api.setClasses(
          ["row__title", this.props.className]
        )}>{this.props.title}</div>
          {this.props.children}
        </div>
      </div>
    );
  }
}