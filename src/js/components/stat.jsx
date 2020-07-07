import React from 'react';

export default class Stat extends React.Component {

  static defaultProps = {
    className: "",
    title: "Statistics",
    text: "0"
  }

  render() {
    return (
      <div className="stat-container">
        <div className="stat-container__title">{this.props.title}</div>
        <div className="stat-container__text">{this.props.text}</div>
      </div>
    );
  }
}