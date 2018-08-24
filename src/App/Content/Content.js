import React from 'react';
import { Router, Redirect } from '@reach/router';
import './Content.css';
import Home from './Home/Home';

const Content = () => (
    <Router className="Content">
        <Home path="/" />
        <Redirect default noThrow from="*" to="/" />
    </Router>
);

export default Content;
