import React from 'react';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import ResultTitle from '../../comps/ResultTitle';
import ResultImage from '../../comps/ResultImage';
import ResultExplanation from '../../comps/ResultExplanation';
import '../HomePage/page1.css';

const picToShow = require('../../comps/ResultImage/face2.png')

const ResultPage2 = ({profpic}) =>
    <div id="app">
        <Header />
        <ResultTitle />
        <ResultImage 
        profpic={picToShow}/>
        <div class="resultbox second">
        <ResultExplanation
            text="Wow, you are on the right track but there's still room for improvement. We have some tips to help you out! "/>
        </div>
    <div class="resultbutton">
            <Button
                width="190px"
                text="Check Tips" />
        </div>
    </div>

export default ResultPage2;