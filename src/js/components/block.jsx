import React from 'react';
import api from '../api';

export default class Block extends React.Component {
  static defaultProps = {
    className: "",
    title: "Block",
    maxWidth: false,
  }

  render() {
    return (
      <div
        className="block"
        style={{ maxWidth: `${this.props.maxWidth}px` }}>
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