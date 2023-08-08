import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons'
//import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Likecomp(props) {
    const [color, setColor] = useState(null);
    const [color1, setColor1] = useState(null);
    const [like, setLike] = useState(parseInt(props.count));
    const [dislike, setdisLike] = useState(parseInt(props.count));
    const onClick =() =>{
        if(color ==="green"){
        setColor("black");
        setLike(like-1);
        }
        else{
        setColor("green");
        setLike(like+1);
        }
    };
    
  return (
     <>
    <div className='ms-5 mt-5' >
        <span className="me-2">Likes : {like}</span>
        <FontAwesomeIcon icon={faThumbsUp} size="2xl" color={color}  onClick={onClick}/>
        
    </div>
 </>        
  );
}


