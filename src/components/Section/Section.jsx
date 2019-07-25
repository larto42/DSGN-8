import React, { Component } from "react";
import SectionImage from "./SectionImage.jsx";
import PropTypes from "prop-types";
import "./Section.css";

class Section extends Component {
	render() {
		const { children, image, bigText, smallText } = this.props;
		return (
			<div className="section content-wrapper  grid-span-all">
				<SectionImage image={image} bigText={bigText} smallText={smallText} />
				<div className="grid">{children}</div>
			</div>
		);
	}
}

Section.propTypes = {
	bigText: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
	image: PropTypes.string.isRequired,
	smallText: PropTypes.string.isRequired
};

export default Section;
