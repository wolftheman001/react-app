import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Card from "./components/Card"
import appData from "./data/appData";

export default function App() {
  // const date = new Date()
  // const hours = date.getHours()
  // let time
  // if(hours < 12) {
  //   time = "morning"
  // } else if (hours >=12 && hours <= 17) {
  //   time = "afternoon"
  // } else {
  //   time = "night"
  // }
  const appContents = appData.map(data => {
    return (
      <Card 
        key={data.id}
        // data={data}
        {...data}
      />
    )
  })
  return (
    // <h1>Good {time}</h1>
    <div>
      <Navbar />
      <Main />
      <div class="container p-0 d-flex overflow">
        {appContents}
      </div>
      {/* <Card 
        img="images/Hina.jpg"
        rating="5.0"
        reviewCount="6"
        country="USA"
        title="Life lessons with Katie Zaferes"
        price="136"
      /> */}
    </div>
  )
}