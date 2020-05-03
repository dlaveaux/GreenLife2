import React from 'react';
// import HomeLogo from '../../comps/HomeLogo';
// import HomeText from '../../comps/HomeText';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import ResultTitle from '../../comps/ResultTitle';
import TipsIcons from '../../comps/TipIcons';
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
