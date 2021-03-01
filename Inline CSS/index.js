import React from 'react';
import ReactDOM from 'react-dom';

// Inline CSS:---

const p1 = {
  color : 'red',
  fontSize : '40px',
  fontWeight : 'bold',
}

const p2 = {
  color : 'yellow',
  fontSize : '60px',
  fontWeight : 'bolder',
}

ReactDOM.render(
  <div>
      <h1>Hello All</h1>
      <h4>In Line CSS</h4>
      <p style={p1}>Text-1</p>
      <p style={p2}>Text-2</p>

      {/* OR */}
      <p style={{color:'pink', backgroundColor:'green', fontSize:'45px'}}>Text-3</p>
      
  </div>,
  document.getElementById('root')
);


