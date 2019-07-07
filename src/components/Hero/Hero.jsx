import React from "react";
import "./Hero.css";
import Title from "../Title/Title";

const Hero = () => {
	return (
		<div className="hero content-wrapper grid-span-all">
			<Title smallText="Need our help?" bigText="Top designers" />
			<a href="#team">
				<button className="hero__goto-action">Check us!</button>
			</a>
			<a href="#portfolio">
				<div className="hero__show-more">
					<span className="hero__show-more__icon lnr lnr-chevron-down" />
					<span className="hero__show-more__icon lnr lnr-chevron-down" />
				</div>
			</a>
			<div className="hero__background-image" />
		</div>
	);
};

export default Hero;
