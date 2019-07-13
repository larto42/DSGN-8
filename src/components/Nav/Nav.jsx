import React, { useState } from "react";
import "./Nav.css";

const Nav = () => {
	const [isOpen, setOpen] = useState(false);

	const toogleMenu = () => {
		setOpen(!isOpen);
	};

	return (
		<nav className="menu__wrapper" onClick={toogleMenu}>
			<button className={"menu__button" + (isOpen ? " opened" : "")}>
				<i className="menu__icon_default fas fa-bars" />
				<i className="menu__icon_opened fas fa-times" />
				<span className="menu__text">Menu</span>
			</button>
			<ul className={"menu__list" + (isOpen ? " opened" : "")}>
				<li className="menu__item">
					<a className="menu__item__link" href="#team" onClick={toogleMenu}>
						<div className="menu__item__text-wrapper">
							<span className="menu__item__text">Our team</span>
						</div>
					</a>
				</li>
				<li className="menu__item">
					<a
						href="#portfolio"
						className="menu__item__link"
						onClick={toogleMenu}
					>
						<div className="menu__item__text-wrapper">
							<span className="menu__item__text">Portfolio</span>
						</div>
					</a>
				</li>
				<li className="menu__item">
					<a href="#brands" className="menu__item__link" onClick={toogleMenu}>
						<div className="menu__item__text-wrapper">
							<span className="menu__item__text">Brands</span>
						</div>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
