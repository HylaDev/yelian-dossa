import React, { Component} from 'react';
import underlineB from '../../Images/Double traits_blanc.svg';
import './Project.css';
import yieldy from '../../Images/projects/yieldy.png';
import portofolio from '../../Images/projects/portofolio.png';
import archeoit from '../../Images/projects/homepage.png';


class Projects extends Component {
    render(){
        return (
            <div id='projects' className='container-fluid'>
                <div className="d-flex justify-content-center align-items-center mb-4">
                    <h4>Projects I've worked on<br /><img className='text-center' src={underlineB} alt="uderline"/></h4>
                </div>
                <div className='row'>
                    <div className='col-md-4 my-2 cards p-1'>
                        <a href='https://yelian-archeoit.000webhostapp.com/index.php' target='blank' title='Cliquer ici'>
                        <div className="card">
                            <img src={archeoit} className="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">ArcheoIT</h5>
                                <p class="card-text text-justify">
                                    ArcheoIT is a school project whose aim was to create a showcase site for an 
                                    association specializing in archaeology.  
                                </p>
                                <div id="">
                                    <h3 class="">Technologies used</h3>
                                    <p class="card-title"><b>Native PHP</b> - <b>Bootstrap</b> - <b>HTML</b> - <b>CSS</b> - <b>MySQL</b> </p>
                                </div>
                            </div>
                        </div>
                        </a>
                        
                    </div>
                    <div className='col-md-4 my-2 cards p-1 '>
                        <a href='http://yelian.netlify.app/' target='self'>
                            <div className="card">
                                <img src={portofolio} className="card-img-top" alt="Portofolio home page" />
                                <div class="card-body">
                                    <h5 class="card-title">My website</h5>
                                    <p class="card-text text-justify">
                                        My portofolio was created to increase my visibility and my search for a work-study placement. 
                                        This project shows my skills in responsive web development and the different projects I've worked on. 
                                    </p>
                                    <div id="">
                                        <h3 class="">Technologies used</h3>
                                        <p class="card-title"><b>React</b> - <b>Bootstrap</b> - <b>HTML</b> - <b>CSS</b> </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        
                    </div>
                    <div className='col-md-4 my-2 cards p-1'>
                        <a href='https://www.yieldy.fr/' target='blank' title='Cliquer ici'>
                        <div className="card">
                            <img src={yieldy} className="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Yieldy</h5>
                                <p class="card-text text-justify">
                                    Yieldy is a mobile app french Fintech for buying and selling cryptocurrencies. As a back-end developer at Cauris-Dev 
                                    I developed the yieldy API with Django Rest Framework and wrote the documentation for this API.
                                </p>
                                <div id="">
                                    <h3 class="">Technologies used</h3>
                                    <p class="card-title"><b>Django</b> - <b>Django Rest Framework</b> - <b>Postman</b> - <b>Python</b> - <b>PostgreSQL</b></p>
                                </div>
                            </div>
                            
                        </div>
                        </a>
                        
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Projects;