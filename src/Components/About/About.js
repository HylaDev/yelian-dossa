import React, { Component} from 'react';
import uderline from '../../Images/Double traits_blanc.svg';
import pythonlogo from '../../Images/technos/logos_python.svg';
import reactlogo from '../../Images/technos/vscode-icons_file-type-reactjs.svg';
import laravellogo from '../../Images/technos/skill-icons_laravel-dark.svg';
import djangologo from '../../Images/technos/vscode-icons_file-type-django.svg';
import githublogo from '../../Images/technos/mdi_github.svg';
import btlogo from '../../Images/technos/skill-icons_bootstrap.svg';
import jslogo from '../../Images/technos/logos_javascript.svg';
import htmlogo from '../../Images/technos/html5.svg';
import csslogo from '../../Images/technos/css3.svg';
import djangoRest from '../../Images/technos/dj-rest.svg';
import Marquee from "react-fast-marquee";
import './About.css';
class About extends Component {
    render(){
        return (
            <div className="about p-5" id='about'>
                <div className="pb-5 d-flex justify-content-center align-items-center">
                <h4 className=''>À propos de moi 😀<br /><img src={uderline} alt="uderline"/></h4>
                </div>
                
                <div className="row">
                    <div className="col-md-6">
                        <p className='text-justify'>
                            Je me définis comme un développeur full stack, mais je suis beaucoup plus orienté back-end. 
                            Ma mission est de transformer les défis en opportunités, avec un amour pour le code, je me spécialise dans la création d'applications web engageantes. 
                            Je suis également passionné par l'intelligence artificielle 👾 🤖.
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
                                <img src={djangoRest} width={120} alt="Django Rest"/>
                            </div>
                        </Marquee>
                    </div>
                </div>
                

                

            </div>
        )
    }
}
export default About;