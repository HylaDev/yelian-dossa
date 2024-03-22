import React, { Component} from 'react';
import '../styles/NavBar.css';
import '../styles/NavBar.css';
import logo from '../Images/logo.svg';
import {FaMoon} from 'react-icons/fa';
class NavBar extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg fixed-top navbar-light">
                <a className="navbar-brand ml-5" href="home"><img src={logo} alt="My logo"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">What's about me ?</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="Services">My Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="Project">Recent Projects</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mr-5">
                        <li className="nav-item">
                            <a className="nav-link btn ml-5" href="home"><FaMoon /></a>
                        </li>
                    </ul>
                    {/* 
                    <ul className="navbar-nav ms-auto mr-5">
                        <li className="nav-item">
                            <a className="nav-link btn ml-5" href="home"><DarkMode /></a>
                        </li>
                    </ul>*/}
                </div>
            </nav>
        )
    }
}
export default NavBar;