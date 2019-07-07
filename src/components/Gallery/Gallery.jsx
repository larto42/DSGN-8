import React, { Component } from "react";
import "./Gallery.css";
import ModalGallery from "./ModalGallery";

class Gallery extends Component {
	state = {
		images: [
			{
				id: 1,
				src:
					"https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
			},
			{
				id: 2,
				src:
					"https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
			},
			{
				id: 3,
				src:
					"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
			},
			{
				id: 4,
				src:
					"https://images.unsplash.com/photo-1506377711776-dbdc2f3c20d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
			},
			{
				id: 5,
				src:
					"https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
			},
			{
				id: 6,
				src:
					"https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
			},
			{
				id: 7,
				src:
					"https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
			},
			{
				id: 8,
				src:
					"https://images.unsplash.com/photo-1519408469771-2586093c3f14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=647&q=80"
			},
			{
				id: 9,
				src:
					"https://images.unsplash.com/photo-1459550428001-4ed6ca421293?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1546&q=80"
			},
			{
				id: 10,
				src:
					"https://images.unsplash.com/photo-1484662020986-75935d2ebc66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
			},
			{
				id: 11,
				src:
					"https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
			},
			{
				id: 12,
				src:
					"https://images.unsplash.com/photo-1476988941939-9b114fb1ba94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
			},
			{
				id: 13,
				src: "https://source.unsplash.com/random/?technology"
			},
			{
				id: 14,
				src: "https://source.unsplash.com/random/?technology,laptop"
			},
			{
				id: 15,
				src: "https://source.unsplash.com/random/?technology,office"
			},
			{
				id: 16,
				src: "https://source.unsplash.com/random/?technology,company"
			},
			{
				id: 17,
				src: "https://source.unsplash.com/random/?technology,pc"
			},
			{
				id: 18,
				src: "https://source.unsplash.com/random/?technology,desk"
			},
			{
				id: 19,
				src: "https://source.unsplash.com/random/?technology,work"
			},
			{
				id: 20,
				src: "https://source.unsplash.com/random/?laptop"
			},
			{
				id: 21,
				src: "https://source.unsplash.com/random/?desk"
			},
			{
				id: 22,
				src: "https://source.unsplash.com/random/?work"
			},
			{
				id: 23,
				src: "https://source.unsplash.com/random/?pc"
			},
			{
				id: 24,
				src: "https://source.unsplash.com/random/?office"
			}
		],
		modalIsOpen: false,
		currentImgIndex: 0
	};

	toggleModal = (index = 0) => {
		this.setState(state => ({
			modalIsOpen: !state.modalIsOpen,
			currentImgIndex: index - 1
		}));
	};

	render() {
		return (
			<div className="gallery">
				<ModalGallery
					currentImgIndex={this.state.currentImgIndex}
					modalIsOpen={this.state.modalIsOpen}
					toggleModal={this.toggleModal}
					images={this.state.images.map(img => {
						return { src: img.src };
					})}
				/>
				{this.state.images.map(img => (
					<div
						className="gallery__image-wrapper"
						onClick={() => this.toggleModal(img.id)}
						key={img.id}
					>
						<figure
							className="gallery__image"
							style={{ backgroundImage: `url(${img.src})` }}
							alt=""
						/>
						<span className="gallery__image__eye-icon lnr lnr-eye" />
					</div>
				))}
			</div>
		);
	}
}

export default Gallery;
