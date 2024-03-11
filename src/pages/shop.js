import React from "react";
import background from '../img/background.jpg';
import RightArrow from '../img/arrowButikRight.png';
import LeftArrow from '../img/arrowButik.png';
import Chips1 from '../img/chips1.png';
import Chips2 from '../img/chips2.png';
import Chips3 from '../img/chips3.png';
import Chips4 from '../img/chips4.png';
import Chips5 from '../img/chips5.png';
import Chips6 from '../img/chips5.png';
import Drink1 from '../img/coke-removebg-preview.png';
import Drink2 from '../img/fantaexotic-removebg-preview.png';
import Drink3 from '../img/fanta-removebg-preview.png';
import Drink4 from '../img/pepsimax-removebg-preview.png';
import Drink5 from '../img/julmust-removebg-preview.png';
import Drink6 from '../img/sprite-removebg-preview.png';

class Shop extends React.Component {
	render() {
		return(
			<div id="container4">
				<img id="backgroundImage" alt="Bakgrund för hemsidan" src={background} />
				<div id="butikContainer">
					<h2 className="butikHeaderText">
						Populära produkter
					</h2>
					<hr style={{ height: '5px', border: 'none', backgroundColor: '#4e1705' }} />
					<h2 className="butikHeaderText">
						Snacks

						<img className="pilButik" alt="Pil höger" src={RightArrow} />
						<img className="pilButik" alt="Pil vänster" src={LeftArrow} />
						
					</h2>
					

					<div className="butikProduktOuter" style={{ marginBottom: '25px' }}>
						<div className="butikProdukt">
							<div className="butikProduktGradient">
								<img className="produktImage" alt="Coca-Cola" src={Chips1} />
								<p className="butikProduktText">OLW Flamin' Hot Cheddar</p>
							</div>
						</div>
						<div className="butikProdukt">
							<div className="butikProduktGradient">
								<img className="produktImage" alt="Coca-Cola" src={Chips2} />
								<p className="butikProduktText">OLW Smör och <br />havssalt</p>
							</div>
						</div>
						<div className="butikProdukt">
							<div className="butikProduktGradient">
								<img className="produktImage" alt="Coca-Cola" src={Chips3} />
								<p className="butikProduktText">OLW Delichips <br />Havssalt</p>
							</div>
						</div>
						<div className="butikProdukt">
							<div className="butikProduktGradient">
								<img className="produktImage" alt="Coca-Cola" src={Chips4} />
								<p className="butikProduktText">OLW Hot Ranch</p>
							</div>
						</div>
						<div className="butikProdukt">
							<div className="butikProduktGradient">
								<img className="produktImage" alt="Coca-Cola" src={Chips5} />
								<p className="butikProduktText">OLW Cream <br />Cheese</p>
							</div>
						</div>
						<div className="butikProdukt">
							<div className="butikProduktGradient">
								<img className="produktImage" alt="Coca-Cola" src={Chips6} />
								<p className="butikProduktText">OLW Grillchips</p>
							</div>
						</div>
					</div>

					<h2 className="butikHeaderText">
						Dryck

						<img className="pilButik" alt="Pil höger" src={RightArrow} />
						<img className="pilButik" alt="Pil vänster" src={LeftArrow} />
						

					</h2>

					<div className="butikProduktOuter">
						<div className="butikProdukt">
							<div className="butikProduktGradient">
								<img className="produktImage" alt="Coca-Cola" src={Drink1} />
								<p className="butikProduktText">Coca-Cola</p>
							</div>
						</div>
						<div className="butikProdukt">
							<div className="butikProduktGradient">
								<img className="produktImage" alt="Coca-Cola" src={Drink2} />
								<p className="butikProduktText">Fanta Exotic <br />Zero</p>
							</div>
						</div>
						<div className="butikProdukt">
							<div className="butikProduktGradient">
								<img className="produktImage" alt="Coca-Cola" src={Drink3} />
								<p className="butikProduktText">Fanta Zero</p>
							</div>
						</div>
						<div className="butikProdukt">
							<div className="butikProduktGradient">
								<img className="produktImage" alt="Coca-Cola" src={Drink4} />
								<p className="butikProduktText">Pepsi Max</p>
							</div>
						</div>
						<div className="butikProdukt">
							<div className="butikProduktGradient">
								<img className="produktImage" alt="Coca-Cola" src={Drink5} />
								<p className="butikProduktText">Julmust</p>
							</div>
						</div>
						<div className="butikProdukt">
							<div className="butikProduktGradient">
								<img className="produktImage" alt="Coca-Cola" src={Drink6} />
								<p className="butikProduktText">Sprite Zero</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Shop;