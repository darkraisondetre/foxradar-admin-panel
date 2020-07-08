import React from 'react';
import Button from '../components/button';
import api from '../api';

export default class SelectButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      value: 0,
    };
  }

  static defaultProps = {
    className: "",
    title: "",
    icon: false,
    size: 9
  }

  toggleShow = () => {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  }

  onChoose = (id) => {
    this.setState({
      value: id
    });
    console.log(id);
  }

  render() {
    const selectValue = {
      value: this.state.value,
    }
    return (
      <Button
        title={this.props.title}
        icon={this.props.icon}
        onClick={this.toggleShow}
        className={this.props.className}
        value={selectValue.value}>
        <div
          className={api.setClasses(
            ["list", this.props.className],
            {
              hidden: !this.state.isToggleOn
            }
          )}
          value={selectValue.value}
          onChange={ this.handleChange }
          size={this.props.size}
          style={{ height: `${SelectButton.LINEHEIGHT * this.props.size}px` }}>
          {
            this.props.list.map((item, index) => {
              return <div
                className={api.setClasses(
                  ["list__item"],
                  { 
                    bb: item.devider === 1,
                    selected: this.state.value === index
                  }
                )}
                key={index}
                onClick={() => this.onChoose(index)}>
                {item.title}
              </div>
            })
          }
        </div>
      </Button>
    );
  }
}

SelectButton.LINEHEIGHT = 40;