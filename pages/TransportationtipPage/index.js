import React from 'react';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import '../HomePage/page1.css';
import TransportationTip from '../../comps/TransportationTip';

const TransportationtipPage = ({ }) =>
    <div id="tipapp">
        <Header />
        <TransportationTip/>
        <div class="tipbutton">
            <Button
                width="220px"
                text="< Back" />
        </div>
    </div>
    
export default TransportationtipPage;
