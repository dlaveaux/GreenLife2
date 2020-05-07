import React from 'react';
import Link from 'next/link';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import '../HomePage/page1.css';
import ClothingTip from '../../comps/ClothingTip';

const ClothingtipPage1 = ({ }) =>
    <div id="tipapp">
        <Header />
        <ClothingTip/>
        <Link href="/TipPage1">
        <div class="tipbutton">
            <Button
                width="220px"
                text="< Back" />
        </div>
        </Link>
    </div>
    
export default ClothingtipPage1;
