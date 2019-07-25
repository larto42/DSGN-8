import React from "react";
import "./Header.css";
import Nav from "../Nav/Nav";

const HeaderIcon = ({iconClass}) => {
	return (
		<React.Fragment>
			{/* eslint-disable-next-line */}
			<a href="#" className="header__social-icons__link">
				<i className={`fab ${iconClass}`} />
			</a>
		</React.Fragment>
	);
}

const iconClasses = ["fa-facebook-f", "fa-instagram", "fa-twitter", "fa-linkedin"];

const Header = () => {
	return (
		<header className="header content-wrapper">
			<div className="header__logo-icons">
				<h2 className="header__logo">
					{/* eslint-disable-next-line */}
					<a href="#">DSGN</a>
				</h2>
				<div className="header__social-icons">
					{iconClasses.map((item, index) => <HeaderIcon key={index} iconClass={item}/>)}
				</div>
			</div>
			<Nav />
		</header>
	);
};

export default Header;
