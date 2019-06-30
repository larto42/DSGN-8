import PropTypes from "prop-types";
import React from "react";

const BrandLogo = props => {
	const { image } = props;
	return (
		<div className="logo">
			<img className="logo__image" src={image} alt="" />
		</div>
	);
};

BrandLogo.propTypes = {
	image: PropTypes.string.isRequired
};

export default BrandLogo;
