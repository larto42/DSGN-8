import React from "react";
import "./Hero.css";
import Title from "../Title/Title";

const Hero = () => {
	return (
		<div className="hero">
			<Title smallText="Need our help?" bigText="Top designers" />
			<button>Check us!</button>
			<div className="show-more-wrapper">
				<span className="lnr lnr-chevron-down" />
				<span className="lnr lnr-chevron-down" />
			</div>
			<div className="hero-bg" />
		</div>
	);
};

export default Hero;
