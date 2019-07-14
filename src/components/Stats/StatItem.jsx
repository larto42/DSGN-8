import PropTypes from "prop-types";
import React, { Component } from "react";
import CircularProgress from "@bit/mui-org.material-ui.circular-progress";
import CountUp from "react-countup";

class StateItem extends Component {
	state = {
		value: 0
	};
	componentDidMount = () => {
		// On mobile set passed value from begining,
		// else wait a moment to make css animation of progress bar by changing the value
		if (window.innerWidth >= 768) {
			setTimeout(() => {
				this.setState({ value: this.props.number });
			}, 0);
		} else {
			this.setState({ value: this.props.number });
		}
	};

	render() {
		const { number, title, description, className } = this.props;

		const animate = window.innerWidth < 768 ? false : true;

		return (
			<div className="stat-wrapper">
				<div className={`circle ${className}`}>
					<CircularProgress
						className="stat__circle__progress"
						variant="static"
						value={this.state.value}
						thickness={1}
						size={150}
					/>
					<CircularProgress
						className="stat__circle__bg"
						variant="static"
						value={100}
						thickness={1}
						size={150}
					/>

					<h2>
						{animate ? (
							<CountUp
								end={number}
								duration={3}
								easingFn={function(t, b, c, d) {
									var ts = (t /= d) * t;
									var tc = ts * t;
									return b + c * (tc + -3 * ts + 3 * t);
								}}
							/>
						) : (
							number
						)}
					</h2>
					<h3>{title}</h3>
				</div>
				<p className="description">{description}</p>
			</div>
		);
	}
}

StateItem.propTypes = {
	description: PropTypes.string.isRequired,
	number: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired
};

export default StateItem;
