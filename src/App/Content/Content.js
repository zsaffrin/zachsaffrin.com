import React from 'react';
import { Router, Redirect } from '@reach/router';
import './Content.css';
import Home from './Home/Home';
import About from './About/About';

const Content = () => (
    <Router className="Content">
        <Home path="/" />
        <About path="about" />
        <Redirect default noThrow from="*" to="/" />
    </Router>
);

export default Content;
