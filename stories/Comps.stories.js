import React from 'react';
import Header from '../comps/Header';
import Home from '../comps/Home';
import HomeText from '../comps/HomeText';
import Question1 from '../comps/Question1';
import Question2 from '../comps/Question2';
import Question3 from '../comps/Question3';
import './qpages.css';


export default {
    title: 'Comps',
    component: Home,
}

export const Headerr = () =>
    <div>
        <Header />
    </div>

export const Homelogo = () =>
    <div>
        <Home />
    </div>

export const HomeTextt = () =>
<div>
    <HomeText />
</div>

export const QuestionComp1 = () =>
    <div>
        <Question1 />
    </div>

export const QuestionComp2 = () =>
    <div>
        <Question2
            question="What did you eat today?"
            text1="Homemade"
            text2="Restaurant"
            text3="Fastfood" />
    </div>

export const QuestionComp3 = () =>
    <div>
        <Question3
            question="What did you transport today?"
            text1="Bicycle"
            text2="Bus"
            text3="Car" />
    </div>

