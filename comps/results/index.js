import React from "react";
import Happy from '../../Images/happy.png';

import "./style.css";
export default function Results() {
  return (
    <main className = "container">
      <h1>Based on your results...</h1>
      <img className ="happy" src = {Happy}></img>
      <p>
        There is still room for improvement - but don't worry you are now much
        more aware about sustainability than you were before and we have some
        tips to help you out
      </p>
    </main>
  );
}
