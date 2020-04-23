import React from 'react';
import './analysis.css';

const graphImage = require('./graph.png');

const Analysis = ({}) => <div>
    <div>
        <img className="graph" src={graphImage} />
    </div>
    <ul className="list">
        <li>Clothing</li>
        <li>Transportation</li>
        <li>Food</li>
    </ul>
</div>

export default Analysis;