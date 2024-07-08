import React, { Component} from 'react';
import underlineB from '../../Images/Double traits_blanc.svg';
import './Project.css';
import {FaGlobe, FaGithub} from "react-icons/fa";


class Projects extends Component {
    render(){
        return (
            <div id='projects' className='container-fluid'>
                <div className="d-flex justify-content-center align-items-center mb-4">
                    <h4>Projets Récents<br /><img className='text-center' src={underlineB} alt="uderline"/></h4>
                </div>
                <div className='row'>
                    <div className="col-md-4 my-2 p-1">
                        <div class="card_item">
                            <a href="https://github.com/HylaDev/nodejs_homework" target='blank' class="project-link">
                                <div class="card-item_bg"></div>

                                <div class="card-project-title d-flex">
                                    DATA MONITORING <span class="fs-5 mx-2" ><FaGithub /></span>
                                </div>

                                <div class="card-technos">
                                    <h4 class="">Technologies utilisées</h4>
                                    <p class="card-title"><b>NodeJs</b> - <b>Express</b> - <b>MongoDB</b> - <b>Postman</b> - <b>GitHub</b> </p>
                                    
                                    
                                </div>
                                
                                
                            </a>
                        </div>                                
                    </div>
                    <div className="col-md-4 my-2 p-1">
                        <div class="card_item">
                            <a href="https://yelian-archeoit.000webhostapp.com/index.php" target='blank' class="project-link">
                                <div class="card-item_bg"></div>

                                <div class="card-project-title d-flex">
                                    ARCHEOIT <span class="fs mx-2" ><FaGlobe /></span>
                                </div>

                                <div class="card-technos">
                                    <h4 class="">Technologies utilisées</h4>
                                    <p class="card-title"><b>PHP Natif</b> - <b>Bootstrap</b> - <b>HTML5</b> - <b>CSS3</b> - <b>MySQL</b> </p>
                                </div>
                                
                            </a>
                        </div>                                
                    </div>
                    <div className="col-md-4 my-2 p-1">
                        <div class="card_item">
                            <a href="https://yelian.netlify.app/" target='blank' class="project-link">
                                <div class="card-item_bg"></div>

                                <div class="card-project-title d-flex">
                                    MY WEBSITE <span class="fs mx-2" ><FaGlobe /></span>
                                </div>

                                <div class="card-technos">
                                    <h3 class="">Technologies utilisées</h3>
                                    <p class=""><b>React</b> - <b>Bootstrap</b> - <b>HTML5</b> - <b>CSS3</b> - <b>SonarCloud</b></p>
                                </div>
                            </a>
                        </div> 
                    </div>
                    <div className="col-md-4 my-2 p-1">
                        <div class="card_item">
                            <a href="https://gotalentsport.netlify.app/" target='blank' class="project-link">
                                <div class="card-item_bg"></div>

                                <div class="card-project-title d-flex">
                                    GOTALENTSPORT <span class="fs mx-2" ><FaGlobe /></span>
                                </div>

                                <div class="card-technos">
                                    <h3 class="">Technologies utilisées</h3>
                                    <p class=""><b>Bootstrap</b> - <b>HTML5</b> - <b>CSS3</b>- <b>JQuery</b></p>
                                    
                                </div>
                            </a>
                        </div> 
                    </div>
                    <div className="col-md-4 my-2 p-1">
                        <div class="card_item">
                            <a href="https://gotalentsport.netlify.app/" target='blank' class="project-link">
                                <div class="card-item_bg"></div>

                                <div class="card-project-title d-flex">
                                    TECHX <span class="fs mx-2" ><FaGlobe /></span>
                                </div>

                                <div class="card-technos">
                                    <h3 class="">Technologies utilisées</h3>
                                    <p class=""><b>Bootstrap</b> - <b>HTML5</b> - <b>CSS3</b> - <b>JQuery</b></p>
                                    
                                </div>
                            </a>
                        </div> 
                    </div>
                    <div className="col-md-4 my-2 p-1">
                        <div class="card_item">
                            <a href="https://www.yieldy.fr/" class="project-link">
                                <div class="card-item_bg"></div>

                                <div class="card-project-title d-flex">
                                    Yieldy <span class="fs mx-2" ><FaGlobe /></span>
                                </div>

                                <div class="card-technos">
                                    <h3 class="">Technologies utilisées</h3>
                                    <p class=""><b>React Native</b> - <b>Postman</b> - <b>Django Rest Framework</b> - <b>Python</b> - <b>PostgreSQL</b></p>
                                    
                                </div>
                            </a>
                        </div>                                
                    </div>
                    
                </div>                
            </div>
        )
    }
}
export default Projects;