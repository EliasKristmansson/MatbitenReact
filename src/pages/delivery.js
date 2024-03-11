import React from "react";
import background from '../img/background.jpg';

class Delivery extends React.Component {
	render() {
		return(
			<div id="container2" style={{ height: '270vh' }}>
				<h1 id="menuID"><a href="menu" id="aTagMenu">MENY</a></h1>
				<h1 id="deliveryID"><a href="delivery" id="aTagDelivery">DELIVERY</a></h1>

				<img id="backgroundImage" alt="Bakgrund för hemsidan" src={background} />
				<div id="menuContainer">
					<div id="checkout">
						<p className="pizza">Rätter</p>

						<div className="checkoutInner">
							
						</div>

						<p id="total">Total: x kr</p>

						<button type="button" id="checkoutButton">
							Beställ
						</button>
					</div>

					<div id="vanligMenyDelivery">
						<div className="vanligMenyInner">
							<p className="pizza">Rekommenderas</p>
							<div className="vanligMenyText">
								<ol start="24">
									<li className="menyRatt">Napoli</li>
									<li className="menyRatt">Pirlo</li>
									<li className="menyRatt">Hot Pepper</li>
									<li className="menyRatt">Azteka</li>
								</ol>
							</div>
							<div className="vanligMenyPris">
								119<br />
								119<br />
								119<br />
								119<br />
								
							</div>
							<div className="vanligMenyText">
								<ol start="28">
									<li className="menyRatt">Texas</li>
									<li className="menyRatt">Renen</li>
									<li className="menyRatt">Björklöven</li>
									<li className="menyRatt">Acapulco</li>
								</ol>
							</div>
							<div className="vanligMenyPris">
								119<br />
								119<br />
								119<br />
								119<br />
							</div>
							<div className="vanligMenyText">
								<ol start="32">
									<li className="menyRatt">Teaterallén</li>
									<li className="menyRatt">Västerbottens tacopizza</li>
									<li className="menyRatt">Kebabpizza</li>
									<li className="menyRatt">Umedalens kebabpizza</li>
								</ol>
							</div>
							<div className="vanligMenyPris">
								119<br />
								119<br />
								119<br />
								120<br />
							</div>
						</div>

						<div className="vanligMenyInner" style={{ marginTop: '20px' }}>
							<p className="pizza">Klassisk Pizza</p>
							<div className="vanligMenyText">
								<ol>
									<li className="menyRatt">Margarita</li>
									<li className="menyRatt">Vesuvio</li>
									<li className="menyRatt">Hawaii</li>
									<li className="menyRatt">Capricciosa</li>
									<li className="menyRatt">Bussola</li>
									<li className="menyRatt">Amerikansk pepperoni</li>
									<li className="menyRatt">Al Tonno</li>
									<li className="menyRatt">Disco</li>
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
									<li className="menyRatt">Salami</li>
									<li className="menyRatt">Cecilia</li>
									<li className="menyRatt">Mexicana</li>
									<li className="menyRatt">Havets läckerheter</li>
									<li className="menyRatt">Sofia</li>
									<li className="menyRatt">Maria</li>
									<li className="menyRatt">Kentucky</li>
									<li className="menyRatt">Grekisk pizza</li>
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
									<li className="menyRatt">Falafelpizza</li>
									<li className="menyRatt">Hawaii Special</li>
									<li className="menyRatt">Quattro Formaggi</li>
									<li className="menyRatt">Quattro Stagioni</li>
									<li className="menyRatt">Vegetariana</li>
									<li className="menyRatt">Mamma Mia</li>
									<li className="menyRatt">Baggböle Special</li>
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
									<li className="menyRatt">Margaritarulle</li>
									<li className="menyRatt">Vesuviorulle</li>
									<li className="menyRatt">Hawaiirulle</li>
									<li className="menyRatt">Capricciosarulle</li>
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
									<li className="menyRatt">Räkrulle</li>
									<li className="menyRatt">Vegetarisk rulle</li>
									<li className="menyRatt">Salamirulle</li>
									<li className="menyRatt">Kycklingrulle</li>
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
									<li className="menyRatt">Falafelrulle</li>
									<li className="menyRatt">Kebabrulle</li>
									<li className="menyRatt">Kebabrulle Super</li>
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
									<li className="menyRatt">Calzone</li>
									<li className="menyRatt">Inbakad Hawaii</li>
									<li className="menyRatt">Calzoncino</li>
									<li className="menyRatt">Calzone Special</li>
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
									<li className="menyRatt">Calzone Magnum</li>
									<li className="menyRatt">Jättecalzone</li>
									<li className="menyRatt">Kebabubåt</li>
									<li className="menyRatt">Kycklingubåt</li>
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
									<li className="menyRatt">Ubåt</li>
									<li className="menyRatt">Uikbåt</li>
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
									<li className="menyRatt">Kebab med bröd</li>
									<li className="menyRatt">Falafel med bröd</li>
									<li className="menyRatt">Kebabtallrik</li>
									<li className="menyRatt">Kycklingtallrik</li>
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
									<li className="menyRatt">Falafeltallrik</li>
									<li className="menyRatt">90g Hamburgare</li>
									<li className="menyRatt">Skrovmål</li>
									<li className="menyRatt">Superskrovmål</li>
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
									<li className="menyRatt">Veganburgare</li>
									<li className="menyRatt">Lövbit</li>
									<li className="menyRatt">Liten stripsmeny</li>
									<li className="menyRatt">Stor stripsmeny</li>
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
									<li className="menyRatt">Pasta Carbonara</li>
									<li className="menyRatt">Pasta Bolognese</li>
									<li className="menyRatt">Pasta Vegetarisk</li>
									<li className="menyRatt">Pasta Kycklingcurry</li>
									<li className="menyRatt">Pasta Oxfilé</li>
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
									<li className="menyRatt">Falafelsallad</li>
									<li className="menyRatt">Kebabsallad</li>
									<li className="menyRatt">Caesarsallad</li>
									<li className="menyRatt">Grekisk sallad</li>
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
									<li className="menyRatt">Barnmargarita</li>
									<li className="menyRatt">Barnvesuvio</li>
									<li className="menyRatt">Barnhawaii</li>
									<li className="menyRatt">Barnkebabpizza</li>
									<li className="menyRatt">Barnspaghetti</li>
									<li className="menyRatt">Barnskrovmål</li>
									<li className="menyRatt">Barnkebabtallrik</li>
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
				</div>
			</div>
		);
	}
}

export default Delivery;