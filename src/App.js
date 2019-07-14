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

function App() {
	// Init fade animations on desktop
	Aos.init({
		disable: () => window.innerWidth < 768
	});

	return (
		<div className="App">
			<Header />
			<Hero />
			<Stats />
			<ScrollableAnchor id="team">
				<Section
					image="/img/ourteam.jpg"
					bigText="Our team"
					smallText="Meet us!"
				>
					<Card
						image="/img/Adrianna.jpg"
						title="Adrianna"
						subTitle="Senior Graphic Designer"
						description="She is the graphic designer with 3 years of professional experience."
						animDirection="fade-right"
					/>
					<Card
						image="/img/Thomas.jpg"
						title="Thomas"
						subTitle="Software Engeneer"
						description="He is the software engeneer with 5 years of professional experience"
						animDirection="fade-left"
					/>
					<Card
						image="/img/Olivia.jpg"
						title="Olivia"
						subTitle="Art director"
						description="She is the art director with 8 years of professional experience."
						animDirection="fade-right"
					/>
					<Card
						image="/img/Taylor.jpg"
						title="Taylor"
						subTitle="CEO"
						description="She is the boss in here."
						animDirection="fade-left"
					/>
				</Section>
			</ScrollableAnchor>
			<ScrollableAnchor id="portfolio">
				<Section
					image="/img/portfolio.jpg"
					bigText="Portfolio"
					smallText="Check our projects!"
				>
					<Gallery />
				</Section>
			</ScrollableAnchor>
			<ScrollableAnchor id="brands">
				<Section
					image="/img/brands.jpg"
					bigText="Brands"
					smallText="We work for"
				>
					<BrandGallery />
				</Section>
			</ScrollableAnchor>
			<Footer />
		</div>
	);
}

export default App;
