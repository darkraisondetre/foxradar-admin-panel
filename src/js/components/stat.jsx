import React from 'react';

export default class Stat extends React.Component {

  static defaultProps = {
    className: "",
    title: "Statistics",
    text: "0"
  }

  render() {
    const { title, text } = this.props;
    return (
      <div className="stat">
        <div className="stat__title">{title}</div>
        <div className="stat__text">{text}</div>
      </div>
    );
  }
}