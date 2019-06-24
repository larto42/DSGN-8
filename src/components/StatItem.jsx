import PropTypes from "prop-types";
import React from "react";

const StateItem = props => {
	const { number, title, description } = props;
	return (
		<div className="stat-wrapper">
			<div className="circle">
				<span>{number} </span>
				<span>{title}</span>
			</div>
			<p className="description">{description}</p>
		</div>
	);
};

StateItem.propTypes = {
	description: PropTypes.string.isRequired,
	number: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired
};

export default StateItem;
