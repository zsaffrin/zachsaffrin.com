import React from 'react';
import { Link } from '@reach/router';
import './Header.css';

const Header = () => (
    <div className="Header">
        <Link to="/">ZS</Link>
        <Link to="/about">About</Link>
    </div>
);

export default Header;
