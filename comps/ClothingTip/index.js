import React from 'react';
import '../FoodTip/foodtip.css';

const pic2= require('../TipIcons/clothing.png');
// const pic2= require('./clothing.png');
// const pic3= require('./car.png');

const ClothingTip = ({text1, text2, text3, text4, text5, color}) =>
<div id="tipborder">
    <div id="tipimagearea" style={{backgroundColor:color}}>
        <img src={pic2}/>
        <span id="tiptitle">Buying sustainable clothing..</span>
    </div>
    <span id="clothingtiptext">
    {text1}<br></br>
    {text2}<br></br>
    {text3}<br></br>
    {text4}<br></br>
    {text5}<br></br></span>
    {/* <div class="tipsicons two"><img src={pic2}/>Clothing</div>
    <div class="tipsicons three"><img src={pic3}/>Transportation</div> */}
</div>;

ClothingTip.defaultProps = {
    color: "paleturquoise",
    text1: "💧Less dependence on imported raw materials",
    text2: "💧Helps promote jobs and industries that are ecofriendly",
    text3: "💧Quality of clothing is usually better",
    // text4: "Is good for the planet",
    // text5: "Improves your cooking"
}

export default ClothingTip;

