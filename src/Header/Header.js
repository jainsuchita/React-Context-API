import React, { Component } from 'react'
import ThemeContext from '../context/ThemeContext';

export default class Header extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    theme => (
                        <header style={{ background: theme.config.headerBg, color: theme.config.fontColor }}>
                            <div className="logo-container">
                                <img src={theme.config.logo} alt="logo" />
                            </div>
                        </header>
                    )
                }
            </ThemeContext.Consumer>
        )
    }
}
