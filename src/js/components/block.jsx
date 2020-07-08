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
        className="block">
        <div className="block__title">
            <div className="block__title_name">{this.props.title}</div>
            <div className="block__title_tools">{this.props.blockTitle}</div>
        </div>
        <div className="block__main">
            {this.props.blockMain}
        </div>
      </div>
    );
  }
}