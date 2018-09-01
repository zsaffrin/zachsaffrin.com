import React from 'react';
import './Home.css';
import ItemList from './ItemList/ItemList';
import projectItems from '../../../../data/projectItems.json';
import clientItems from '../../../../data/clientItems.json';

const Home = () => (
    <div className="Home">
        <section className="hero">
            <div className="subtitle top">
                <div className="content">Hi, I&apos;m</div>
            </div>
            <div className="title">
                Zach
            </div>
            <div className="subtitle">
                I like building stuff with code
            </div>
        </section>

        <section>
            <h2>Projects</h2>
            <ItemList items={projectItems} />
        </section>

        <section>
            <h2>Client Work</h2>
            <ItemList items={clientItems} />
        </section>
    </div>
);

export default Home;
