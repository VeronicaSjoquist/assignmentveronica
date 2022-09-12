import React from "react";
import { Link } from "react-router-dom";
import { Pets } from "../components";

const About = () => {
    return(
        <div>
            <header>These are my pets</header>
            <nav>
                <Link to="../../">Home</Link>
                <Link to="../quiz">Quiz</Link>
            </nav>
            <Pets/>
        </div>
    )
}

export default About;