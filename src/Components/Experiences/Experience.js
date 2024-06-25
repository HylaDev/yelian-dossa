import React, { Component} from 'react';
import underlineB from '../../Images/Double traits_noir.svg';
import './experience.css';


class Experience extends Component {
    render(){
        return (
            <div id='experience' className="experience p-4 ">
                <div className="d-flex justify-content-center align-items-center">
                    <h4>Mon expérience 👨‍🏭<br /><img className='text-center' src={underlineB} alt="uderline"/></h4>
                </div>
                <div className="row my-4">
                    <div className="col-lg-6">
                        <h3 className="">Expérience professionnelle</h3>
                        <div className="timeline">
                            <div className="timeline-wrapper">
                                <div className="timeline-yr">
                                    <span>2023</span>
                                </div>
                                <div className="timeline-info">
                                    <h3><span>Développeur Web Full Stack</span> <br />
                                       
                                        <a href='https://www.cauris-dev.com' title='cliquez moi' target='blank'><small className="text-decoration-underline">Cauris-Dev</small></a>
                                        <small>Janvier 23 - Octobre 23</small>
                                    </h3>
                                    <p className='text-justify'>
                                        J'ai développé des applications web avec Django/Python, créé des API avec Django Rest Framework et rédigé la documentation des API. 
                                        J'ai également co-animé des sessions de démonstration avec une entreprise cliente et effectué des tests unitaires pour assurer la qualité du code.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-wrapper">
                                <div className="timeline-yr">
                                    <span>2022</span>
                                </div>
                                <div className="timeline-info">
                                    <h3><span>Développeur Web</span>
                                    <small>Stage</small><br />
                                        <a href='http://it-servicegroup.com/' title='cliquez moi' target='blank'><small className="text-decoration-underline">IT-Services&Solutions</small></a>
                                        <small>Mars 21 - Août 22</small>
                                    </h3>
                                    <p className='text-justify'>
                                    En tant que stagiaire, j'ai travaillé sur le site web de l'entreprise, et j'ai également travaillé sur le back-end avec Django pour l'une des applications web de l'entreprise. 
                                    J'ai également travaillé sur le back-end avec Django d'une des applications web de l'entreprise. 
                                    J'ai déployé, maintenu et testé des applications web.

                                    </p>
                                </div>
                            </div>
                            <div className="timeline-wrapper">
                                <div className="timeline-yr">
                                    <span>2022</span>
                                </div>
                                <div className="timeline-info">
                                    <h3><span>Développeur Web</span>
                                    <small>Freelance</small><br />
                                        <small>RegArt</small>
                                        <small>Février 22 - Mars 22</small>
                                    </h3>
                                    <p className='text-justify'>
                                    J'ai développé et déployé un site de commerce en 
                                    ligne de montre personnalisables avec Django-Oscar pour RegArt.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <h3 className="">Expérience associative</h3>
                        <div className="timeline">
                            <div className="timeline-wrapper">
                                    <div className="timeline-yr">
                                        <span>2024</span>
                                    </div>
                                    <div className="timeline-info">
                                        <h3><span>Bénévole</span><br />
                                            <a href='https://appebenin.com/' title='cliquez moi' target='blank'><small className="text-decoration-underline">APPE </small></a>
                                            <small>Septembre 18 - Aujourd'hui</small>
                                        </h3>
                                        <p className='text-justify'>
                                        J'ai co-animé des ateliers de préparation au départ des nouveaux volontaires en service civique de l'association, co-organisé les événements de 
                                        remise de prix aux lauréats, participé aux activités de l'association et pris part à des émissions radio.
                                        </p>
                                    </div>
                            </div>
                            <div className="timeline-wrapper">
                                    <div className="timeline-yr">
                                        <span>2023</span>
                                    </div>
                                    <div className="timeline-info">
                                        <h3><span>Volontaire Service Civique</span><br />
                                            <a href='http://go.parcourslemonde.org/' title='cliquez moi' target='blank'><small className="text-decoration-underline">Parcours Le Monde Grand Ouest</small></a>
                                            <small>Décembre 22 - Juillet 23</small>
                                        </h3>
                                        <p className='text-justify'>
                                        J'ai participé à l'animation de sessions d'information collectives pour présenter les objectifs de l'association et les dispositifs disponibles pour faciliter la mobilité locale ou internationale, tout en co-animant des ateliers de préparation au départ pour les nouveaux volontaires du service civique. 
                                        J'ai également animé des ateliers linguistiques en anglais et en français pour les jeunes et participé activement à des émissions de radio.
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