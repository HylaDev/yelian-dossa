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
                    <h4>Projets Récents<br /><img className='text-center' src={underlineB} alt="uderline"/></h4>
                </div>
                <div className='row'>
                    <div className='col-md-4 my-2 cards p-1'>
                        <a href='https://yelian-archeoit.000webhostapp.com/index.php' target='blank' title='Cliquer ici'>
                        <div className="card">
                            <img src={archeoit} className="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">ArcheoIT</h5>
                                <p class="card-text text-justify">
                                    ArcheoIT est un projet scolaire dont l'objectif était de créer un site vitrine pour 
                                    une association spécialisée dans l'archéologie. Le site 
                                    présente les différentes activités de l'association et leurs découvertes.  
                                </p>
                                <div id="">
                                    <h3 class="">Technologies utilisées</h3>
                                    <p class="card-title"><b>PHP Natif</b> - <b>Bootstrap</b> - <b>HTML</b> - <b>CSS</b> - <b>MySQL</b> </p>
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
                                        Mon portofolio a été créé pour augmenter ma visibilité et ma recherche d'alternance. 
                                        Ce projet montre mes compétences en développement web responsive et les différents projets sur lesquels j'ai travaillé. 
                                    </p>
                                    <div id="">
                                        <h3 class="">Technologies utilisées</h3>
                                        <p class="card-title"><b>React</b> - <b>Bootstrap</b> - <b>HTML</b> - <b>CSS</b> - <b>SonarCloud</b> - <b>Netlify</b>  </p>
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
                                Yieldy est une application mobile fintech française pour l'achat et la vente de crypto-monnaies et d'actions. En tant que développeur back-end chez Cauris-Dev, 
                                j'ai développé l'API de Yieldy avec Django Rest Framework et j'ai écrit la documentation de l'API.
                                </p>
                                <div id="">
                                    <h3 class="">Technologies utilisées</h3>
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