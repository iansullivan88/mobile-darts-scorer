require('../../styles/ScoreBoard');
import React from 'react';
import ScoreButton from './ScoreButton'

export default class ScoreBoard extends React.Component {

    constructor(props) {
        super(props);
        this._numberClicked = this._numberClicked.bind(this);
        this._okClicked = this._okClicked.bind(this);
        this._cClicked = this._cClicked.bind(this);
        this.state = {
            scores: [],
            enteredNumbers: ""
        };
    }

    _numberClicked(n) {
        this.setState({enteredNumbers: this.state.enteredNumbers + n})
    }

    _cClicked() {
        if (this.state.enteredNumbers) {
            this.setState({enteredNumbers: this.state.enteredNumbers.slice(0, -1)});
        }
    }

    _okClicked() {
        if (this.state.enteredNumbers) {
            var enteredValue = parseInt(this.state.enteredNumbers);
            var newRemaining = this._remaining - enteredValue;
            if (newRemaining === 0 || newRemaining > 1) {
                this.setState({scores: this.state.scores.concat([enteredValue])});
            } else {
                this.setState({scores: this.state.scores.concat(0)});
            }

            this.setState({enteredNumbers: ""});
        }
    }

    reset() {
        this.setState({
            scores: [],
            enteredNumbers: ""
        });
    }

    get _totalScore() {
        return this.state.scores.reduce((a,b) => a + b, 0);
    }

    get _remaining() {
        return 501 - this._totalScore;
    }

    get _totalTurns() {
        return this.state.scores.length;
    }

    render() {
        var displayNumber = this.state.enteredNumbers ?
            this.state.enteredNumbers :
            this._remaining;

        var average = this._totalTurns > 0
            ? (this._totalScore / this._totalTurns).toFixed(0)
            : "-";

        return (
            <section className="score-board">
                <div className="display-number">{displayNumber}</div>
                <div className="button-container">
                    {[1,2,3,4,5,6,7,8,9,0].map(n =>
                        <ScoreButton key={n} text={n} value={n} clickHandler={this._numberClicked} />
                    )}
                    <ScoreButton text="C" clickHandler={this._cClicked}  />
                    <ScoreButton text="OK"  clickHandler={this._okClicked} />
                </div>
                <table className="stats">
                    <tbody>
                        <tr><td>Turns</td><td>{this._totalTurns}</td></tr>
                        <tr><td>Turn Average</td><td>{average}</td></tr>
                    </tbody>
                </table>
            </section>
        )
    }
}
