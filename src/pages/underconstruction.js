import React from "react";
import background from '../img/background.jpg';
import video from '../video/mov_bbb.mp4';

class Underconstruction extends React.Component {
	render() {
		return(
			<div id="container6">
				<img id="backgroundImage" alt="Bakgrund för hemsidan" src={background} />
				<div id="omossInner2">
					Video<br />
					<button id="toggleVideo" type="button">Toggle video</button>
					<p>  
						<video id="video" controls>
							<source src={video} type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</p>
					Tabell
					<p id="omossText">
						<table id="tableID">
							<tr>
							<th>Pizza</th>
							<th>Grill</th>
							<th>Pasta</th>
							</tr>
							<tr>
							<td>Hawaii</td>
							<td>Kebabtallrik</td>
							<td>Carbonara</td>
							</tr>
							<tr>
							<td>Kebabpizza</td>
							<td>Skrovmål</td>
							<td>Bolognese</td>
							</tr>
						</table>
					</p>
				</div>
			</div>
		);
	}
}

export default Underconstruction;