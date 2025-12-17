import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import armasMHWilds from "./datos";
import { Card } from "./card";
import { Footer } from "./Footer";


//create your first component
const Home = () => {
	return (
		<>

			<Navbar />

			<Jumbotron />
			<div className="row">
				{
					armasMHWilds.map(arma => {
						return (
							<Card key={arma.nombre} arma={arma} />
						)
					})
				}
			</div>
			<Footer />
		</>
	);
};

export default Home;