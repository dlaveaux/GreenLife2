import React from 'react';
import Question2 from '../../comps/Question2';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import '../HomePage/page1.css';

export const QuestionPage2 = () =>
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

export default QuestionPage2;