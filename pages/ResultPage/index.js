import React from 'react';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import ResultTitle from '../../comps/ResultTitle';
import ResultImage from '../../comps/ResultImage';
import ResultExplanation from '../../comps/ResultExplanation';
import '../HomePage/page1.css';

export const ResultPage = () =>
    <div id="app">
        <Header />
        <ResultTitle />
        <ResultImage />
        <ResultExplanation
            text="There's still room for improvement - but don't worry. You are now much more aware about sustainability than you were before and we have some tips to help you out. "/>
    <div class="resultbutton">
            <Button
                width="190px"
                text="Check Tips" />
        </div>
    </div>

export default ResultPage;