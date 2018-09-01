import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import './ItemList.css';
import ItemListLink from './ItemListLink/ItemListLink';

const ItemList = ({ items }) => {
    const links = items.map(({
        link,
        title,
        subtitle,
    }) => (
        <li key={title}>
            <ItemListLink
                link={link}
                title={title}
                subtitle={subtitle}
            />
        </li>
    ));

    return (
        <ul className="ItemList">
            {links}
        </ul>
    );
};
ItemList.propTypes = {
    items: arrayOf(
        shape({
            title: string,
            subtitle: string,
            link: string,
        }),
    ),
};
ItemList.defaultProps = {
    items: arrayOf(
        shape({
            title: '',
            subtitle: '',
            link: '',
        }),
    ),
};

export default ItemList;
