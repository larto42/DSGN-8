import PropTypes from "prop-types";
import React from "react";
import Title from "../Title/Title";

const SectionImage = props => {
	const { smallText, bigText, image } = props;
	return (
		<div className="section-image" style={{ backgroundImage: `url(${image})` }}>
			<div className="section-image__backdrop" />
			<div className="section-image__text">
				<Title smallText={smallText} bigText={bigText} />
			</div>
		</div>
	);
};

SectionImage.propTypes = {
	bigText: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	smallText: PropTypes.string
};

export default SectionImage;
