import React from 'react';
import '../FoodTip/foodtip.css';

const pic3= require('../TipIcons/car.png');

const TransportationTip = ({text1, text2, text3, text4, text5, color}) =>
<div id="tipborder">
    <div id="tipimagearea" style={{backgroundColor:color}}>
        <img src={pic3}/>
        <span id="tiptitle">Walking/Biking to work..</span>
    </div>
    <span id="transportationtiptext">
    {text1}<br></br>
    {text2}<br></br>
    {text3}<br></br>
    {text4}<br></br>
    {text5}<br></br></span>
    {/* <div class="tipsicons two"><img src={pic2}/>Clothing</div>
    <div class="tipsicons three"><img src={pic3}/>Transportation</div> */}
</div>;

TransportationTip.defaultProps = {
    color: "#rgb(129, 248, 198)",
    text1: "☀️Saves gas money",
    text2: "☀️Less pollution is healthy",
    text3: "☀️Decreases stress",
    // text4: "Is good for the planet",
    // text5: "Improves your cooking"
}

export default TransportationTip;
