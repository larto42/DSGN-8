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
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollableAnchor from "react-scrollable-anchor";
import ourteam from "./img/ourteam.jpg";
import adrianna from "./img/Adrianna.jpg";
import thomas from "./img/Thomas.jpg";
import olivia from "./img/Olivia.jpg";
import taylor from "./img/Taylor.jpg";
import portfolio from "./img/portfolio.jpg";
import brands from "./img/brands.jpg";

function App() {
	// Init fade animations on desktop
	Aos.init({
		disable: () => window.innerWidth < 768
	});

	const team = [
		{
			name: "Adrianna",
			position: "Senior Graphic Designer",
			description: "She is the graphic designer with 3 years of professional experience.",
			animationClass: "fade-right",
			image: adrianna
		},
		{
			name: "Thomas",
			position: "Software Engeneer",
			description: "He is the software engeneer with 5 years of professional experience.",
			animationClass: "fade-left",
			image: thomas
		},
		{
			name: "Olivia",
			position: "Art director",
			description: "She is the art director with 8 years of professional experience.",
			animationClass: "fade-right",
			image: olivia
		},
		{
			name: "Taylor",
			position: "CEO",
			description: "She is the boss in here.",
			animationClass: "fade-left",
			image: taylor
		},
	]

	return (
		<div className="App">
			<Header />
			<Hero />
			<Stats />
			<ScrollableAnchor id="team">
				<Section image={ourteam} bigText="Our team" smallText="Meet us!">
					{team.map((item, index) => 
						<Card
							key={index}
							image={item.image}
							title={item.name}
							subTitle={item.position}
							description={item.description}
							animDirection={item.animationClass}
						/>
					)}
				</Section>
			</ScrollableAnchor>
			<ScrollableAnchor id="portfolio">
				<Section
					image={portfolio}
					bigText="Portfolio"
					smallText="Check our projects!"
				>
					<Gallery />
				</Section>
			</ScrollableAnchor>
			<ScrollableAnchor id="brands">
				<Section image={brands} bigText="Brands" smallText="We work for">
					<BrandGallery />
				</Section>
			</ScrollableAnchor>
			<Footer />
		</div>
	);
}

export default App;
