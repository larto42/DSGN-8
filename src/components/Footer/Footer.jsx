import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer content-wrapper grid-span-all">
			<div className="footer__wrapper grid content-wrapper">
				<div
					className="footer__section"
					data-aos="flip-left"
					data-aos-duration="700"
					data-aos-delay="300"
					data-aos-anchor-placement="top-bottom"
				>
					<h2 className="footer__section__title">Our team</h2>
					<p className="footer__section__text">
						If you want to work with us, feel free to contact us via email. We
						are always looking for developers!
					</p>
				</div>

				<div
					className="footer__section"
					data-aos="flip-right"
					data-aos-duration="700"
					data-aos-anchor-placement="top-bottom"
				>
					<h2 className="footer__section__title">About</h2>
					<p className="footer__section__text">
						We are the best company in the entire wordl!
					</p>
				</div>

				<div
					className="footer__section"
					data-aos="flip-left"
					data-aos-duration="700"
					data-aos-delay="300"
					data-aos-anchor-placement="top-bottom"
				>
					<h2 className="footer__section__title">Contact</h2>
					<p className="footer__section__text">free@template.com</p>
					<p className="footer__section__text">www.freetemplate.com</p>
					<p className="footer__section__text">tel. +48 123 456 79</p>
				</div>
				<div className="copyright">Copyright Ⓡ DSGN free use!</div>
			</div>
		</footer>
	);
};

export default Footer;
