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

    const { title, icon, className, size, list } = this.props;
    return (
      <Button
        title={title}
        icon={icon}
        onClick={this.toggleShow}
        className={className}
        value={selectValue.value}>
        <div
          className={api.setClasses(
            ["list", className],
            {
              hidden: !this.state.isToggleOn
            }
          )}
          value={selectValue.value}
          onChange={this.handleChange}
          size={size}
          style={{ height: `${SelectButton.LINEHEIGHT * size}px` }}>
          {
            list.map((item, index) => {
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