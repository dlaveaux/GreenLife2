import React from 'react';
import './question.css';


const pic1 = require('./pic1.png')
const pic2 = require('./pic2.png')
const pic3 = require('./pic3.png')

const Question = ({question, text1, text2, text3}) =>
    <div id="app">
        <div id="questiontext">{question}</div>
        <div id="picid">
            <div>
                <img src={pic1} />
                <div class="text">{text1}</div>
            </div>
            <div>
                <img src={pic2} />
                <div class="text">{text2}</div>
            </div>
            <div>
                <img src={pic3} />
                <div class="text">{text3}</div>
            </div>
        </div>
    </div>;

Question.defaultProps = {
    question: "What are you wearing today?",
    text1: "Recycled",
    text2: "Wool/Cotton",
    text3: "Polyester/Plastic"
}

export default Question;

