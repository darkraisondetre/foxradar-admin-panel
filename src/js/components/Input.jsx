import React from 'react';

export default class Input extends React.Component {

    constructor(props) {
      super(props);
      this.state = {value: ''};
    }
  
    handleChange = (event) => {
      this.setState({value: event.target.value});
    }
  
    handleSubmit = (event) => {
      console.log('Отправленное имя: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div>  
          <form onSubmit={this.handleSubmit}>
            <label>
              {this.props.label}
              <input type="text" value={this.state.value} onChange={this.handleChange} className="input br-3"/>
            </label>
            <input type="submit" value="Отправить" className="button button_blue" />
          </form>
        </div>
      );
    }
  }