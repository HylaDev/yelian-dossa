import React, { Component} from 'react';
import uderline from '../Images/Double traits_blanc.svg';
import pythonlogo from '../Images/technos/logos_python.svg';
import reactlogo from '../Images/technos/vscode-icons_file-type-reactjs.svg';
import laravellogo from '../Images/technos/skill-icons_laravel-dark.svg';
import djangologo from '../Images/technos/vscode-icons_file-type-django.svg';
import githublogo from '../Images/technos/mdi_github.svg';
import btlogo from '../Images/technos/skill-icons_bootstrap.svg';
import jslogo from '../Images/technos/logos_javascript.svg';
import htmlogo from '../Images/technos/html5.svg';
import csslogo from '../Images/technos/css3.svg';
import Marquee from "react-fast-marquee";
import '../styles/About.css';
import Typewriter from 'typewriter-effect';
class About extends Component {
    render(){
        return (
            <div className="about p-5" id='about'>
                <div className="pb-5 d-flex justify-content-center align-items-center">
                <h4 className=''>What's about me ? <br /><img src={uderline} alt="uderline"/></h4>
                </div>
                
                <div className="row">
                    <div className="col-md-6">
                        <p className='text-justify'>
                            <Typewriter options={{
                                strings: ["I define myself as a full stack developer, but I'm much more back-end oriented. My mission is to turn challenges into opportunities, with a love for code, I specialize in creating engaging web applications. I'm also passionate about artificial intelligence and data analysis. "],
                                autoStart: true,
                                loop:true,
                                delay:50,
                                deleteSpeed:30000
                            }
                            }/>
                            
                        </p>
                    </div>
                    <div className="col-md-6">
                        <Marquee>
                            <div id="technos">
                                <img src={pythonlogo} alt="python"/>
                                <img src={reactlogo} alt="react js"/>
                                <img src={laravellogo} alt="laravel"/>
                                <img src={djangologo} alt="django"/>
                                <img src={githublogo} alt="github"/>
                                <img src={btlogo} alt="bootstrap"/>
                                <img src={jslogo} alt="js"/>
                                <img src={htmlogo} alt="html"/>
                                <img src={csslogo} alt="css"/>
                            </div>
                        </Marquee>
                    </div>
                </div>
                

                

            </div>
        )
    }
}
export default About;