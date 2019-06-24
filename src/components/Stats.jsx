import React from "react";
import StatItem from "./StatItem";

const Stats = () => {
	return (
		<div className="stats">
			<StatItem
				title="BIG PROJECTS"
				number={50}
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, fugit?"
			/>
			<StatItem
				title="CLIENTS"
				number={35}
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nihil!"
			/>
			<StatItem
				title="MONTHS"
				number={80}
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, dolores."
			/>
		</div>
	);
};

export default Stats;
