require('../../styles/App');
import React from 'react';
import ScoreBoard from './ScoreBoard'
import Menu from './Menu'

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

    menuToggled(visible) {
        this.setState({showOverlay: visible})
    }

    render() {
        var menuItems = [{text: "New Game", clickHandler: this.restartGame.bind(this)}]
        return (<div id="app">
                    <ScoreBoard ref="scoreBoard" />
                    <div className={this.state.showOverlay ? "visible" : ""} id="overlay"></div>
                    <Menu menuItems={menuItems} menuToggled={this.menuToggled.bind(this)}></Menu>
                </div>);
    }
}
