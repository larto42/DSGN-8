import React from "react";
import StatItem from "./StatItem";
import "./Stats.css";

const Stats = () => {
	return (
		<div className="stats content-wrapper">
			<StatItem
				className="projects-stat"
				title="Big projects"
				number={50}
				description="Our experience shows in projects we've made!"
			/>
			<StatItem
				className="client-stat"
				title="Clients"
				number={35}
				description="Customer satisfaction is the most important for us. That's why we care about every detail."
			/>
			<StatItem
				className="month-stat"
				title="Months"
				number={80}
				description="Over 6 years of constant innovation makes us the best partner for your new project!"
			/>
		</div>
	);
};

export default Stats;
