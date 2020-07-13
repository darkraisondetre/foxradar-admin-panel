import React from 'react';
import api from '../api';

export default class Radio extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }

  static defaultProps = {
    className: ""
  }

  onChange = (id) => {
    this.setState({
      value: id
    });
    console.log(id);
  }

  render() {
    const radioValue = {
      value: this.state.value,
    }
    return (
      <div className="radioContainer" value={radioValue.value}>
        {this.props.list.map((item, index) => {
          return <div
            className="radio"
            key={index}
            onClick={() => this.onChange(index)}>
            <div
              className={api.setClasses(
                ["radio__button", this.props.className ],
                {selected: this.state.value === index}
              )}></div>
            <div className="radio__title">{item.title}</div>
          </div>
        })}
      </div>
    );
  }
}