import React, { useState } from "react";
import "./Nav.css";

const Nav = () => {
	const [isOpen, setOpen] = useState(false);

	const toogleMenu = () => {
		setOpen(!isOpen);
	};

	const menuItems = [
		{
			href: "#team",
			text: "Our team"
		},
		{
			href: "#portfolio",
			text: "Portfolio"
		},
		{
			href: "#brands",
			text: "Brands"
		},
	];

	return (
		<nav className="menu__wrapper" onClick={toogleMenu}>
			<button
				className={"menu__button" + (isOpen ? " opened" : "")}
				aria-expanded={isOpen ? "true" : "false"}
			>
				<i className="menu__icon_default fas fa-bars" />
				<i className="menu__icon_opened fas fa-times" />
				<span className="menu__text">Menu</span>
			</button>
			<ul className={"menu__list" + (isOpen ? " opened" : "")}>
				{menuItems.map((item, index) => 
					<li key={index} className="menu__item">
						<a className="menu__item__link" href={item.href} onClick={toogleMenu}>
							<div className="menu__item__text-wrapper">
								<span className="menu__item__text">{item.text}</span>
							</div>
						</a>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Nav;
