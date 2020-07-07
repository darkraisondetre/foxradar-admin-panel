import React from 'react';
import api from '../api';

export default class Radio extends React.Component {
  constructor() {
    super();
    this.state = {
      clickedItem: null,
      isToggleOn: false
    };
  }

  static defaultProps = {
    className: ""
  }

  changeChose = (clickedId) => {
    this.setState({
      isToggleOn: !this.state.isToggleOn,
      clickedItem: clickedId
    });
    console.log(clickedId);
  }

  render() {
    return (
      <div>
        {this.props.radioItems.map((item, index) => {
          return <div
            className="radio__button"
            key={index}
            value={index}>
            <div
              className={api.setClasses(
                ["radio",  this.state.clickedItem === index ? "selected" : ""]
              )}
              onClick={() => this.changeChose(index)}></div>
            <div className="radio__title">{item.title}</div>
          </div>
        })}
      </div>
    );
  }
}