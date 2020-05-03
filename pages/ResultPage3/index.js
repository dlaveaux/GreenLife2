import React from 'react';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import ResultTitle from '../../comps/ResultTitle';
import ResultImage from '../../comps/ResultImage';
import ResultExplanation from '../../comps/ResultExplanation';
import '../HomePage/page1.css';

const picToShow = require('../../comps/ResultImage/face3.png')

const ResultPage3 = ({profpic}) =>
    <div id="app">
        <Header />
        <ResultTitle />
        <ResultImage 
        profpic={picToShow}/>
        <ResultExplanation
            text="You are a sustainable superstar! Looks like you already know the benefits of a sustainable lifestyle. We have included some tips on how you can best spread your knowledge to those around you!"/>
    <div class="resultbutton">
            <Button
                width="190px"
                text="Check Tips" />
        </div>
    </div>

export default ResultPage3;