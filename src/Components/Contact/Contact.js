import underlineB from '../../Images/Double traits_noir.svg';
import './Contact.css';
import {FaEnvelope, FaPhone, FaMapMarked, FaInstagram, FaLinkedinIn, FaGithub} from 'react-icons/fa';


const Contact = () => {
    
    return (
        <div className='container' id='contact'>
            <div className="d-flex justify-content-center align-items-center mb-4">
                <h4>Let's talk<br /><img className='text-center' src={underlineB} alt="uderline"/></h4>
            </div>
            <div className='row'>
            <div className="col-lg-5 d-flex align-items-stretch">
                    
                    <div className="mt-5">
                        <h1>Get in touch</h1>
                        <p>Are you interested in my profile ?
                            Feel free to contact me via my social networks and my contact.
                        </p>
                    </div>
                </div>
                <div className="col-lg-7 d-flex align-items-stretch">
                    
                    <div className="info">
                        <h5>Join me on my social network</h5>
                        <div className='d-flex align-items-stretch f-wrap'>
                            <div className="adress mx-2">
                                <h4><FaMapMarked /></h4>
                                <p>Orléans, France</p>
                            </div>
                            <div className="email mx-2">
                                <h4><FaEnvelope /></h4>
                                <p>ernestdossa.9@gmail.com</p>
                            </div>
                            <div className="phone mx-2">
                                <h4><FaPhone /></h4>
                                <p>+33 745-492-396</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="">
                                <a href='https://www.instagram.com/ernest_dossa/' target='blank'><FaInstagram /></a>
                            </div>
                            <div className="">
                                <a href='https://www.linkedin.com/in/y%C3%A9lian-ernest-dossa/' target='blank' className='mx-4'><FaLinkedinIn /></a>
                            </div>
                            <div className="">
                                <a href='https://github.com/HylaDev' target='blank'><FaGithub /></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/**
                <div className='col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch'>
                    <form action='' method='' className='contact-form'>
                        <div className='row'>
                            <div className="form-group col-md-6">
                                <label for="fname">Your full name</label>
                                <input type="text" name="fname" className="form-control" id="name" required />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="name">Your email</label>
                                <input type="email" value='' onChange='' className="form-control" name="email" id="email" required />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="name">Object</label>
                            <input type="text" className="form-control" name="subject" id="subject" required />
                        </div>
                        <div class="form-group">
                            <label for="name">Message</label>
                            <textarea value='' className="form-control" name="message" rows="3" required></textarea>
                        </div>
                        <div className='send-btn'>
                            <button className='btn btn-secondary p-2'>Send Email</button>
                        </div>

                    </form>
                </div>*/}
            </div>
        </div>
    );
    };
export default Contact;