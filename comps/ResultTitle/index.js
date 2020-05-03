import React from 'react';
import './resulttitle.css';


const ResultTitle = ({text}) =>
    <div id="resulttitle">
        {text}
    </div>;

ResultTitle.defaultProps = {
    text: "Based on your results.."
}

export default ResultTitle;

