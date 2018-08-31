import React from 'react';
import { string } from 'prop-types';
import './ItemListLink.css';

const ItemListLink = ({ link, title, subtitle }) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="ItemListLink"
    >
        <div className="title">
            {title}
        </div>
        <div className="subtitle">
            {subtitle}
        </div>
    </a>
);
ItemListLink.propTypes = {
    link: string,
    subtitle: string,
    title: string,
};
ItemListLink.defaultProps = {
    title: '',
    subtitle: '',
    link: '',
};

export default ItemListLink;
