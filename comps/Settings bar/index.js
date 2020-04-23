import React from 'react';
import './bar.css';

const Settingsbar = ({settingsmenu, state}) => <div className="bar">
    <div>{settingsmenu}</div>
    <div>{state}</div>
</div>

Settingsbar.defaultProps = {
    settingsmenu: "Notifications",
    state: "On"
}

export default Settingsbar;