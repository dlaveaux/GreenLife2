import React from "react";
import "./style.css";
import Logo from "../../Images/LOGO.png";
import Happy from "../../Images/happy.png";
import Header from "../Header/index";
import Results from "../Results/index";
import Button from "../Button/index";

export default function Tips(props) {
    var text = props.text;
    var imageurl = props.imageurl;
  return (
    <div className = 'container'>
      <Header></Header>
      <Results text = {text} imageurl = {imageurl}></Results>
      <Button></Button>

     
    </div>
  );
}
