import React from 'react';
import ReactDOM from 'react-dom';

// Module Import:--

// Example-01
/* 
    Multiple modules are importing, like this
*/
import Fullname, {fname, lname, mname} from './App';

ReactDOM.render(
  <>
    {Fullname}
    {fname()}
    {mname()}
    {lname()}
  </>,
  document.getElementById('root')
);


// Example-02:
/* 
    another method:--
    Multiple modules are importing, like this
*/
import * as all from './App';

ReactDOM.render(
  <>
    {all.default}
    {all.fname()}
    {all.mname()}
    {all.lname()}
  </>,
  document.getElementById('root')
);
