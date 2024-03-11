import React from "react";
import background from '../img/background.jpg';

class Home extends React.Component{
	render() {
		return(
			<body>
				<div id="container">
					<img id="backgroundImage" alt="Bakgrund för hemsidan" src={background}/>
					<div id="centeringDivIndex">
						<div id="restaurang"><a href="menu">RESTAURANG</a></div>
						<div id="butik"><a href="shop">BUTIK</a></div>
						<div id="omoss"><a href="about">OM OSS</a></div>
						<div id="kontakt"><a href="contact">KONTAKT</a></div>
					</div>
				</div>
			</body>
		);
	}
}

export default Home;