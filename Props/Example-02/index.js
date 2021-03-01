import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import './index.css';
import Data from './Sdata';

// props:----
ReactDOM.render(
  <>

    {/* Use multiple card and change the value of imgsrc, altname, title and description */}

    <Card
         imgsrc = {Data[0].imgsrc}
         altname = {Data[0].altname}
         title = {Data[0].title}
         description = {Data[0].description}
    />

    <Card
         imgsrc = {Data[1].imgsrc}
         altname = {Data[1].altname}
         title = {Data[1].title}
         description = {Data[1].description}
    />
    <Card
         imgsrc = {Data[2].imgsrc}
         altname = {Data[2].altname}
         title = {Data[2].title}
         description = {Data[2].description}
    />

  </>,
  document.getElementById('root')
);
