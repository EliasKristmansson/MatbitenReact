import React from "react";
import logo from "../img/logo.png";
import hamburgerMenu from "../img/Hamburger_icon.png";

import { NavLink } from "react-router-dom";

class Header extends React.Component {
	render() {
		return(
			<header>
				<div id="headerDiv1">
					<NavLink to="/"><img id="logo" style={{ height:'70px' }} alt="Logga för hemsidan" src={logo} /></NavLink>
					<h1 id="titleID">MATBITEN</h1>
					<div id="hamburgerMenu">
						<img style={{ height: '40px' }} alt="Hamburgermeny" src={hamburgerMenu} />
						<div className="dropdown-content">
							<div className="dropdownMenuDiv"><NavLink to="/menu" >RESTAURANG</NavLink></div>
							<div className="dropdownMenuDiv"><NavLink to="/shop">BUTIK</NavLink></div>
							<div className="dropdownMenuDiv"><NavLink to="/about">OM OSS</NavLink></div>
							<div className="dropdownMenuDiv"><NavLink to="/contact">KONTAKT</NavLink></div>
							<div className="dropdownMenuDiv"><NavLink to="/underconstruction">ANNAT</NavLink></div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;