import React from 'react';
import './user.css';

const userpic = require('./user.png')


const User = () => <div className="page">
    <img className="usericon" src={userpic}></img>
    <div className="name">Brian Shin</div>
</div>

export default User;

