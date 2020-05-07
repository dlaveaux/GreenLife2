import React from 'react';
import Link from 'next/link';
import './tipicons.css';

const pic1= require('./food.png');
const pic2= require('./clothing.png');
const pic3= require('./car.png');

const TipsIcons = ({}) =>
<div id="tipbordereee">
    <Link href="/FoodtipPage1">
    <div class="tipsicons"><img src={pic1}/>Food</div>
    </Link>
    <Link href="/ClothingtipPage1">
    <div class="tipsicons"><img src={pic2}/>Clothing</div>
    </Link>
    <Link href="/TransportationtipPage1">
    <div class="tipsicons"><img src={pic3}/>Transportation</div>
    </Link>
</div>;

// TipsIcons.defaultProps = {
//     profpic:defaultProfPic,
// }

export default TipsIcons;

