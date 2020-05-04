import React from 'react';
import './tipicons.css';

const pic1= require('./food.png');
const pic2= require('./clothing.png');
const pic3= require('./car.png');

const TipsIcons = ({}) =>
<div id="tipborder">
    <div class="tipsicons"><img src={pic1}/>Food</div>
    <div class="tipsicons"><img src={pic2}/>Clothing</div>
    <div class="tipsicons"><img src={pic3}/>Transportation</div>
</div>;

// TipsIcons.defaultProps = {
//     profpic:defaultProfPic,
// }

export default TipsIcons;

