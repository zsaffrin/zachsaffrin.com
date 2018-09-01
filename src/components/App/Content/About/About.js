import React from 'react';
import './About.css';

const About = () => (
    <div className="About">
        <section>
            <h2>About</h2>
        </section>
        <section>
            <h3>Me</h3>
            <p>
                My name is Zach Saffrin and I simply enjoy working with web technology.
                I&apos;m an independent developer and designer and I mostly just do this
                because I enjoy it. I like exploring the balance of art and function
                in a meaningful user experience and I appreciate the challenge of
                learning new things. I build because I can.
            </p>
        </section>
        <section>
            <h3>This Site / Colophon</h3>
            <ul>
                <li>React / CRA</li>
                <li>ESLint / AirBNB</li>
                <li>Reach Router</li>
                <li>Raleway, Lato</li>
            </ul>
        </section>
    </div>
);

export default About;
