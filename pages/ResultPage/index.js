import React from 'react';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import ResultTitle from '../../comps/ResultTitle';
import ResultImage from '../../comps/ResultImage';
import ResultExplanation from '../../comps/ResultExplanation';
import '../HomePage/page1.css';

const picToShow = require('../../comps/ResultImage/face1.png')

const ResultPage = ({ profpic }) =>
    <div id="app">
        <Header />
        <ResultTitle />
        <ResultImage />
        <div class="resultbox">
            <ResultExplanation
                text="Sorry, you contribute to the creation of environmental pollutants. - 
            but don't worry. We have some tips to improve. Check tips to improve! "/>
        </div>
            <Button
                width="190px"
                text="Check Tips" />
    </div>

export default ResultPage;