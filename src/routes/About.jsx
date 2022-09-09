import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return(
        <div>
            <header>This is an Aboutpage</header>
            <nav>
                <Link to="../../">App</Link>
                <Link to="../home">Home</Link>
            </nav>
        </div>
    )
}

export default About;