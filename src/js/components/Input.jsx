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
    type: 'text',
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    const { className, label, placeholder, type } = this.props;
    return (
      <div
        className={api.setClasses(
          ["input-container", className],
        )}>
        {label ? <div>{label}</div> : false}
        <input type={type} placeholder={placeholder} value={this.state.value}
          onChange={this.handleChange} className="input" />
      </div>
    );
  }
}