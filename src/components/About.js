import React from 'react';
import PropTypes from 'prop-types';

const CreditEntry = (props) => {
	const { children, title } = props;

	return (
		<div className="overflow-hidden m2">
			<div className="pr2 sm-col sm-col-4 strong red-darker">
				{title}
			</div>

			<div className="sm-col sm-col-8">
				{children}
			</div>
		</div>
	);
};
CreditEntry.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
};
CreditEntry.defaultProps = {
	title: '',
	children: null,
};

const CreditList = () => (
	<div className="my2">
		<CreditEntry title="Design and Development">
			<span className="bold pr1">Zach Saffrin</span>
			<span className="light gray-dark size-sm">(obviously)</span>
		</CreditEntry>

		<CreditEntry title="Architecture">
			This site is a React app with style written in SCSS running
			on an Express server. If you&apos;re interested, I invite
			you to explore the source code on&nbsp;
			<a
				href="https://github.com/zsaffrin/zachsaffrin.com"
				target="_blank"
				rel="noreferrer noopener"
				className="red"
			>
				GitHub
			</a>
		</CreditEntry>

		<CreditEntry title="Framework">
			<div>
				<span className="bold pr1">OverEasy</span>
				<span className="light gray-dark size-sm">
					A CSS framework of my own design
				</span>
			</div>
			<div>
				<a
					href="http://overeasycss.com"
					target="_blank"
					rel="noreferrer noopener"
					className="red size-sm"
				>
					overeasycss.com
				</a>
			</div>
		</CreditEntry>

		<CreditEntry title="Hosting">
			<div>
				Hosted on a&nbsp;
				<span className="bold">DigitalOcean</span>
				&nbsp;Ubuntu droplet running NodeJS
			</div>
			<div>
				<a
					href="https://m.do.co/c/7d1bf52d239c"
					target="_blank"
					rel="noreferrer noopener"
					className="red size-sm"
				>
					digitalocean.com
				</a>
			</div>
			<div className="light size-xs gray">
				^That&apos;s my referral link. Here is a&nbsp;
				<a
					href="http://digitalocean.com"
					target="_blank"
					rel="noreferrer noopener"
					className="color-inherit underline hover-red"
				>
					direct link
				</a>
				&nbsp;if you prefer
			</div>
		</CreditEntry>

		<CreditEntry title="Fonts">
			<div className="flex flex-baseline flex-wrap">
				<div className="font-head bold pr1">Raleway</div>

				<div className="flex-auto">
					<a
						href="https://www.theleagueofmoveabletype.com/raleway"
						target="_blank"
						rel="noreferrer noopener"
						className="red size-sm"
					>
						theleagueofmoveabletype.com/raleway
					</a>
				</div>
			</div>

			<div className="flex flex-baseline">
				<div className="font-body pr1">Lato</div>

				<div className="flex-auto">
					<a
						href="http://www.latofonts.com"
						target="_blank"
						rel="noreferrer noopener"
						className="red size-sm"
					>
						latofonts.com
					</a>
				</div>
			</div>
		</CreditEntry>
	</div>
);

const About = () => {
	const targetEmail = {
		address: 'zach',
		domain: 'zachsaffrin.com',
	};

	return (
		<div className="my2">
			<div className="container p2">
				<h2 className="h1 caps">About</h2>

				<div className="my4">
					<h3 className="caps">Me</h3>

					<p>
						My name is&nbsp;
						<span className="strong red-darker">Zach Saffrin</span>
						&nbsp;and I simply enjoy working with web technology.
						I&apos;m an independent developer and designer and I
						mostly just do this because I enjoy it. I like
						exploring the balance of art and function in a
						meaningful user experience and I appreciate the
						challenge of learning new things. I build because
						I can.
					</p>

					<div className="my2 flex flex-wrap">
						<a
							href={`mailto:${targetEmail.address}@${targetEmail.domain}`}
							className="m1 px2 py1 rounded bg-red-dark hover-bg-red white size-sm"
						>
							<div className="fa fw fa-envelope-o mr1" />
							zach
							<span style={{ display: 'none' }}>NoBots</span>
							@zachsaffrin.com
						</a>
						<a
							href="https://twitter.com/ZachSaffrin"
							target="_blank"
							rel="noreferrer noopener"
							className="m1 px2 py1 rounded bg-blue hover-bg-blue-light white
								size-sm"
						>
							<div className="fa fw fa-twitter mr1" />
							@Zach
							<span style={{ display: 'none' }}>NoBots</span>
							Saffrin
						</a>
						<a
							href="https://github.com/zsaffrin"
							target="_blank"
							rel="noreferrer noopener"
							className="m1 px2 py1 rounded bg-gray-darker hover-bg-gray-dark white
								size-sm"
						>
							<div className="fa fw fa-github mr1" />
							zsaffrin
						</a>
					</div>
				</div>

				<div className="my4">
					<h3 className="caps">This site / Colophon</h3>

					<CreditList />
				</div>
			</div>
		</div>
	);
};

export default About;
