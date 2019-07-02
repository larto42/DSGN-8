import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer content-wrapper">
			<div className="footer__section">
				<h2 className="footer__section__title">Our team</h2>
				<p className="footer__section__text">
					We are the best company in the entire wordl!
				</p>
			</div>

			<div className="footer__section">
				<h2 className="footer__section__title">About</h2>
				<p className="footer__section__text">
					We are the best company in the entire wordl!
				</p>
			</div>

			<div className="footer__section">
				<h2 className="footer__section__title">Contact</h2>
				<p className="footer__section__text">free@template.com</p>
				<p className="footer__section__text">www.freetemplate.com</p>
				<p className="footer__section__text">tel. +48 123 456 79</p>
			</div>
			<div className="copyright">Copyright R DSGN free use!</div>
		</footer>
	);
};

export default Footer;
