import React from 'react';
import Button from '../components/button';
import api from '../api';

export default class SelectButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
  }

  toggleShow = () => {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  }

  render() {
    return (
      <div className="bulkContainer">
        <Button
          title={this.props.title}
          icon={this.props.icon}
          onClick={this.toggleShow}
          className={this.props.className} >
          <div
            className={api.setClasses(
              ["list", this.state.isToggleOn ? "" : "hidden"]
            )}
            onChange={this.handleChange}
            size={this.props.size}
            style={{ height: `${SelectButton.LINEHEIGHT * this.props.size}px` }}>
            {
              this.props.listItems.map((item, index) => {
                return <div
                  className={api.setClasses(
                    ["list__item", item.devider === 1 ? "bb" : ""]
                  )}
                  key={index}
                  onClick={() => alert(index)}
                  value={index}>
                  {item.title}
                </div>
              })
            }
          </div>
        </Button>
      </div>
    );
  }
}

const defaultProps = {
  className: "",
  title: "Button",
  icon: false,
  size: 9,
  value: 0
}

SelectButton.LINEHEIGHT = 40;