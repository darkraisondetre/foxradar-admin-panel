import React from 'react';
import Button from '../components/button';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

export default class SelectButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false,
        };
    }

    toggleShow = () => {
        this.setState(currentState => ({
            isToggleOn: !currentState.isToggleOn
        }));
    }

    render() {
        return (
            <div className="bulkContainer">
                <Button title="Bulk Actions" icon={faChevronDown} className="button_blue" onClick={this.toggleShow}>
                <div className={this.state.isToggleOn ? 'list' : 'list hidden'} 
                    size={this.props.size}
                    style={{height: `${SelectButton.LINEHEIGHT*this.props.size}px`}}>
                        <div className="list__item">Adjust Time for All</div>
                        <div className="list__item">Disconnect All Users for All</div>
                        <div className="list__item">Disable All</div>
                        <div className="list__item bb">Enable All</div>
                        <div className="list__item">Adjust Time for Selected</div>
                        <div className="list__item">Disconnect Selected</div>
                        <div className="list__item">Disable Selected</div>
                        <div className="list__item">Enable Selected</div>
                        <div className="list__item">Delete Selected</div>
                </div>
                </Button>
            </div>
        );
    }
}

const defaultProps = {
    className: "",
    isLink: false,
    title: "Button",
    icon: false,
    size: 9,
    height: 400
}

SelectButton.LINEHEIGHT = 40;



// const dataTitles = [
//     {id: 1, title: 'Adjust Time for All'},
//     {id: 2, title: 'Disconnect All Users for All'},
//     {id: 3, title: 'Disable All'},
//     {id: 4, title: 'Enable All'},
//     {id: 5, title: 'Adjust Time for Selected'},
//     {id: 6, title: 'Disconnect Selected'},
//     {id: 7, title: 'Disable Selected'},
//     {id: 8, title: 'Enable Selected'},
//     {id: 9, title: 'Delete Selected'},
// ]; 

// const listItems = dataTitles.map((el) => {
//     <div className="list__item" key={el.id}>{el.title}</div>
// });