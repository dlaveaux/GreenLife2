import React from 'react';
import '../Question1/question1.css';
// import pic1 from '../../Images/pic1.png';
// import pic2 from '../../Images/pic2.png';
// import pic3 from '../../Images/pic3.png';

const pic1 = require('./pic4.png')
const pic2 = require('./pic5.png')
const pic3 = require('./pic6.png')

const Question1 = ({question, text1, text2, text3}) =>
    <div id="whole">
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

Question1.defaultProps = {
    question: "What are you wearing today?",
    text1: "Recycled",
    text2: "Wool/Cotton",
    text3: "Polyester/Plastic"
}

export default Question1;

