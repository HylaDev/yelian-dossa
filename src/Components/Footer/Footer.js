import React, { Component} from 'react';
import './Footer.css';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';

class Footer extends Component {
    render(){
        return (
            <div id='footer'>
                <div className="d-flex flex-row align-items-center justify-content-center">
                    <span className='icon'><a href='https://www.linkedin.com/in/y%C3%A9lian-ernest-dossa/' target='blank'><FaLinkedinIn /></a></span>
                    <span className='icon mx-3'><a href='https://github.com/HylaDev' target='blank'><FaGithub /></a></span>
                </div>
                <p> Réalisé avec <span className='heart'>♡</span> par moi</p>
            </div>
        )
    }
}
export default Footer;