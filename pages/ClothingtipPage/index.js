import React from 'react';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import '../HomePage/page1.css';
import ClothingTip from '../../comps/ClothingTip';

const ClothingtipPage = ({ }) =>
    <div id="tipapp">
        <Header />
        <ClothingTip/>
        <div class="tipbutton">
            <Button
                width="220px"
                text="< Back" />
        </div>
    </div>
    
export default ClothingtipPage;
