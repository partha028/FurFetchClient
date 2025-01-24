import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <section className="hero">
                <h1>Adopt Pets from the<br />comfort of your home</h1>
                <p>Meet and communicate with the best people to run<br />
                   projects, events or other activities in a more effective and<br />
                   fun way 
                </p>
                <div className="hero-buttons">
                    <Link to={`/search`}>
                        <button className="get-started-btn">Get Started</button>
                    </Link>
                    <a href="/search" className="learn-more-link">Learn More</a>
                </div>
            </section>
        </div>
    );
}

export default Home;
