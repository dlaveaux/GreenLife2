import React from 'react';
import './question1.css';
import './questioncolor1.css';
// import pic1 from '../../Images/pic1.png';
// import pic2 from '../../Images/pic2.png';
// import pic3 from '../../Images/pic3.png';

const pic1 = require('./pic1.png')
const pic2 = require('./pic2.png')
const pic3 = require('./pic3.png')

const Question1 = ({question, text1, text2, text3, }) =>
    <div id="whole">
        <div id="questiontext">{question}</div>
        <div id="picid1">
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

// function IconClick(){

// }

Question1.defaultProps = {
    question: "What are you wearing today?",
    text1: "1.Recycled",
    text2: "2.Cotton",
    text3: "3.Polyester",
    // onClick: IconClick
}

export default Question1;

