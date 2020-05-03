import React from 'react';
import './resultexplanation.css';

const ResultExplanation = ({text}) =>
    <div id="resultexplanationtext">{text}
    </div>;

ResultExplanation.defaultProps = {
    text: "imtirediwanttorestilikemeilikecanada",
}

export default ResultExplanation;

