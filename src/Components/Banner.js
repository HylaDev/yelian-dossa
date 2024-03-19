import React from 'react';
import '../styles/Banner.css';
import myPic from '../Images/Hero_image.svg';
import {FaTwitter, FaWhatsapp, FaLinkedinIn} from 'react-icons/fa';
/*import ReactTyped  from 'react-typed';*/
const Banner = (props) =>{
        return ( 
            <div className=''>
                <div className="container"> 
                    <div className="row" id="row">
                        <div className="col-md-7 d-flex">
                            <div className=" d-flex flex-column icons">
                                <span className='icon'><FaLinkedinIn /></span>
                                <span className='icon my-2'><FaTwitter /></span>
                                <span className='icon '><FaWhatsapp /></span>
                            </div>
                            <div className='bar mx-3'></div>
                            <div className="welcome-text text-left" id="welcome-text">
                                <h1 className='text-gray'>Hello,</h1>
                                <h1><span className='text-gray'>I'm</span> Yélian DOSSA</h1>
                                {/*<ReactTyped strings={["My React App"]} typeSpeed={100} loop />*/}
                                <p>
                                    I am a fullstack developper with {props.react}, {props.django} and {props.python}<br/>
                                    I specialize in web and mobile developpement
                                </p>
                                <div className='mb-4 text-left'>
                                    <a href="contact" className='btn btn-secondary mx-4 m-1 p-2'>Contact me</a>
                                    <a href="resume" className='btn btn-outline-secondary m-1 p-2'>View Resume</a>
                                </div>
                            </div>
                        </div>
                        {/**/}
                        <div className="col-md-5">
                            <img src={myPic} alt="..."/>
                        </div>
                    </div>
                </div>
            </div>
        )
}
export default Banner;