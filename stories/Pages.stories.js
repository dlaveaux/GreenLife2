import React from 'react';
import Home from '../comps/Home';
import HomeText from '../comps/HomeText';
import Question1 from '../comps/Question1';
import Question2 from '../comps/Question2';
import Question3 from '../comps/Question3';
import Header from '../comps/Header';
import Button from '../comps/Button';
import './qpages.css';


export default {
    title: 'Pages',
    component: Home,
}

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
            question="Q1. What are you wearing today?"
            text1="1. Recycled"
            text2="2. Cotton"
            text3="3. Polyester" />
        <Button />
    </div>

export const QuestionPages2nd = () =>
    <div id="app">
        <Header />
        <Question2
            question="Q2. What did you eat today?"
            text1="1. Homemade"
            text2="2. Restaurant"
            text3="3. Fastfood" />
        <Button />
    </div>

export const QuestionPages3rd = () =>
    <div id="app">
        <Header />
        <Question3
            question="Q3. What did you eat today?"
            text1="1. Bicycle"
            text2="2. Bus"
            text3="3. Car" />
        <Button 
            width="200px"
            text="View Result"/>
    </div>

