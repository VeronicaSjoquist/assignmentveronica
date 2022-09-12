import React from "react";
import { Link } from "react-router-dom";
import { PetQuiz } from "../components";

const Quiz = () => {
    return(
        <div>
            <header>This is a Quizpage</header>
            <nav>
                <Link to="../../">Home</Link>
                <Link to="../about">About</Link>
            </nav>
            <PetQuiz/>
        </div>
    )
}

export default Quiz;