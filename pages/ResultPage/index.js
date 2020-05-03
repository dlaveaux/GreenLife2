import React from 'react';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import ResultTitle from '../../comps/ResultTitle';
import ResultImage from '../../comps/ResultImage';
import '../HomePage/page1.css';

export const ResultPage = () =>
    <div id="app">
        <Header />
        <ResultTitle/>
        <ResultImage/>
        <div class="resultbutton">
            <Button
                width="190px"
                text="Check Tips" />
        </div>
   </div>

export default ResultPage;