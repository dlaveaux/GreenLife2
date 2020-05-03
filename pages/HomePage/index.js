import React from 'react';
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
        
        <div class="homebutton">
            <Button 
            width="220px"
            text="Let's start" />
        </div>
    </div>
export default HomePage;
