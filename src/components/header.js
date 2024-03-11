import React from "react";
import logo from "../img/logo.png";
import hamburgerMenu from "../img/Hamburger_icon.png";

class Header extends React.Component {
	render() {
		return(
			<header>
				<div id="headerDiv1">
					<a href="/"><img id="logo" style={{ height:'70px' }} alt="Logga för hemsidan" src={logo} /></a>
					<h1 id="titleID">hej</h1>
					<div id="hamburgerMenu">
						<img style={{ height: '40px' }} alt="Hamburgermeny" src={hamburgerMenu} />
						<div class="dropdown-content">
							<div class="dropdownMenuDiv"><a href="menu">RESTAURANG</a></div>
							<div class="dropdownMenuDiv"><a href="shop">BUTIK</a></div>
							<div class="dropdownMenuDiv"><a href="about">OM OSS</a></div>
							<div class="dropdownMenuDiv"><a href="contact">KONTAKT</a></div>
							<div class="dropdownMenuDiv"><a href="underconstruction">ANNAT</a></div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;