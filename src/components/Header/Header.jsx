import React from "react";
import "./Header.css";
import Nav from "../Nav/Nav";
const Header = () => {
	return (
		<header className="header content-wrapper">
			<div className="header__logo-icons">
				<h2 className="header__logo">
					{/* eslint-disable-next-line */}
					<a href="#">DSGN</a>
				</h2>
				<div className="header__social-icons">
					{/* eslint-disable-next-line */}
					<a href="#" className="header__social-icons__link">
						<i className="fab fa-facebook-f" />
					</a>
					{/* eslint-disable-next-line */}
					<a href="#" className="header__social-icons__link">
						<i className="fab fa-instagram" />
					</a>
					{/* eslint-disable-next-line */}
					<a href="#" className="header__social-icons__link">
						<i className="fab fa-twitter" />
					</a>
					{/* eslint-disable-next-line */}
					<a href="#" className="header__social-icons__link">
						<i className="fab fa-linkedin" />
					</a>
				</div>
			</div>
			<Nav />
		</header>
	);
};

export default Header;
