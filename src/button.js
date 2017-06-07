import React from 'react';
import Apps from './function';
import ReactDOM from 'react-dom';
import RandButton from "./buttonRand";

class Button extends Apps {

    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    addClass() {
        this.setState({
            active: true
        });
    }

    scream() {
        return (
            ReactDOM.render(<Apps source="http://api.dev.loc/api/events"/>, document.getElementById('container'))
        );
    }

    scream2() {
        return (
            ReactDOM.render(<RandButton source="http://api.dev.loc/api/events"/>, document.getElementById('container'))
        );
    }

    changeButton() {
        this.setState({
            active: false
        });
    }

    render() {
        return (
            <div className="buttons">
                <button onClick={() => { this.scream(); this.addClass();}} className={this.state.active? 'active' : 'not-active' || this.state.active}>Load All Items</button>
                <button onClick={() => { this.scream2(); this.changeButton(); }} >Random Item</button>
            </div>
        );
    }

}

ReactDOM.render(<Button />, document.getElementById('button'));