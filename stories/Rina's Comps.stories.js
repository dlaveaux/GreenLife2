import React from 'react';
import Question1 from '../comps/Question1';
// import Question2 from '../comps/Question2';
import Header from '../comps/header';
import Button from '../comps/button';
import './qpages.css';


export default {
    title: 'Rina Comp',
    component:Question1,
}

export const QuestionCompFirst = () =>
<div>
    <Question1/>
</div>
// export const QuestionCompSecond = () =>
// <div>
//     <Question2/>
// </div>

export const QuestionPages1 = () =>
<div id="app">
    <Header/>
    <Question1
    question= "What are you wearing today?"
    text1= "Recycled"
    text2= "Wool/Cotton"
    text3= "Polyester/Plastic"/>
    <Button/>
</div>

export const QuestionPages2 = () =>
<div id="app">
    <Header/>
    <Question1
    question= "What did you eat today?"
    text1= "Homemade"
    text2= "Restaurant"
    text3= "Fastfood"/>
    <Button/>
</div>

// const pic1 = require('../comps/Question/pic2.png')
// const pic2 = require('./pic2.png')
// const pic3 = require('./pic3.png')

