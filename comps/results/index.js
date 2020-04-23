import React from "react";
import Happy from '../../Images/happy.png';

import "./style.css";
export default function Results(props) {
  var imageurl = props.imageurl
  var text = props.text
  
  return (
    <main className = "container">
      <h1>Based on your results...</h1>
      <img className ="happy" src = {imageurl}></img>
      <p>
       {text}
      </p>
    </main>
  );
}
