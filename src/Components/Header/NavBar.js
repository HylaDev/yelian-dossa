import React, { Component} from 'react';
import './NavBar.css';
import './NavBar.css';
import logo from '../../Images/logo.svg';
import {FaEnvelope} from 'react-icons/fa';
class NavBar extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg fixed-top navbar-light">
                <a className="navbar-brand ml-5" href="#header"><img src={logo} alt="My logo"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#about">À propos de moi </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#experience">Mon expérience</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projets récents</a>
                        </li>
                        {/*
                        <li className="nav-item">
                            <a className="nav-link" href="#certifications">My certifications</a>
                        </li>*/}
                    </ul>
                    <ul className="navbar-nav ms-auto mr-5">
                        <li className="nav-item">
                            <a className="nav-link btn ml-5" href="#contact" target='blank'><FaEnvelope /></a>
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