import React, { Component } from "react";

class Gallery extends Component {
	state = {
		images: [
			{
				id: 1,
				url:
					"https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
			},
			{
				id: 2,
				url:
					"https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
			},
			{
				id: 3,
				url:
					"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
			},
			{
				id: 4,
				url:
					"https://images.unsplash.com/photo-1506377711776-dbdc2f3c20d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
			},
			{
				id: 5,
				url:
					"https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
			},
			{
				id: 6,
				url:
					"https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
			},
			{
				id: 7,
				url:
					"https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
			},
			{
				id: 8,
				url:
					"https://images.unsplash.com/photo-1519408469771-2586093c3f14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=647&q=80"
			},
			{
				id: 9,
				url:
					"https://images.unsplash.com/photo-1459550428001-4ed6ca421293?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1546&q=80"
			},
			{
				id: 10,
				url:
					"https://images.unsplash.com/photo-1484662020986-75935d2ebc66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
			},
			{
				id: 11,
				url:
					"https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
			},
			{
				id: 12,
				url:
					"https://images.unsplash.com/photo-1476988941939-9b114fb1ba94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
			}
		]
	};
	render() {
		return (
			<div>
				{this.state.images.map(img => (
					<img src={img.url} alt="" key={img.id} />
				))}
			</div>
		);
	}
}

export default Gallery;
