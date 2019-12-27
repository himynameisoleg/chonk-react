import React, { Component } from "react";
import Logo from "../Logo/Logo";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/#/">
            <Logo />
          </a>
          <a className="navbar-item" href="/#/">
            <div className="has-text-weight-bold is-family-monospace">OMG.io</div>
          </a>
          <a
            role="button"
            onClick={this.handleClick}
            className={`navbar-burger ${
              this.state.isToggleOn ? "is-active" : ""
            }`}
            aria-label="menu"
            aria-expanded="false"
            href="/#/"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          className={`navbar-menu ${this.state.isToggleOn ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <a className="navbar-item" href="/#/" onClick={this.handleClick}>
              Home
            </a>
            <a className="navbar-item" href="/#/" onClick={this.handleClick}>
              Blog
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
