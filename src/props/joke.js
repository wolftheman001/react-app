import React from "react";

export default function Joke(props) {
    const [isShown, setShown] = React.useState(false)
    function toggle() {
        setShown(prevShown => !prevShown)
        console.log(isShown)
    }
    return(
        <div>
            <h3>{props.setup}</h3>
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggle}>{isShown ? "Hide" : "Show"} punchline</button>
            <hr></hr>
        </div>
    )
}