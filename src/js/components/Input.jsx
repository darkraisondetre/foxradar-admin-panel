import React from 'react';
import api from '../api';

export default class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  static defaultProps = {
    placeholder: "",
    className: "",
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    console.log('Отправленное имя: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div
          className={api.setClasses(
            ["input-container", this.props.className],
          )}>

          <div>{this.props.label}</div>
          <input type="text" placeholder={this.props.placeholder} value={this.state.value}
            onChange={this.handleChange} className="input br-3" />
        </div>
      </div>
    );
  }
}