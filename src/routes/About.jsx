import React from "react";
import { Link } from "react-router-dom";
import { Pets } from "../components";

const About = () => {
    return(
        <div>
            <header>These are my pets</header>
            <nav>
                <Link to="../../">App</Link>
                <Link to="../home">Home</Link>
            </nav>
            <Pets/>
        </div>
    )
}

export default About;