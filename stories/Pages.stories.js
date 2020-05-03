import React from 'react';
import HomeLogo from '../comps/HomeLogo';
import HomeText from '../comps/HomeText';
import Question1 from '../comps/Question1';
import Question2 from '../comps/Question2';
import Question3 from '../comps/Question3';
import Header from '../comps/Header';
import Button from '../comps/Button';
import ResultTitle from '../comps/ResultTitle';
import ResultImage from '../comps/ResultImage';
import './qpages.css';


export default {
    title: 'Pages',
    component: HomeLogo,
}

export const HomePage = () =>
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

export const QuestionPages1st = () =>
    <div id="app">
        <Header />
        <Question1
            question="Q1. What are you wearing today?"
            text1="1. Recycled"
            text2="2. Cotton"
            text3="3. Polyester" />
        <div class="questionbutton">
            <Button />
        </div>
    </div>

export const QuestionPages2nd = () =>
    <div id="app">
        <Header />
        <Question2
            question="Q2. What did you eat today?"
            text1="1. Homemade"
            text2="2. Restaurant"
            text3="3. Fastfood" />
        <div class="questionbutton">
            <Button />
        </div>
    </div>

export const QuestionPages3rd = () =>
    <div id="app">
        <Header />
        <Question3/>
        <div class="questionbutton">
            <Button
                width="200px"
                text="View Result" />
        </div>
        </div>

export const ResultPage = () =>
    <div id="app">
        <Header />
        <ResultTitle/>
        <ResultImage/>
        <div class="resultbutton">
            <Button
                width="190px"
                text="Check Tips" />
        </div>
   </div>
