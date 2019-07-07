import React from "react";
import "./Header.css";
import Nav from "../Nav/Nav";
const Header = () => {
	return (
		<header className="header content-wrapper">
			<div className="header__logo-icons">
				<h2 className="header__logo">DSGN</h2>
				<div className="header__social-icons">
					<a href="/" className="header__social-icons__link">
						<i className="fab fa-facebook-f" />
					</a>
					<a href="/" className="header__social-icons__link">
						<i className="fab fa-instagram" />
					</a>
					<a href="/" className="header__social-icons__link">
						<i className="fab fa-twitter" />
					</a>
					<a href="/" className="header__social-icons__link">
						<i className="fab fa-linkedin" />
					</a>
				</div>
			</div>
			<Nav />
		</header>
	);
};

export default Header;
