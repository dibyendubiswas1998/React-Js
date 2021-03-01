import React from 'react';
import ReactDOM from 'react-dom';

// Template Literals:---
/*

  Template literals are string literals allowing embedded expressions. 
  You can use multi-line strings and string interpolation features with them.

*/

const fname = 'Dibyendu';
const lname = 'Biswas';

ReactDOM.render(
  <div>
      <h1>Hello All</h1>
      <h4>Template Literals</h4>
      <p>My frist Name is: {fname}</p> 
      <p>My last Name is: {lname}</p>
      <p>My full Name is: {fname + " " + lname}</p>

      {/* OR */}
      <p>{`My Name is ${fname} ${lname}`}</p>
  </div>,
  document.getElementById('root')
);


