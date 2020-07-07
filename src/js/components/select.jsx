import React from 'react';
import Button from '../components/button';

export default class SelectButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false,
        };
    }

    toggleShow = () => {
        this.setState({
            isToggleOn: !this.state.isToggleOn
        });
    }

    render() {
        const options = this.props.listItems.map((item, index) => {
                return <div 
                className={item.devider === 1 ? "list__item bb" : "list__item"}
                key={index} 
                value={index}>
                    {item.title}
                </div>;
            });

        return (
            <div className="bulkContainer">
                <Button 
                title={this.props.title}
                icon={this.props.icon} 
                onClick={this.toggleShow} 
                className={this.props.className} >
                    <div className={this.state.isToggleOn ? 'list' : 'list hidden'} 
                        size={this.props.size}
                        style={{height: `${SelectButton.LINEHEIGHT*this.props.size}px`}}>
                            {options}
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
    size: 9
}

SelectButton.LINEHEIGHT = 40;