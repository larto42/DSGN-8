import React from "react";
import StatItem from "./StatItem";
import "./Stats.css";

const Stats = () => {
	return (
		<div className="stats">
			<StatItem
				className="projects-stat"
				title="BIG PROJECTS"
				number={50}
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, fugit?"
			/>
			<StatItem
				className="client-stat"
				title="CLIENTS"
				number={35}
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nihil!"
			/>
			<StatItem
				className="month-stat"
				title="MONTHS"
				number={80}
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, dolores."
			/>
		</div>
	);
};

export default Stats;
