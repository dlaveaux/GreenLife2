import React from 'react';
import Link from 'next/link';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import '../HomePage/page1.css';
import TransportationTip from '../../comps/TransportationTip';

const TransportationtipPage = ({ }) =>
    <div id="tipapp">
        <Header />
        <TransportationTip/>
        <Link href="/TipPage1">
        <div class="tipbutton">
            <Button
                width="220px"
                text="< Back" />
        </div>
        </Link>
    </div>
    
export default TransportationtipPage;

