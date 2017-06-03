import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home';
import About from './About';

require('overeasy/dist/overeasy.min.css');
require('font-awesome/css/font-awesome.min.css');
require('../styles/App.scss');

const App = () => (
	<Router>
		<div id="app">
			<div className="flex flex-just-between">
				<Link to="/" className="p1 red-darker hover-red-light">
					<svg width="72" height="62" viewBox="0 0 72 62" fill="currentcolor">
						<path d="M51.27 25.655c-4.03-.07-7.27-2.43-7.27-5.33
							0-2.94 3.34-5.33 7.47-5.33 2.63 0 4.95.97 6.272
							2.44l10.17-4.68c-3.15-5.01-9.33-8.42-16.438-8.42H4v10.66h26.67L4
							46.995v10.67h46.67c9.57 0 17.33-7.16 17.33-16
							0-8.65-7.44-15.71-16.73-16.01zm-.6 21.34H17.34l16.97-20.37c2.78
							5.55 9.12 9.49 16.56 9.69 3.59.09 6.47 2.45 6.47 5.34-.01
							2.95-2.99 5.34-6.67 5.34z"
						/>
					</svg>
				</Link>
				<Link
					to="/about"
					className="p2 flex flex-center caps border-heavy-bottom
					border-transparent hover-border-green no-hover-decoration"
				>
					About
				</Link>
			</div>

			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
		</div>
	</Router>
);

export default App;
