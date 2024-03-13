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

import '../styles/About.css';

class About extends Component {
    render(){
        return (
            <div className="about">
                <h4>About Me<img src={uderline} alt="uderline"/></h4>
                <div className="row">
                    <div className="col-md-6">
                        <p className='text-justify'>
                            Lorem ipsum dolor sit amet consectetur. Donec nam cursus vel lectus cras risus viverra sed
                            dignissim. Ultrices fermentum nibh duis ullamcorper et interdum aliquet et. Pharetra non eget diam
                            amet nisi. Turpis duis venenatis nam potenti mattis.
                            Lorem ipsum dolor sit amet consectetur. Donec nam cursus vel lectus cras risus viverra sed
                            dignissim. Ultrices fermentum nibh duis ullamcorper et interdum aliquet et. Pharetra non eget diam
                            amet nisi. Turpis duis venenatis nam potenti mattis
                        </p>
                    </div>
                    <div className="col-md-6">
                        <p className='text-justify'>
                            Lorem ipsum dolor sit amet consectetur. Donec nam cursus vel lectus cras risus viverra sed
                            dignissim. Ultrices fermentum nibh duis ullamcorper et interdum aliquet et. Pharetra non eget diam
                            amet nisi. Turpis duis venenatis nam potenti mattis.
                            Lorem ipsum dolor sit amet consectetur. Donec nam cursus vel lectus cras risus viverra sed
                            dignissim. Ultrices fermentum nibh duis ullamcorper et interdum aliquet et. Pharetra non eget diam
                            amet nisi. Turpis duis venenatis nam potenti mattis
                        </p>
                    </div>
                </div>
                

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

            </div>
        )
    }
}
export default About;