require('../../styles/Menu');
import React from 'react';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this._menuButtonClicked = this._menuButtonClicked.bind(this);
        this.state = {
            showMenu: false
        };
    }

    _menuButtonClicked() {
        var showMenu = !this.state.showMenu;
        this.setState({ showMenu: showMenu });
        this.props.menuToggled(showMenu);
    }

    _commandClicked(handler) {
        this._menuButtonClicked();
        handler();
    }

    render() {

        var popupClass = "popup " + (this.state.showMenu ? "visible" : "");


        return (
            <aside id="menu">
                <button onClick={this._menuButtonClicked}>
                    <img src="images/menu.svg" alt="Burger Menu"></img>
                </button>
                <div className={popupClass}>
                    <svg className="arrow">
                        <polygon points="10,0 0,10 20,10" />
                    </svg>
                    <ul>
                        {this.props.menuItems.map((item, i) =>
                            <li key="{i}"><button className="command-button" onClick={this._commandClicked.bind(this, item.clickHandler)}>{item.text}</button></li>
                        )}
                    </ul>
                </div>
            </aside>
        );
    }
}
