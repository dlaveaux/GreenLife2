import React from 'react';
import './resultimage.css';

const defaultProfPic= require('./face1.png');

const ResultImage = ({profpic}) =>
    <div id="resultimage"><img src={profpic} />
    </div>;

ResultImage.defaultProps = {
    profpic:defaultProfPic,
}

export default ResultImage;

