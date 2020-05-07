import React from 'react';
import Link from 'next/link';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import '../HomePage/page1.css';
import FoodTip from '../../comps/FoodTip';

const FoodtipPage1 = ({ }) =>
    <div id="tipapp">
        <Header />
        <FoodTip/>
        <Link href="/TipPage1">
        <div class="tipbutton">
            <Button
                width="220px"
                text="< Back" />
        </div>
        </Link>
    </div>
    
export default FoodtipPage1;