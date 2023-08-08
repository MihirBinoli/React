import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { IconName } from "react-icons/fa";

export default function RatingClass(props) {
  let rating = props.rating;
  const arr = [];   //push element , either first or second

  for( let i = 1; i <= 5; i++){
    if(i <= rating)

    arr.push (<FontAwesomeIcon icon={faStar} color ='green'/>);
    // arr.push (<FontAwesomeIcon icon={faStar} style={{color :'green'}}/>);
    else
    arr.push(<FontAwesomeIcon icon={faStar}/>);
  }
  return <div>{arr}</div>;
}
