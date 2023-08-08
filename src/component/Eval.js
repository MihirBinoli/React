import React from 'react'
// import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Display() {
  let x=20;
  let y=30;

  return (
    <div>
      <h1 style={{color:"blue"}}>Evaluting</h1>
      <h3> {x} {'>'} {y} {':'} {x>y ? 'TRUE':'FALSE'}</h3>
      <h3> {x} {'<'} {y} {':'} {x<y ? 'TRUE':'FALSE'}</h3>

      
    </div>
  ); 
}
