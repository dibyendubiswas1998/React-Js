import React from 'react';
import ReactDOM from 'react-dom';

// Multiple jsx Elements using 'div':---

ReactDOM.render(
  <div>
      <h1>Hello Wrold</h1>
      <p>I start to learn React JS</p>      
  </div>,
  document.getElementById('root')
);


// Multiple jsx Elements Using React Fragement  :---
/*
  React Fragement:--
  A common pattern in React is for a component to return multiple elements. 
  Fragments let you group a list of children without adding extra nodes to the DOM.
*/

ReactDOM.render(
  <React.Fragment>
    <h1>Hello All</h1>
    <p>Using React Fragement</p>
    <p>I start to learn React JS</p>

  </React.Fragment>,
  document.getElementById('root')
);


// Multiple jsx Elements Using Syntactical Sugar Form  :---

/*
  Syntactic Sugar:---
  React JSX is a syntactic sugar for creating DOM elements using Javascript. 
  It essentially outputs HTML in the document.

  The browser understands only HTML to provide the visual representation to the user. 
  The browser can't do that with JavaScript alone.
*/

ReactDOM.render(
  <>
    <h1>Hello All</h1>
    <p>Using Syntactical Sugar Form</p>
    <p>I start to learn React JS</p>
  </>,
  document.getElementById('root')
);

