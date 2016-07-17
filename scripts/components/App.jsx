require('../../styles/App');
import React from 'react';
import ScoreBoard from './ScoreBoard';
import Menu from './Menu';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showOverlay: false
        };
    }

    restartGame() {
        this.refs["scoreBoard"].reset();
    }

    undo() {
        this.refs["scoreBoard"].undo();
    }

    scoreChangedHandler(scores) {
        this.setState({undoEnabled: scores.length > 0});
    }

    menuToggled(visible) {
        this.setState({showOverlay: visible})
    }

    overlayClicked() {
        this.refs["menu"].close();
    }

    render() {
        var menuItems = [{text: "New Game", clickHandler: this.restartGame.bind(this)}];
        if (this.state.undoEnabled) {
            menuItems.push({text: "Undo", clickHandler: this.undo.bind(this)});
        }
        return (<div id="app">
                    <ScoreBoard ref="scoreBoard" scoreChangedHandler={this.scoreChangedHandler.bind(this)} />
                    <div onClick={this.overlayClicked.bind(this)} className={this.state.showOverlay ? "visible" : ""} id="overlay"></div>
                    <Menu ref="menu" menuItems={menuItems} menuToggled={this.menuToggled.bind(this)}></Menu>
                </div>);
    }
}
