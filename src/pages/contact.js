import React from "react";
import background from '../img/background.jpg';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';
import twitter from '../img/twitter.png';

class Contact extends React.Component {
	render() {
		return(
			<div id="container5" style={{ overflow: 'hidden' }}>
				<img id="backgroundImage" alt="Bakgrund för hemsidan" src={background} />
				<div id="kontaktInner">
					<form id="form">
						<div>
							<label for="fnameInput" id="fnameLabel">Förnamn:</label><br />
							<input type="text" onfocus="inputFocus(this)" onblur="inputBlur(this)" name="fname" id="fnameInput" placeholder="Förnamn" />
						</div>
						<div>
							<label for="lnameInput" id="lnameLabel">Efternamn:</label><br />
							<input type="text" onfocus="inputFocus(this)" onblur="inputBlur(this)" name="lname" id="lnameInput" placeholder="Efternamn" />
						</div>
						<div>
							<label for="emailInput" id="emailLabel">Email:</label><br />
							<input type="email" onfocus="inputFocus(this)" onblur="inputBlur(this)" name="email" id="emailInput" placeholder="Email" />
						</div>
						<div>
							<label for="messageInput" id="messageLabel">Meddelande:</label><br />
							<textarea name="message" onfocus="inputFocus(this)" onblur="inputBlur(this)" form="form" id="messageInput" placeholder="Meddelande"></textarea>
						</div>
						<button type="submit" id="formButton">
							Skicka
						</button>
					</form>
				</div>
				<p id="kontaktInfoText">
					Pizzeria Matbiten - Umedalsallén 25 Umeå <br />Telefon - 090-316 00<br />
					<a href="https://www.facebook.com/?locale=sv_SE" rel="noreferrer" target="_blank"><img className="socialMedia" alt="Facebook" src={facebook} /></a>
					<a href="https://www.instagram.com/" rel="noreferrer" target="_blank"><img className="socialMedia" alt="Instagram" src={instagram} /></a>
					<a href="https://twitter.com/?lang=sv" rel="noreferrer" target="_blank"><img className="socialMedia" alt="Facebook" src={twitter} /></a>
				</p>
			</div>
		);
	}
}

export default Contact;