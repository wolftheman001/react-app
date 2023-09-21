import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
// import AppProps from "./AppProps";
import AppJokes from "./AppJokes";
import "./index.css";

const num = [1,2,3,4,5]
const squared = num.map(x => x*x)
console.log(squared)

const names = ["alice", "bob", "charlie", "danielle"]
const capital = names.map((cap) => 
    cap[0].toUpperCase() + cap.substring(1)
)
console.log(capital)

const pokemons = ["Bulbasaur", "Charmander", "Squirtle"]
const ptags = pokemons.map((pt) =>
    `<p>${pt}</p>`
)
console.log(ptags)

ReactDOM.render(<AppJokes />, document.getElementById("root"))
// ReactDOM.render(<AppProps />, document.getElementById("root"))
// ReactDOM.render(<AppJokes />, document.getElementById("root"))