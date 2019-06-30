import React from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Stats from "./components/Stats/Stats.jsx";
import Card from "./components/Card/Card";
import Section from "./components/Section/Section.jsx";
import Gallery from "./components/Gallery/Gallery";
import BrandGallery from "./components/BrandGallery/BrandGallery";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<Stats />
			<Section
				image="https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
				bigText="Our team"
				smallText="Meet us!"
			>
				<Card
					image="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
					title="Adrianna"
					subTitle="Senior Graphic Designer"
					description="She is the graphic designer with 3 years of professional experience."
				/>
				<Card
					image="https://images.unsplash.com/photo-1552699498-ec96cf4765ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=715&q=80"
					title="Olivia"
					subTitle="Art director"
					description="She is the art director with 8 years of professional experience."
				/>
				<Card
					image="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80"
					title="Thomas"
					subTitle="Software Engeneer"
					description="He is the software engeneer with 5 years of professional experience"
				/>
				<Card
					image="https://images.unsplash.com/photo-1550926781-93aef598b010?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
					title="Taylor"
					subTitle="CEO"
					description="She is the boss in here."
				/>
			</Section>
			<Section
				image="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
				bigText="Portfolio"
				smallText="Check our projects!"
			>
				<Gallery />
			</Section>
			<Section
				image="https://images.unsplash.com/photo-1528962862197-29c4f24ccc04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
				bigText="Brands"
				smallText="We work for"
			>
				<BrandGallery />
			</Section>

			<Footer />
		</div>
	);
}

export default App;
