import React from 'react';
import './foodtip.css';

const pic1= require('../TipIcons/food.png');
// const pic2= require('./clothing.png');
// const pic3= require('./car.png');

const FoodTip = ({text1, text2, text3, text4, text5, color}) =>
<div id="tipborder">
    <div id="tipimagearea" style={{backgroundColor:color}}>
        <img src={pic1}/>
        <span id="tiptitle">Eating homecooked meals..</span>
    </div>
    <span id="tiptext">
    {text1}<br></br>
    {text2}<br></br>
    {text3}<br></br>
    {text4}<br></br>
    {text5}<br></br></span>
    {/* <div class="tipsicons two"><img src={pic2}/>Clothing</div>
    <div class="tipsicons three"><img src={pic3}/>Transportation</div> */}
</div>;

FoodTip.defaultProps = {
    color: "gold",
    text1: "Saves money",
    text2: "Is Healty",
    text3: "Is Sustainable",
    text4: "Is good for the planet",
    text5: "Improves your cooking"
}

export default FoodTip;

