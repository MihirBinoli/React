import React from 'react'

export function demo(){
    return <h1>Named component</h1>
}

//create function
export default function FirstComponent() {
  return (
    <>
      <h1>This is my first heading</h1>
      <p>This is my para</p>
      <img src='image/absImg.jpeg'/>
    </>
  );
}