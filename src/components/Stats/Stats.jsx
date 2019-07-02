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
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, fugit?"
			/>
			<StatItem
				className="client-stat"
				title="Clients"
				number={35}
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nihil!"
			/>
			<StatItem
				className="month-stat"
				title="Months"
				number={80}
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, dolores."
			/>
		</div>
	);
};

export default Stats;
