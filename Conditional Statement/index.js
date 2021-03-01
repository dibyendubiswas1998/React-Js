import React from 'react';
import ReactDOM from 'react-dom';

// Conditional Statement:----

const nm = 'Dibyendu';
const Funct = () =>{
  if(nm === 'Dibyendu'){
    return(
      <h1>I am Dibyendu Biswas</h1>
    );
  }
  else{
    return(
      <h1>Name Not Found</h1>
    );
  }
};

ReactDOM.render(
  <>
    <Funct/>

  </>,
  document.getElementById('root')
);
