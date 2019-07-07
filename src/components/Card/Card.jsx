import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ image, title, subTitle, description, animDirection }) => {
	return (
		<div
			className="card content-wrapper"
			data-aos={animDirection}
			data-aos-duration="700"
		>
			<div className="card__description">
				<div className="card__first-part-border">
					<h3 className="card__description__title"> {title} </h3>
					<span className="card__description__subtitle"> {subTitle} </span>
					<p className="card__description__desc"> {description} </p>
				</div>
			</div>
			<div className="card__image" style={{ backgroundImage: `url(${image})` }}>
				<div className="card__second-part-border" />
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
