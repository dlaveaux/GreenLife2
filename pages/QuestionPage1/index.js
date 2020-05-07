import React from 'react';
import Link from 'next/link';
import Question1 from '../../comps/Question1';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import '../HomePage/page1.css';

const QuestionPage1 = ({}) =>
    <div id="app">
        <Header />
        <Question1
            question="Q1. What are you wearing today?"
            text1="1. Recycled"
            text2="2. Cotton"
            text3="3. Polyester" />
        <Link href="/QuestionPage2">
        <div class="questionbutton">
            <Button />
        </div>
        </Link>
    </div>

export default QuestionPage1;