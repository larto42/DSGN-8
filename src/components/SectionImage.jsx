import PropTypes from "prop-types";
import React from "react";

const SectionImage = props => {
	const { smallText, bigText, image } = props;
	return (
		<div>
			<div>
				<span>{smallText}</span>
				<h3>{bigText}</h3>
				<img src={image} alt="" />
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
