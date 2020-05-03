import React from 'react';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import ResultTitle from '../../comps/ResultTitle';
import ResultImage from '../../comps/ResultImage';
import '../HomePage/page1.css';
import ResultExplanation from '../../comps/ResultExplanation';

export const ResultPage = () =>
    <div id="app">
        <Header />
        <ResultTitle />
        <ResultImage />
        <div class="resultbutton">
            <Button
                width="190px"
                text="Check Tips" />
        </div>
        <ResultExplanation
            text="There's still room for improvement - but don't worry. You are now much more aware about sustainability than you were before and we have some tips to help you out. "/>
    </div>

export default ResultPage;