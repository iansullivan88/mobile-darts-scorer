require('../../styles/ScoreButton');
import React from 'react';

export default class ScoreButton extends React.Component {

    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        if (this.props.clickHandler) {
            this.props.clickHandler.call(null, this.props.value);
        }
    }

    render() {
        return <button className="score-button command-button" onClick={this.clickHandler}>{this.props.text}</button>
    }
}
