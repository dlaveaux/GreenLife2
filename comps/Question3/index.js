import React from 'react';
import './question3.css';
import './questioncolor3.css';


const pic1 = require('./pic7.png')
const pic2 = require('./pic8.png')
const pic3 = require('./pic9.png')

const Question3 = ({question, text1, text2, text3}) =>
    <div id="whole">
        <div id="questiontext">{question}</div>
        <div id="picid3">
            <div class="iconback first" >
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

Question3.defaultProps = {
    // question: "What are you wearing today?",
    // text1: "Recycled",
    // text2: "Wool/Cotton",
    // text3: "Polyester/Plastic"
}

export default Question3;

