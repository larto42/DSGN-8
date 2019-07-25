import React, { Component } from "react";
import "./BrandGallery.css";

class BrandGallery extends Component {
	state = {
		images: [
			{
				id: 1,
				url:
					"https://techcrunch.com/wp-content/uploads/2018/07/logo-2.png?w=300"
			},
			{
				id: 2,
				url:
					"https://cnet3.cbsistatic.com/img/Yt768C55hXNi2eGSB9qOv-e7SQg=/2011/03/16/c7675aa8-fdba-11e2-8c7c-d4ae52e62bcc/Chrome-logo-2011-03-16.jpg"
			},
			{
				id: 3,
				url:
					"https://www.tablety.pl/wp-content/uploads/2013/09/android-logo.jpg"
			},
			{
				id: 4,
				url:
					"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1024px-Apple_logo_black.svg.png"
			},
			{
				id: 5,
				url: "https://brandmark.io/logo-rank/random/pepsi.png"
			},
			{
				id: 6,
				url:
					"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/788px-Playstation_logo_colour.svg.png"
			},
			{
				id: 7,
				url:
					"https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_640.jpg"
			},
			{
				id: 8,
				url:
					"https://trellis.co/wp-content/uploads/2015/09/hidden_meanings_facts_within_famous_logos_cover_image.jpg"
			},
			{
				id: 9,
				url:
					"https://diylogodesigns.com/wp-content/uploads/2016/05/adidas-blue-logo-png-download.png"
			},

			{
				id: 10,
				url:
					"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NBC_logo.svg/1024px-NBC_logo.svg.png"
			},
			{
				id: 11,
				url: "https://www.topachat.com/images/picto/zz287.png"
			},
			{
				id: 12,
				url:
					"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png"
			}
		]
	};
	render() {
		return (
			<div className="logo-gallery content-wrapper">
				{this.state.images.map(img => (
					<div className="logo-gallery__image-cont" key={img.id}>
						<img
							className="logo-gallery__image-cont__image"
							src={img.url}
							alt=""
						/>
					</div>
				))}
			</div>
		);
	}
}

export default BrandGallery;
