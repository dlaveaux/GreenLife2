import React from 'react';
import Link from 'next/link';
import HomeLogo from '../../comps/HomeLogo';
import HomeText from '../../comps/HomeText';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import './page1.css';

const HomePage = ({}) =>
<div id="homeapp">
        <Header />
        <HomeLogo/>
        <HomeText />
        
        <Link href="/QuestionPage1">
        <div class="homebutton">
            <Button 
            width="220px"
            text="Let's start" />
        </div>
        </Link>
    </div>
export default HomePage;
