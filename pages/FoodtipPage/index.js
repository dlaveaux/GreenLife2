import React from 'react';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import '../HomePage/page1.css';
import FoodTip from '../../comps/FoodTip';

const TipPage1 = ({ }) =>
    <div id="tipapp">
        <Header />
        <FoodTip/>
        <div class="tipbutton">
            <Button
                width="220px"
                text="< Back" />
        </div>
    </div>
    
export default TipPage1;
