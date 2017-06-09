import React from 'react';
import PropTypes from 'prop-types';

import projects from '../data/projects.json';
import clientWork from '../data/clientWork.json';

const pathToImages = require.context('../images/', true);

const ItemListItem = (props) => {
	const { title, desc, url, imagePath } = props;

	let creditListItemImage;
	if (imagePath.length > 0) {
		creditListItemImage = (
			<div className="flex-none" style={{ width: '5em' }}>
				<img
					src={pathToImages(imagePath, true)}
					alt={title}
					className="full-width"
				/>
			</div>
		);
	}

	return (
		<a
			href={url}
			target="_blank"
			rel="noreferrer noopener"
			className="project-list-item block m1 border rounded
			border-gray-light hover-border-gray-dark p1 no-hover-decoration"
		>
			<div className="flex">
				{creditListItemImage}
				<div className="flex-auto pl2 pr1 pb1">
					<h3 className="m0 red-dark">{title}</h3>
					<p className="size-sm">{desc}</p>
				</div>
			</div>

		</a>
	);
};
ItemListItem.propTypes = {
	title: PropTypes.string,
	desc: PropTypes.string,
	url: PropTypes.string,
	imagePath: PropTypes.string,
};
ItemListItem.defaultProps = {
	title: '',
	desc: '',
	url: '',
	imagePath: '',
};

const ItemList = (props) => {
	const { items } = props;

	return (
		<div className="my2">
			{items.map((item) => {
				const { key, title, desc, url, imagePath } = item;

				return (
					<ItemListItem
						title={title}
						desc={desc}
						url={url}
						key={key}
						imagePath={imagePath}
					/>
				);
			})}
		</div>
	);
};
ItemList.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			key: PropTypes.number,
			title: PropTypes.string,
			desc: PropTypes.string,
			url: PropTypes.string,
			imagePath: PropTypes.string,
		}),
	),
};
ItemList.defaultProps = {
	items: [],
};

const Home = () => (
	<div id="home" className="my2">
		<div className="container p2">
			<div className="p2">
				<div className="bold">Hi, I&apos;m</div>
				<div className="h1 caps size-huge">Zach</div>
				<div className="mb2">
					I like building stuff with code
				</div>
			</div>
			<div className="p2">
				<h2 className="caps">Projects</h2>
				<ItemList items={projects} />
				<div className="">
					<a
						href="https://github.com/zsaffrin"
						target="_blank"
						rel="noreferrer noopener"
						className="m1 px2 py1 rounded bg-gray-dark hover-bg-blue white
							size-sm"
					>
						<div className="fa fw fa-github mr1" />
						More on GitHub
					</a>
					<a
						href="https://codepen.io/zachsaffrin/"
						target="_blank"
						rel="noreferrer noopener"
						className="m1 px2 py1 rounded bg-gray-dark hover-bg-blue white
							size-sm"
					>
						<div className="fa fw fa-codepen mr1" />
						More on CodePen
					</a>
				</div>
			</div>
			<div className="p2">
				<h2 className="caps">Client Work</h2>
				<ItemList items={clientWork} />
			</div>
		</div>
	</div>
);

export default Home;
