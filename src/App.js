import React from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Header from "./components/Header.jsx";
import Slider from "./components/Slider.jsx";
import Stats from "./components/Stats.jsx";
import Card from "./components/Card";
import Section from "./components/Section.jsx";
import Gallery from "./components/Gallery";
import BrandLogo from "./components/BrandLogo";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<Slider />
			<Stats />
			<Section
				image="https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
				bigText="OUR TEAM"
				smallText="Meet us!"
			>
				<Card
					image="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
					title="ADRIANNA"
					subTitle="Senior Graphic Designer"
					description="She is the graphic designer with 3 years of professional experience."
				/>
				<Card
					image="https://images.unsplash.com/photo-1552699498-ec96cf4765ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=715&q=80"
					title="OLIVIA"
					subTitle="Art director"
					description="She is the art director with 8 years of professional experience."
				/>
				<Card
					image="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80"
					title="THOMAS"
					subTitle="Software Engeneer"
					description="He is the software engeneer with 5 years of professional experience"
				/>
				<Card
					image="https://images.unsplash.com/photo-1550926781-93aef598b010?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
					title="TAYLOR"
					subTitle="CEO"
					description="She is the boss in here."
				/>
			</Section>
			<Section
				image="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
				bigText="PORTFOLIO"
				smallText="Check our projects!"
			>
				<Gallery />
			</Section>
			<Section
				image="https://images.unsplash.com/photo-1528962862197-29c4f24ccc04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
				bigText="BRANDS"
				smallText="We work for"
			>
				<BrandLogo image="https://via.placeholder.com/150" />
				<BrandLogo image="https://via.placeholder.com/150" />
				<BrandLogo image="https://via.placeholder.com/150" />
				<BrandLogo image="https://via.placeholder.com/150" />
				<BrandLogo image="https://via.placeholder.com/150" />
				<BrandLogo image="https://via.placeholder.com/150" />
				<BrandLogo image="https://via.placeholder.com/150" />
				<BrandLogo image="https://via.placeholder.com/150" />
				<BrandLogo image="https://via.placeholder.com/150" />
				<BrandLogo image="https://via.placeholder.com/150" />
				<BrandLogo image="https://via.placeholder.com/150" />
				<BrandLogo image="https://via.placeholder.com/150" />
			</Section>

			<Footer />
		</div>
	);
}

export default App;
