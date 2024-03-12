import React from "react";
import background from '../img/background.jpg';

import { NavLink } from "react-router-dom";

class Home extends React.Component{
	render() {
		return(
			<body>
				<div id="container">
					<img id="backgroundImage" alt="Bakgrund för hemsidan" src={background}/>
					<div id="centeringDivIndex">
						<div id="restaurang"><NavLink to="/menu">RESTAURANG</NavLink></div>
						<div id="butik"><NavLink to="/shop">BUTIK</NavLink></div>
						<div id="omoss"><NavLink to="/about">OM OSS</NavLink></div>
						<div id="kontakt"><NavLink to="/contact">KONTAKT</NavLink></div>
					</div>
				</div>
			</body>
		);
	}
}

export default Home;