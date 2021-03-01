import React from 'react';
import ReactDOM from 'react-dom';

// JSX Attributes:---
/*

  JSX allows us to use attributes with the HTML elements just like we do with normal HTML. 
  But instead of the normal naming convention of HTML, JSX uses camelcase convention for attributes.

*/

const img1 = "https://picsum.photos/seed/picsum/200/300";
const img2 = "https://picsum.photos/200/300?grayscale";

ReactDOM.render(
  <div>
      <h1>Hello All</h1>
      <h4>JSX Attributes</h4>
      <img src="https://picsum.photos/id/237/200/300" alt='img'></img>

      {/* OR */}
      <img src={img1} alt='img1'></img>
      <img src={img2} alt='img2'></img>
  </div>,
  document.getElementById('root')
);


