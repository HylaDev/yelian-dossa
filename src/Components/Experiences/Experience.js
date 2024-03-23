import React, { Component} from 'react';
import underlineB from '../../Images/Double traits_noir.svg';
import './experience.css';

class Experience extends Component {
    render(){
        return (
            <div id='experience' className="experience p-4 ">
                <div className="d-flex justify-content-center align-items-center">
                    <h4>My Experiences<br /><img className='text-center' src={underlineB} alt="uderline"/></h4>
                </div>
                <div className="d-lg-flex justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <div className="timeline">
                            <div className="timeline-wrapper">
                                <div className="timeline-yr">
                                    <span>2023</span>
                                </div>
                                <div className="timeline-info">
                                    <h3><span>Full Stack Web Developper</span> <br />
                                       
                                        <a href='https://www.cauris-dev.com' target='blank'><small>Cauris-Dev</small></a>
                                        <small>Jan 23 to Oct 23</small>
                                    </h3>
                                    <p className=''>
                                        I developed web applications with Django/Python, created APIs with Django Rest Framework, and wrote API documentation. I also co-hosted demonstration sessions 
                                        with a corporate client and performed unit tests to ensure code quality.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="timeline-wrapper">
                                <div className="timeline-yr">
                                    <span>2023</span>
                                </div>
                                <div className="timeline-info">
                                    <h3><span>Volunteer</span><br />
                                        <a href='http://go.parcourslemonde.org/' target='blank'><small>Parcours Le Monde Grand Ouest</small></a>
                                        <small>Dec 22 to July 23</small>
                                    </h3>
                                    <p className=''>
                                        I took part in running group information sessions to present the association's objectives and the schemes available to facilitate local or international mobility, while also co-facilitating pre-departure workshops for new civic service volunteers. 
                                        I also ran language workshops in English and French for young people, and took an active part in radio broadcasts.
                                    </p>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="timeline">
                            <div className="timeline-wrapper">
                                <div className="timeline-yr">
                                    <span>2022</span>
                                </div>
                                <div className="timeline-info">
                                    <h3><span>Web Developper</span>
                                    <small>Intership</small><br />
                                        <a href='http://it-servicegroup.com/' target='blank'><small>IT-Services&Solutions</small></a>
                                        <small>March 2021 to Aug 2022</small>
                                    </h3>
                                    <p className=''>
                                        As an intern, I developed the company's website, and also took charge of the back-end development with Django for a specific web application, 
                                        as well as the deployment, maintenance management and testing of these applications.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-wrapper">
                                <div className="timeline-yr">
                                    <span>2022</span>
                                </div>
                                <div className="timeline-info">
                                    <h3><span>Web Developper</span>
                                    <small>Freelance</small><br />
                                        <small>RegArt</small>
                                        <small>Feb 2022 to March 2022</small>
                                    </h3>
                                    <p className=''>
                                        I developed and deployed an e-commerce site with Django-Oscar for RegArt
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Experience;