import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function InlineCSS() {
    return (
        <div>
            <h1 style={{color: "red", borderStyle: "solid"}}>My First Heading</h1>
            <p className='bg-info' style={{color:"gray"}}>MIHIR BINOLI</p>

            <div className='mt-4'>
                <footer className='text-center text-white fixed-bottom bg-secondary'>
                    <div className='container mt-4'>
                        <section className='mb-4'>
                            <Link className='btn btn-link btn-floating btn-lg text-dark m-1' to="#!" role='button' data-mdb-ripple-color='light'><FontAwesomeIcon icon={faFacebook}/></Link>
                            <Link className='btn btn-link btn-floating btn-lg text-dark m-1' to="#!" role='button' data-mdb-ripple-color='light'><FontAwesomeIcon icon={faTwitter}/></Link>
                            <Link className='btn btn-link btn-floating btn-lg text-dark m-1' to="#!" role='button' data-mdb-ripple-color='light'><FontAwesomeIcon icon={faInstagram}/></Link>
                            <Link className='btn btn-link btn-floating btn-lg text-dark m-1' to="#!" role='button' data-mdb-ripple-color='light'><FontAwesomeIcon icon={faLinkedin}/></Link>
                            <Link className='btn btn-link btn-floating btn-lg text-dark m-1' to="#!" role='button' data-mdb-ripple-color='light'><FontAwesomeIcon icon={faGithub}/></Link>
                        </section>

                        <div className='text-center text-white p-3 bg-info'>
                            © 2020 Copyright:
                            <Link className="text-white" href="https://www.linkedin.com/feed/?trk=404_page">Mihir Binoli</Link>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    ); 
}
