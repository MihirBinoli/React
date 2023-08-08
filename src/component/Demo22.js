import React from 'react'

let arr = [{name : "Mihir" , age : 21},
            {name : "Dhuresh",age : 80},
            {name : "Sunny" , age : 31},
            {name : "Shanti",age : 10},
        ];

export default function Demo22() {
   
        return(
            arr.map(
                (obj) => {
                    return(
                        <>
                            <p>Your name is {obj.name} and your age is{obj.age}</p>
                        
                        </>
                    );
                }
            )
        );
}
