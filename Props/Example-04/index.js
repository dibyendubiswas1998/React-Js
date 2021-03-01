import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import './index.css';
import Data from './Sdata';

// props:----


// using map method call all data from Sdata.
function CallAll(val){
  return(
    <Card
         key = {val.id}
         imgsrc = {val.imgsrc}
         altname = {val.altname}
         title = {val.title}
         description = {val.description}
    />
  );
};

ReactDOM.render(
  <>
    {/* using map method display all Element or Data */}
    {Data.map(CallAll)}

  </>,
  document.getElementById('root')
);
