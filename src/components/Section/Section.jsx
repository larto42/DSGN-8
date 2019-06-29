import React from "react";
import SectionImage from "./SectionImage.jsx";
import PropTypes from "prop-types";
import "./Section.css";

const Section = props => {
	const { children, image, bigText, smallText } = props;
	return (
		<div className="section">
			<SectionImage image={image} bigText={bigText} smallText={smallText} />
			{children}
		</div>
	);
};

Section.propTypes = {
	bigText: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
	image: PropTypes.string.isRequired,
	smallText: PropTypes.string.isRequired
};

export default Section;
