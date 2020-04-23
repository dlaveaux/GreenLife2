import React from "react";
import "./style.css";
import Header from "../Header/index";
import Results from "../Results/index";

export default function Advice(props) {
  var text = props.text;
  var imageurl = props.imageurl;
  var advicearray = props.advicearray;
  //How one object looks {title:}
  return (
    <div className="container">
      <Header></Header>
      <Results text={text} imageurl={imageurl}></Results>
      <div id="AdviceTable">
        <div className="col">
          <h1 className="Title">Food</h1>
          <div className="TableData">
            <h6>eating homecooked meals...</h6>
            <p>Saves Money</p>
            <p>Is healthy</p>
            <p>Is sustainable</p>
            <p>Is good for the planet</p>
            <p>Improves your cooking</p>
          </div>
        </div>
        <div className="col">
          <h1 className="Title">Clothing</h1>
          <div className="TableData">
            <h6>buying sustainable clothing...</h6>
            <p>Less dependance on imported raw materials</p>
            <p>Helps promote jobs and industries that are eco-friendly</p>
            <p>Quality of clothing is usually better</p>
          </div>
        </div>
        <div className="col">
          <h1 className="Title">Transportation</h1>
          <div className="TableData">
          <h6>walking/biking to work</h6>
            <p>Saves Gas Money</p>
            <p>Is healthy</p>
            <p>Less pollution</p>
            <p>Decreases stress</p>
          </div>
        </div>
      </div>
    </div>
  );
}
