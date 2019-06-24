import PropTypes from "prop-types";
import React from "react";

const BrandLogo = props => {
	const { image } = props;
	return (
		<div>
			<img src={image} alt="" />
		</div>
	);
};

BrandLogo.propTypes = {
	image: PropTypes.string.isRequired
};

export default BrandLogo;
