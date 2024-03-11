import React from "react";
import background from '../img/background.jpg';

class About extends React.Component {
	render() {
		return(
			<div id="container3" style={{ overflow: 'hidden' }}>
				<img id="backgroundImage" alt="Bakgrund för hemsidan" src={background} />
				<div id="omossInner">
					<p>
						Pizzeria Matbiten grundades med kärlek till traditionella italienska recept och en passion för att skapa en minnesvärd matupplevelse för våra gäster. Varje pizza vi serverar är en  kombination av färska och högkvalitativa råvaror, omsorgsfullt tillagade för att tillfredsställa dig och dina vänner.
					</p>
					<p id="omossText">
						Hitta oss: Umedalsallén 25, Umeå<br />
	Öppettider: Mån - Fre: 9 - 21. Lör: 10 - 19. Sön: 11 - 18
					</p>
				</div>
			</div>
		);
	}
}

export default About;