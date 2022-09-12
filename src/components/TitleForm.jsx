import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const TitleForm = () => {
    const orgHeader = "to my page"
    const [name, setName] = useState("")
    const [headerTitle, setHeaderTitle] = useState(`Welcome ${orgHeader}`)
    const [docTitle, setDocTitle] = useState(`Hi ${name}`)

    useEffect(() => {
        document.title = docTitle
    }, [docTitle])

    return (
        <div>
            <div className="FpHeader">
                <div>{headerTitle}</div>
                <br/>
                <br/>
                <div style={{fontSize: "20px"}}>What's your name?</div>
                <input
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <button onClick={() => {setHeaderTitle(`Welcome ${name}`); setDocTitle(`Hi ${name}`)}}>Enter</button>
            </div>
        </div>
    )
}

export default TitleForm;