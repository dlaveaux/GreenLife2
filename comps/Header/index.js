import React from 'react';
import './header.css';

const logopic = require('./logo.png')

const Header = ({}) =>
    <div id="header">
        <div id="headerlogo">
            <img id="logoimg" src={logopic}/>
        </div>
    </div>;

// Home.defaultProps = {

// }

export default Header;

