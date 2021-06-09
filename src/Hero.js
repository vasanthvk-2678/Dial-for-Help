import React from 'react';
import Herocontent from './Herocontent';

const Hero = ({handleLogout})=> {
    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>

            <section className="whu">
                <Herocontent />
            </section>

        </section>
    );

};

export default Hero;