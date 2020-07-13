import React from 'react';
import api from '../api';

export default class Block extends React.Component {
  static defaultProps = {
    className: "",
    title: "Block",
  }

  render() {
    const { className, title, blockTools, children } = this.props;
    return (
      <div
      className={api.setClasses(
        ["block", className],
        )}>
        <div className="block__title">
          {title}
          {blockTools}
        </div>
        <div className="block__main">
          {children}
        </div>
      </div>
    );
  }
}