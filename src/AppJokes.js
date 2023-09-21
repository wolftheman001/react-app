import React from "react";
import jokeData from "./data/jokeData";
import Joke from "./props/joke";

export default function AppJokes() {
    //console.log(jokeData)
    const jokeElements = jokeData.map(joke => {
        return ( 
            <Joke 
                setup={joke.setup}
                punchline={joke.punchline}
            />
        )
    })
    return(
        <div>
            <h3>{jokeElements}</h3>
            {/* <Joke 
                setup="I got my daughter a fridge for birthday"
                punchline="I can't wait to see her face light up when she opens it"
            />
            <Joke 
                setup="How did the hacker escaped the police?"
                punchline="He just ransomware!"
            />
            <Joke 
                setup="Why don't pirates travel on mountain roads?"
                punchline="Scurvy"
            />
            <Joke 
                setup="Why do the bees stay in their hive for the winter?"
                punchline="Swarm"
            /> */}
        </div>
    )
}