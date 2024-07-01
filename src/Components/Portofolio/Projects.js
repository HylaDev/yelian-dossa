import React, { Component} from 'react';
import underlineB from '../../Images/Double traits_blanc.svg';
import './Project.css';


class Projects extends Component {
    render(){
        return (
            <div id='projects' className='container-fluid'>
                <div className="d-flex justify-content-center align-items-center mb-4">
                    <h4>Projets Récents<br /><img className='text-center' src={underlineB} alt="uderline"/></h4>
                </div>
                <div className='row'>
                    <div className="col-md-4 my-2 p-1">
                        <div class="">
                            <div class="card_item">
                                <a href="https://yelian-archeoit.000webhostapp.com/index.php" class="project-link">
                                    <div class="card-item_bg"></div>

                                    <div class="card-project-title">
                                        ARCHEOIT
                                    </div>

                                    <div class="card-technos">
                                        <h3 class="">Technologies utilisées</h3>
                                        <p class="card-title"><b>PHP Natif</b> - <b>Bootstrap</b> - <b>HTML</b> - <b>CSS</b> - <b>MySQL</b> </p>
                                    </div>
                                </a>
                            </div>
                                
                        </div> 
                    </div>
                    <div className="col-md-4 my-2 p-1">
                        <div class="">
                            <div class="card_item">
                                <a href="https://yelian.netlify.app/" class="project-link">
                                    <div class="card-item_bg"></div>

                                    <div class="card-project-title">
                                        MY WEBSITE
                                    </div>

                                    <div class="card-technos">
                                        <h3 class="">Technologies utilisées</h3>
                                        <p class=""><b>React</b> - <b>Bootstrap</b> - <b>HTML</b> - <b>CSS</b> - <b>SonarCloud</b> - <b>Netlify</b>  </p>
                                    </div>
                                </a>
                            </div>
                                
                        </div> 
                    </div>
                    <div className="col-md-4 my-2 p-1">
                        <div class="card-bo">
                            <div class="card_item">
                                <a href="https://www.yieldy.fr/" class="project-link">
                                    <div class="card-item_bg"></div>

                                    <div class="card-project-title">
                                        Yieldy
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
            </div>
        )
    }
}
export default Projects;