import React from 'react';
import PropTypes from 'prop-types';

import projects from '../data/projects.json';

const ProjectListItem = (props) => {
	const { title, desc, url } = props;

	return (
		<a
			href={url}
			target="_blank"
			rel="noreferrer noopener"
			className="project-list-item block m1 border rounded
			border-gray-light hover-border-gray-dark p2 no-hover-decoration"
		>
			<h3 className="m0 red-dark">{title}</h3>
			<p className="size-sm">{desc}</p>
		</a>
	);
};
ProjectListItem.propTypes = {
	title: PropTypes.string,
	desc: PropTypes.string,
	url: PropTypes.string,
};
ProjectListItem.defaultProps = {
	title: '',
	desc: '',
	url: '',
};

const ProjectList = () => (
	<div className="my2">
		{projects.map((project) => {
			const { key, title, desc, url } = project;

			return (
				<ProjectListItem
					title={title}
					desc={desc}
					url={url}
					key={key}
				/>
			);
		})}
	</div>
);

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
				<ProjectList />
			</div>
		</div>
	</div>
);

export default Home;
