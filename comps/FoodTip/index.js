import React from 'react';
// import './tipicons.css';

const pic1= require('../TipIcons/food.png');
// const pic2= require('./clothing.png');
// const pic3= require('./car.png');

const FoodTip = ({}) =>
<div id="tipborder">
    <div class="tipsicons one"><img src={pic1}/>Food</div>
    {/* <div class="tipsicons two"><img src={pic2}/>Clothing</div>
    <div class="tipsicons three"><img src={pic3}/>Transportation</div> */}
</div>;

// TipsIcons.defaultProps = {
//     profpic:defaultProfPic,
// }

export default FoodTip;

