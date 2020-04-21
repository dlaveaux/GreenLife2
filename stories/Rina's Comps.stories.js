import React from 'react';
import Question from '../comps/Question';
import Header from '../comps/header';
import Button from '../comps/button';
import './qpages.css';
// import QuestionPage from '../Pages/QuestionPage';

export default {
    title: 'Rina Comp',
    component:Question,
}

export const QuestionComp = () =>
<div>
    <Question/>
</div>

export const QuestionPages1 = () =>
<div id="app">
    <Header/>
    <Question/>
    <Button/>
</div>