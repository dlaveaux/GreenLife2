import React from 'react';
import Home from '../comps/Home';
import HomeText from '../comps/HomeText';
import Question1 from '../comps/Question1';
import Question2 from '../comps/Question2';
import Question3 from '../comps/Question3';
import Header from '../comps/header';
import Button from '../comps/button';
import './qpages.css';


export default {
    title: 'Rina Comp',
    component: Question1,
}


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






export const HomePage = () =>
    <div id="homeapp">
        <Header/>
        <Home />
        <HomeText/>
        <Button />
    </div>

export const QuestionPages1st = () =>
    <div id="app">
        <Header />
        <Question1
            question="What are you wearing today?"
            text1="Recycled"
            text2="Wool/Cotton"
            text3="Polyester/Plastic" />
        <Button />
    </div>

export const QuestionPages2nd = () =>
    <div id="app">
        <Header />
        <Question2
            question="What did you eat today?"
            text1="Homemade"
            text2="Restaurant"
            text3="Fastfood" />
        <Button />
    </div>

export const QuestionPages3rd = () =>
    <div id="app">
        <Header />
        <Question3
            question="What did you eat today?"
            text1="Homemade"
            text2="Restaurant"
            text3="Fastfood" />
        <Button />
    </div>

