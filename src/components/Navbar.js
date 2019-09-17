import React, { Component } from "react";

export default class Navbar extends Component {
	// constructor(props) {
	//     super(props);
	//     this.state = {};
	// }

	render() {
		return (
			// TODO do i need a navbar? mauybe just a jumbotron
			
			<nav className="navbar" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<a className="navbar-item" href="#" >
						<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
					</a>
					
					{/* <a role="button" class="navbar-burger burger is-active" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a> */}
				</div>
			</nav>
		);
	}
}


