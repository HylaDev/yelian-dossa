import React from "react";
import { ReactComponent as Sun } from "../Images/Sun.svg";
import { ReactComponent as Moon } from "../Images/Moon.svg";
import "../styles/DarkMode.css";

const DarkMode = () => {
    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme','dark')
    };
    const setLightMode = () => {
        document.querySelector('body').setAttribute('data-theme','light')
    };

    const changetheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    };
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={changetheme}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
