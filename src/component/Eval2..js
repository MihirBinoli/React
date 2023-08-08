import React from 'react'

export default function Jul24() {
  let x = 10;
  let y = 20;
  return (
    <div>
        <h1>Evaluate Expression</h1>
        <h3>{x} {">"} {y} {':'} {x>y? "True": "False"}</h3>
    </div>
  );
}
