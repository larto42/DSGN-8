import React from "react";
import PropTypes from "prop-types";

const Card = ({ image, title, subTitle, description }) => {
	return (
		<div>
			<img src={image} alt="" />
			<div className="descriptionWrapper">
				<h3> {title} </h3>
				<span> {subTitle} </span>
				<p> {description} </p>
			</div>
		</div>
	);
};

Card.propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};

export default Card;
