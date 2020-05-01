import React from 'react';
import './question2.css';
import './questioncolor2.css';

const pic1 = require('./pic4.png')
const pic2 = require('./pic5.png')
const pic3 = require('./pic6.png')

const Question2 = ({question, text1, text2, text3}) =>
    <div id="whole">
        <div id="questiontext">{question}</div>
        <div id="picid2">
            <div class="iconback first">
                <img src={pic1} />
                <div class="text">{text1}</div>
            </div>
            <div class="iconback second">
                <img src={pic2} />
                <div class="text">{text2}</div>
            </div>
            <div class="iconback third">
                <img src={pic3} />
                <div class="text">{text3}</div>
            </div>
        </div>
    </div>;

// Question2.defaultProps = {
//     question: "What are you wearing today?",
//     text1: "Recycled",
//     text2: "Wool/Cotton",
//     text3: "Polyester/Plastic"
// }

export default Question2;

