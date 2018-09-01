import React from 'react';
import './Home.css';
import ItemList from './ItemList/ItemList';

const Home = () => {
    const projectItems = [
        {
            title: 'OverEasy',
            subtitle: 'A deliciously flexible OOCSS framework',
            link: 'http://overeasycss.com',
        },
    ];

    return (
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
        </div>
    );
};

export default Home;
