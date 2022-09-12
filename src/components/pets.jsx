import React, {useState} from "react";

const Pets = () => {
    return (
        <div >
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", flexFlow: "wrap"}}>
                <Samson Color={"green"}/>
                <Alfred Color={"blue"}/>
                <Sonic Color={"purple"}/>
                <Harry Color={"red"}/>
            </div>
        </div>
        
    )
}

const Samson = ({Color}) => {
    const [showAnimal, setShowAnimal] = useState(true);

    return (
        <div>
            <h3>Samson: </h3>
            <img src="./Pics/Samson09-22.jpg" style={{width: "200px"}}></img>
            {showAnimal ? <Dog dogColor={Color}/> : <div/>}
            <button onClick={() => setShowAnimal(!showAnimal)}>Toggle animal</button>
        </div>
    )
}

const Alfred = ({Color}) => {
    const [showAnimal, setShowAnimal] = useState(true);

    return (
        <div>
            <h3>Alfred: </h3>
            <img src="./Pics/Affe.jpg" style={{width: "200px"}}></img>
            {showAnimal ? <Cat catColor={Color}/> : <div/>}
            <button onClick={() => setShowAnimal(!showAnimal)}>Toggle animal</button>
        </div>
    )
}

const Sonic = ({Color}) => {
    const [showAnimal, setShowAnimal] = useState(true);

    return (
        <div>
            <h3>Sonic: </h3>
            <img src="./Pics/Sonic.jpg" style={{width: "200px"}}></img>
            {showAnimal ? <Cat catColor={Color}/> : <div/>}
            <button onClick={() => setShowAnimal(!showAnimal)}>Toggle animal</button>
        </div>
    )
}

const Harry = ({Color}) => {
    const [showAnimal, setShowAnimal] = useState(true);

    return (
        <div>
            <h3>Harry: </h3>
            <img src="./Pics/Harry.jpg" style={{width: "200px"}}></img>
            {showAnimal ? <Cat catColor={Color}/> : <div/>}
            <button onClick={() => setShowAnimal(!showAnimal)}>Toggle animal</button>
        </div>
    )
}

const Dog = ({dogColor}) => {
    return (
        <div style={{color: dogColor}}>Is dog</div>
    )
}

const Cat = ({catColor}) => {
    return (
        <div style={{color: catColor}}>Is cat</div>
    )
}

export default Pets;