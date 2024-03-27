import React, { Component} from 'react';
import underlineB from '../../Images/Double traits_blanc.svg';
import './Project.css';
import ayikan from '../../Images/projects/ayikan.png';
import yieldy from '../../Images/projects/yieldy.png';


class Projects extends Component {
    render(){
        return (
            <div id='projects' className='container-fluid'>
                <div className="d-flex justify-content-center align-items-center mb-4">
                    <h4>Projects<br /><img className='text-center' src={underlineB} alt="uderline"/></h4>
                </div>
                <div className='row'>
                    <div className='col-md-6 my-2 cards p-1'>
                        <a href='https://www.yieldy.fr/' target='blank' title='Cliquer ici'>
                        <div className="card">
                            <img src={yieldy} className="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Yieldy</h5>
                                <p class="card-text text-justify">
                                    Yieldy is a mobile app french Fintech for buying and selling cryptocurrencies. As a back-end developer at Cauris-Dev 
                                    I developed the yieldy API with Django Rest Framework and wrote the documentation for this API.
                                </p>
                            </div>
                        </div>
                        </a>
                        {/*
                        <div id="technos">
                            
                        </div>*/}
                    </div>
                    <div className='col-md-6 my-2 cards p-1 '>
                        <a href='http://ayikan.com/' target='blank'>
                            <div className="card">
                                <img src={ayikan} className="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Ayikan</h5>
                                    <p class="card-text text-justify">
                                        Ayikan is an e-commerce application for online watch purchases made with Django-Oscar.
                                    </p>
                                </div>
                            </div>
                        </a>
                        {/*
                        <div id="technos">
                            
                        </div>*/}
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Projects;