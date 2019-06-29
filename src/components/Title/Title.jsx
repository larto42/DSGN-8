import PropTypes from "prop-types";
import React from "react";
import "./Title.css";

const Title = props => {
	const { smallText, bigText } = props;
	return (
		<div className="title">
			<div className="title__subtitle">
				<span className="title__subtitle__line" />
				<p className="title__subtitle__text">{smallText}</p>
				<span className="title__subtitle__line" />
			</div>
			<h2 className="title__main-title">{bigText}</h2>
		</div>
	);
};

Title.propTypes = {
	bigText: PropTypes.string,
	smallText: PropTypes.string
};

export default Title;
