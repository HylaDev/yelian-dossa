import React from 'react';
import './Banner.css';
import myPic from '../../Images/ernest.jpg';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import Typewriter from 'typewriter-effect';


const Banner = (props) =>{
        return ( 
            <div className id='banner'>
                <div className="container-fluid"> 
                    <div className="row" id="row">
                        <div className="col-md-7 d-flex">
                            <div className=" d-flex flex-column icons">
                                <span className='icon'><a href='https://www.linkedin.com/in/y%C3%A9lian-ernest-dossa/' target='blank'><FaLinkedinIn /></a></span>
                                <span className='icon my-2'><a href='https://github.com/HylaDev' target='blank'><FaGithub /></a></span>
                            </div>
                            <div className='bar mx-3'></div>
                            <div className="welcome-text" id="welcome-text">
                                <h1 className='text-gray'>Hello,</h1>
                                <h1>I'm <span className='text-gray'>Yélian DOSSA</span></h1>
                                <p>
                                    
                                    I am a fullstack developper with {props.react}, {props.django} and {props.python}<br/>
                                    <Typewriter
                                        options={{
                                            strings: ["I'm specialize in web applications developpement."],
                                            autoStart: true,
                                            delay: 50,
                                            loop: true,
                                            deleteSpeed:700000
                                            
                                        }}
                                    />
                                </p>
                                <div className=''>
                                    <a href="#contact" className='btn btn-secondary mx- m-1 p-2'>Contact me</a>
                                </div>
                            </div>
                        </div>
                        {/* py picture */}
                        <div className="col-md-5 text-center mt-4">
                            <img src={myPic} alt="..." width={300} />
                        </div>
                    </div>
                </div>
            </div>
        )
}
export default Banner;