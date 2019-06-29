import PropTypes from "prop-types";
import React from "react";
import CircularProgress from "@bit/mui-org.material-ui.circular-progress";

const StateItem = props => {
	const { number, title, description, className } = props;
	return (
		<div className="stat-wrapper">
			<div className={`circle ${className}`}>
				<CircularProgress
					variant="static"
					value={number}
					thickness={1}
					size={150}
				/>
				<CircularProgress
					variant="static"
					value={100}
					thickness={1}
					size={150}
				/>

				<h2>{number} </h2>
				<h3>{title}</h3>
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
