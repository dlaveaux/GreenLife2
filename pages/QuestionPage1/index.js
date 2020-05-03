import React from 'react';
import Question1 from '../../comps/Question1';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
// import ResultTitle from '../comps/ResultTitle';
// import ResultImage from '../comps/ResultImage';
import '../HomePage/page1.css';

export const QuestionPage1 = () =>
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

// export const ResultPage = () =>
//     <div id="app">
//         <Header />
//         <ResultTitle/>
//         <ResultImage/>
//         <div class="resultbutton">
//             <Button
//                 width="190px"
//                 text="Check Tips" />
//         </div>
//    </div>

export default QuestionPage1;