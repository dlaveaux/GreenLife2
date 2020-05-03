import React from 'react';
// import './tipicons.css';

const pic1= require('./food.png');
const pic2= require('./clothing.png');
const pic3= require('./car.png');

const TipsIcons = ({}) =>
<div>
    <div id="tipsicons"><img src={pic1} /></div>
    <div id="tipsicons"><img src={pic2} /></div>
    <div id="tipsicons"><img src={pic3} /></div>
</div>;

// TipsIcons.defaultProps = {
//     profpic:defaultProfPic,
// }

export default TipsIcons;

