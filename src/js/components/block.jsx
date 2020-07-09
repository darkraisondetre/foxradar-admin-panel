import React from 'react';
import api from '../api';

export default class Block extends React.Component {
  static defaultProps = {
    className: "",
    title: "Block",
  }

  render() {
    return (
      <div
      className={api.setClasses(
        ["block", this.props.className],
        )}>
        <div className="block__title">
          {this.props.title}
          {this.props.blockTools}
        </div>
        <div className="block__main">
          {this.props.children}
        </div>
      </div>      
    );
  }
}