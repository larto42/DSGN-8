import React from "react";
import "./Slider.css";

const Slider = () => {
	return (
		<div className="slider">
			<p>Need our help?</p>
			<h2>TOP DESIGNERS</h2>
			<button>CHECK US!</button>
			<div className="show-more-wrapper">
				<span class="lnr lnr-chevron-down" />
				<span class="lnr lnr-chevron-down" />
			</div>
			<div className="slider-bg" />
		</div>
	);
};

export default Slider;
