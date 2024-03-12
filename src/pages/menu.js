import React from "react";
import { NavLink } from "react-router-dom";
import background from '../img/background.jpg';
import dagensImg from '../img/brick-oven-pizza.jpg';

class Menu extends React.Component {
	render() {
		return(
			<div id="container2">
				<h1 id="menuID"><NavLink to="/menu" id="aTagMenu">MENY</NavLink></h1>
				<h1 id="deliveryID"><NavLink to="/delivery" id="aTagDelivery">DELIVERY</NavLink></h1>

				<img id="backgroundImage" alt="Bakgrund för hemsidan" src={background} />
				<div id="menuContainer">
					<div id="dagens">
						<p id="dagensText">Dagens Lunch <br /> Mån - Fre <br /> kl 10-14 <br /> 109kr</p>
						<img id="dagensImg" alt="Vedeldad pizza" src={dagensImg} />
					</div>

					<div id="vanligMeny">
						<div className="vanligMenyInner">
							<p className="pizza">Klassisk Pizza</p>
							<div className="vanligMenyText">
								<ol>
									<li>Margarita</li>
									<li>Vesuvio</li>
									<li>Hawaii</li>
									<li>Capricciosa</li>
									<li>Bussola</li>
									<li>Amerikansk pepperoni</li>
									<li>Al Tonno</li>
									<li>Disco</li>
								</ol>
							</div>
							<div className="vanligMenyPris">95<br />
								99<br />
								99<br />
								99<br />
								99<br />
								99<br />
								99<br />
								99
							</div>
							<div className="vanligMenyText">
								<ol start="9">
									<li>Salami</li>
									<li>Cecilia</li>
									<li>Mexicana</li>
									<li>Havets läckerheter</li>
									<li>Sofia</li>
									<li>Maria</li>
									<li>Kentucky</li>
									<li>Grekisk pizza</li>
								</ol>
							</div>
							<div className="vanligMenyPris">99<br />
								99<br />
								99<br />
								99<br />
								105<br />
								105<br />
								105<br />
								105<br />
							</div>
							<div className="vanligMenyText">
								<ol start="17">
									<li>Falafelpizza</li>
									<li>Hawaii Special</li>
									<li>Quattro Formaggi</li>
									<li>Quattro Stagioni</li>
									<li>Vegetariana</li>
									<li>Mamma Mia</li>
									<li>Baggböle Special</li>
								</ol>
							</div>
							<div className="vanligMenyPris">
								105<br />
								105<br />
								105<br />
								105<br />
								105<br />
								105<br />
								105<br />
								<br />
							</div>
						</div>

						<div className="vanligMenyInner" style={{ marginTop: '20px' }}>
							<p className="pizza">Rullpizza</p>
							<div className="vanligMenyText">
								<ol start="36">
									<li>Margaritarulle</li>
									<li>Vesuviorulle</li>
									<li>Hawaiirulle</li>
									<li>Capricciosarulle</li>
								</ol>
							</div>
							<div className="vanligMenyPris">
								109<br />
								109<br />
								109<br />
								109<br />
							</div>
							<div className="vanligMenyText">
								<ol start="40">
									<li>Räkrulle</li>
									<li>Vegetarisk rulle</li>
									<li>Salamirulle</li>
									<li>Kycklingrulle</li>
								</ol>
							</div>
							<div className="vanligMenyPris">
								109<br />
								109<br />
								109<br />
								109<br />
							</div>
							<div className="vanligMenyText">
								<ol start="44">
									<li>Falafelrulle</li>
									<li>Kebabrulle</li>
									<li>Kebabrulle Super</li>
								</ol>
								<br />
							</div>
							<div className="vanligMenyPris">
								109<br />
								109<br />
								120<br />
								<br />
							</div>
						</div>

						<div className="vanligMenyInner" style={{ marginTop: '20px' }}>
							<p className="pizza">Inbakat</p>
							<div className="vanligMenyText">
								<ol start="47">
									<li>Calzone</li>
									<li>Inbakad Hawaii</li>
									<li>Calzoncino</li>
									<li>Calzone Special</li>
								</ol>
							</div>
							<div className="vanligMenyPris">
								109<br />
								109<br />
								109<br />
								109<br />
							</div>
							<div className="vanligMenyText">
								<ol start="51">
									<li>Calzone Magnum</li>
									<li>Jättecalzone</li>
									<li>Kebabubåt</li>
									<li>Kycklingubåt</li>
								</ol>
							</div>
							<div className="vanligMenyPris">
								109<br />
								129<br />
								109<br />
								109<br />
							</div>
							<div className="vanligMenyText">
								<ol start="55">
									<li>Ubåt</li>
									<li>Uikbåt</li>
								</ol><br /><br />
							</div>
							<div className="vanligMenyPris">
								119<br />
								119<br /><br /><br />
							</div>
						</div>

						<div className="vanligMenyInner" style={{ marginTop: '20px' }}>
							<p className="pizza">Grillrätter</p>
							<div className="vanligMenyText">
								<ol start="57">
									<li>Kebab med bröd</li>
									<li>Falafel med bröd</li>
									<li>Kebabtallrik</li>
									<li>Kycklingtallrik</li>
								</ol>
							</div>
							<div className="vanligMenyPris">
								109<br />
								109<br />
								109<br />
								109<br />
							</div>
							<div className="vanligMenyText">
								<ol start="61">
									<li>Falafeltallrik</li>
									<li>90g Hamburgare</li>
									<li>Skrovmål</li>
									<li>Superskrovmål</li>
								</ol>
							</div>
							<div className="vanligMenyPris">
								109<br />
								49<br />
								109<br />
								109<br />
							</div>
							<div className="vanligMenyText">
								<ol start="65">
									<li>Veganburgare</li>
									<li>Lövbit</li>
									<li>Liten stripsmeny</li>
									<li>Stor stripsmeny</li>
								</ol>
							</div>
							<div className="vanligMenyPris">
								109<br />
								125<br />
								30<br />
								40<br />
							</div>
						</div>
						
						<div className="vanligMenyInnerAlt">
							<p className="pizza">Pasta</p>
							<div className="vanligMenyText" style={{ width: '73%' }}>
								<ol start="69">
									<li>Pasta Carbonara</li>
									<li>Pasta Bolognese</li>
									<li>Pasta Vegetarisk</li>
									<li>Pasta Kycklingcurry</li>
									<li>Pasta Oxfilé</li>
								</ol><br /><br />
							</div>
							<div className="vanligMenyPris" style={{ width: '5%' }}>
								119<br />
								119<br />
								119<br />
								119<br />
								139<br /><br /><br />
							</div>
						</div>

						<div className="vanligMenyInnerAlt">
							<p className="pizza">Sallad</p>
							<div className="vanligMenyText" style={{ width: '73%' }}>
								<ol start="74">
									<li>Falafelsallad</li>
									<li>Kebabsallad</li>
									<li>Caesarsallad</li>
									<li>Grekisk sallad</li>
								</ol>
								<br /><br /><br />
							</div>
							<div className="vanligMenyPris" style={{ width: '5%' }}>
								109<br />
								109<br />
								119<br />
								119<br />
								<br /><br /><br />
							</div>
						</div>

						<div className="vanligMenyInnerAlt">
							<p className="pizza">Barn</p>
							<div className="vanligMenyText" style={{ width: '73%' }}>
								<ol start="78">
									<li>Barnmargarita</li>
									<li>Barnvesuvio</li>
									<li>Barnhawaii</li>
									<li>Barnkebabpizza</li>
									<li>Barnspaghetti</li>
									<li>Barnskrovmål</li>
									<li>Barnkebabtallrik</li>
								</ol>
							</div>
							<div className="vanligMenyPris" style={{ width: '5%' }}>
								75<br />
								80<br />
								80<br />
								89<br />
								79<br />
								79<br />
								85<br />
							</div>
						</div>
					</div>

					<div id="rekommenderas">
						<div id="rekommenderasInner">
							<p style={{ fontSize: '2vw', textAlign: 'center' }}>Rekommenderas</p>
							<div id="rekommenderasText">
								<ol start="24">
									<li>Napoli</li>
									<li>Pirlo</li>
									<li>Hot Pepper</li>
									<li>Azteka</li>
									<li>Texas</li>
									<li>Renen</li>
									<li>Björklöven</li>
									<li>Acapulco</li>
									<li>Teaterallén</li>
									<li>Västerbottens tacopizza</li>
									<li>Kebabpizza</li>
									<li>Umedalens kebabpizza</li>
								</ol>
							</div>
							<div id="rekommenderasPris">
								119<br />
								119<br />
								119<br />
								119<br />
								119<br />
								119<br />
								119<br />
								119<br />
								119<br />
								119<br />
								119<br />
								120<br />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Menu;