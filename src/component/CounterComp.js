import React from 'react'
import { useState } from 'react';

export default function CounterComp(props){
    // console.log(props.count++);

    // let x = parseInt(props.count);
    const [counter,setCounter] =  useState(1);                         //both can have any name ,first is value and sec is function, through function value is rendered
    const [count,setCount] = useState(30);

    // const [counter,setCounter] =  usedState(props.count);
    const Increment = () => {
        setCounter(counter+1);                      //after rendering it will not stop ,//(props.count)
    };
    const decrement = () => {
        setCount(count-1);
    }



  return (
    <>
    <div>
        <h1>Counter : {counter}</h1>                    
        <button onClick={Increment}>Increment</button>
    </div>
    <div>
        <h1>Counter : {count}</h1>                    
        <button onClick={decrement}>decrement</button>
    </div>
    </>
  );
}
