import React from "react";
import "./Header.css";
import Nav from "../Nav/Nav";
const Header = () => {
	return (
		<header className="header content-wrapper">
			<div className="header__logo-icons">
				<h2 className="header__logo">DSGN</h2>
				<div className="header__social-icons">
					<i class="fab fa-facebook-f" />
					<i class="fab fa-instagram" />
					<i class="fab fa-twitter" />
					<i class="fab fa-linkedin" />
				</div>
			</div>
			<Nav />
		</header>
	);
};

export default Header;
