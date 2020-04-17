import React from 'react';
import Logo from '../../Images/LOGO.png';
import "./style.css";
export default function Header() {
    return(
        <header className = "head">
          <img className = "logo" src = {Logo}></img>
        </header>
    )
}