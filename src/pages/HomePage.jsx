import React from "react";
import { Link } from "react-router-dom";
import AnimatedBackground from "../components/AnimatedBackground";

const HomePage = () => {
    return (
        <div className="homepage">
            <h1>
                <span className="letter01">F</span>
                <span className="letter02">L</span>
                <span className="letter03">O</span>
                <span className="letter04">R</span>
                <span className="letter05">I</span>
                <span className="letter06">A</span>
                <span className="letter07">N</span>
                <span className="letter08"> </span>
                <span className="letter09">I</span>
                <span className="letter10">M</span>
                <span className="letter11">B</span>
                <span className="letter12">E</span>
                <span className="letter13">R</span>
                <span className="letter14">T</span>
            </h1>
            <Link to="/menu" className="homepage-link">
                <p className="homepage-btn">Bienvenue</p>
            </Link>
            <AnimatedBackground />
        </div>
    );
};

export default HomePage;
