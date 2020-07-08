import React from 'react';

export default class Stat extends React.Component {

  static defaultProps = {
    className: "",
    title: "Statistics",
    text: "0"
  }

  render() {
    return (
      <div className="stat">
        <div className="stat__title">{this.props.title}</div>
        <div className="stat__text">{this.props.text}</div>
      </div>
    );
  }
}