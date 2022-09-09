import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <header>This is a Homepage</header>
            <nav>
                <Link to="../../">App</Link>
                <Link to="../about">About</Link>
            </nav>
        </div>
    )
}

export default Home;