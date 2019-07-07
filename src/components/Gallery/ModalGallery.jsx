import React, { Component } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

class ModalGallery extends Component {
	render() {
		const { modalIsOpen, toggleModal, images, currentImgIndex } = this.props;

		return (
			<ModalGateway>
				{modalIsOpen ? (
					<Modal onClose={toggleModal}>
						<Carousel views={images} currentIndex={currentImgIndex} />
					</Modal>
				) : null}
			</ModalGateway>
		);
	}
}

export default ModalGallery;
