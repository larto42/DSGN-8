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
	Aos.init();

	return (
		<div className="App">
			<Header />
			<Hero />
			<Stats />
			<ScrollableAnchor id="team">
				<Section
					image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
					bigText="Our team"
					smallText="Meet us!"
				>
					<Card
						image="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
						title="Adrianna"
						subTitle="Senior Graphic Designer"
						description="She is the graphic designer with 3 years of professional experience."
						animDirection="fade-right"
					/>
					<Card
						image="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80"
						title="Thomas"
						subTitle="Software Engeneer"
						description="He is the software engeneer with 5 years of professional experience"
						animDirection="fade-left"
					/>
					<Card
						image="https://images.unsplash.com/photo-1550926781-93aef598b010?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
						title="Olivia"
						subTitle="Art director"
						description="She is the art director with 8 years of professional experience."
						animDirection="fade-right"
					/>
					<Card
						image="https://images.unsplash.com/photo-1555352820-ff70b8c513ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
						title="Taylor"
						subTitle="CEO"
						description="She is the boss in here."
						animDirection="fade-left"
					/>
				</Section>
			</ScrollableAnchor>
			<ScrollableAnchor id="portfolio">
				<Section
					image="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
					bigText="Portfolio"
					smallText="Check our projects!"
				>
					<Gallery />
				</Section>
			</ScrollableAnchor>
			<ScrollableAnchor id="brands">
				<Section
					image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
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
