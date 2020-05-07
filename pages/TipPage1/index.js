import React from 'react';
import Link from 'next/link';
// import HomeLogo from '../../comps/HomeLogo';
// import HomeText from '../../comps/HomeText';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import ResultTitle from '../../comps/ResultTitle';
import TipsIcons1 from '../../comps/TipIcons1';
import '../HomePage/page1.css';

const TipPage1 = ({ }) =>
    <div id="tipapp">
        <Header />
        <div id="tiptitle">
        <ResultTitle
          text="Choose Tips!"/>
          </div>
        <TipsIcons1/>
        <Link href="/ResultPage">
        <div class="tipbutton">
            <Button
                width="220px"
                text="< Back" />
        </div>
        </Link>
    </div>
    
export default TipPage1;
