import React, {useState} from "react";

const PetQuiz = () => {

    const [smiley, setSmiley] = useState(true);

    return(
        <div className="quizDiv">
            <h1>Du you have any pets?</h1>
            <div className="smiley">{smiley ? ":)" : ":("}</div>
            <br/>
            <br/>
            <div className="quizBtns">
                <button onClick={() => setSmiley(true)}>Yes</button>
                <button onClick={() => setSmiley(false)}>No</button>
            </div>
        </div>
    )
}

export default PetQuiz;