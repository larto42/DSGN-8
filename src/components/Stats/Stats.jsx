import React from "react";
import StatItem from "./StatItem";
import "./Stats.css";

const Stats = () => {
	const stats = [
		{
			className: "projects-stat",
			title: "Big projects",
			number: 50,
			description: "Our experience shows in projects we've made!",
		},
		{
			className: "client-stat",
			title: "Clients",
			number: 35,
			description: "Customer satisfaction is the most important for us. That's why we care about every detail.",
		},
		{
			className: "month-stat",
			title: "Months",
			number: 80,
			description: "Over 6 years of constant innovation makes us the best partner for your new project!",
		},
	];
	
	return (
		<div className="stats content-wrapper">
			{stats.map((item, index) => 
				<StatItem
					key={index}
					className={item.className}
					title={item.title}
					number={item.number}
					description={item.description}
				/>
			)}
		</div>
	);
};

export default Stats;
