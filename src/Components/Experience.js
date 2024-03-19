import React, { Component} from 'react';
import underlineB from '../Images/Double traits_noir.svg';
import '../styles/experience.css';

class Experience extends Component {
    render(){
        return (
            <div className="experience p-4 ">
                <div className="d-flex justify-content-center align-items-center">
                    <h4>My Experiences<br /><img className='text-center' src={underlineB} alt="uderline"/></h4>
                </div>
                <div className="d-lg-flex justify-content-center align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="timeline">
                            <div className="timeline-wrapper">
                                <div className="timeline-yr">
                                    <span>2023</span>
                                </div>
                                <div className="timeline-info">
                                    <h3><span>Back-End Developper</span>
                                        <small>Remote</small> <br />
                                        <a href='https://www.cauris-dev.com' target='blank'><small>Cauris-Dev</small></a>
                                        <small>Jan 23 to Oct 23</small>
                                    </h3>
                                    <p>Proin ornare non purus ut rutrum. Nulla facilisi. Aliquam laoreet libero ac pharetra feugiat. Cras ac fermentum nunc, a faucibus nunc.</p>
                                </div>
                            </div>
                            
                            <div className="timeline-wrapper">
                                <div className="timeline-yr">
                                    <span>2023</span>
                                </div>
                                <div className="timeline-info">
                                    <h3><span>Volunteer</span>
                                        <small>Onsite</small> <br/>
                                        <a href='http://go.parcourslemonde.org/' target='blank'><small>Parcours Le Monde Grand Ouest</small></a>
                                        <small>Dec 22 to July 23</small>
                                    </h3>
                                    <p>Proin ornare non purus ut rutrum. Nulla facilisi. Aliquam laoreet libero ac pharetra feugiat. Cras ac fermentum nunc, a faucibus nunc.</p>
                                </div>
                            </div>
                            <div className="timeline-wrapper">
                                <div className="timeline-yr">
                                    <span>2022</span>
                                </div>
                                <div className="timeline-info">
                                    <h3><span>Back-End Developper</span>
                                        <small>Hybrid</small> <br />
                                        <a href='https://www.cauris-dev.com' target='blank'><small>Cauris-Dev</small></a>
                                        <small>Sept 22 to Jan 23</small>
                                    </h3>
                                    <p>Proin ornare non purus ut rutrum. Nulla facilisi. Aliquam laoreet libero ac pharetra feugiat. Cras ac fermentum nunc, a faucibus nunc.</p>
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
                                    <h3><span>Back-End Developper</span><small>Hybrid</small></h3>
                                    <p>Proin ornare non purus ut rutrum. Nulla facilisi. Aliquam laoreet libero ac pharetra feugiat. Cras ac fermentum nunc, a faucibus nunc.</p>
                                </div>
                            </div>
                            <div className="timeline-wrapper">
                                <div className="timeline-yr">
                                    <span>2022</span>
                                </div>
                                <div className="timeline-info">
                                    <h3><span>Project Manager</span><small>Best Studio</small></h3>
                                    <p>Proin ornare non purus ut rutrum. Nulla facilisi. Aliquam laoreet libero ac pharetra feugiat. Cras ac fermentum nunc, a faucibus nunc.</p>
                                </div>
                            </div>
                            <div className="timeline-wrapper">
                                <div className="timeline-yr">
                                    <span>2021</span>
                                </div>
                                <div className="timeline-info">
                                    <h3><span>Project Manager</span><small>Best Studio</small></h3>
                                    <p>Proin ornare non purus ut rutrum. Nulla facilisi. Aliquam laoreet libero ac pharetra feugiat. Cras ac fermentum nunc, a faucibus nunc.</p>
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