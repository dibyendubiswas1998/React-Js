import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import './index.css';

// props:----

ReactDOM.render(
  <>

    {/* Use multiple card and change imgsrc, altname, title and description */}

    <Card
         imgsrc = "https://picsum.photos/200/300?grayscale"
         altname = "img1"
         title = "Image 1"
         description = "This is image-one"
    />

    <Card
         imgsrc = "https://picsum.photos/id/870/200/300?grayscale&blur=2"
         altname = "img2"
         title = "Image 2"
         description = "This is image-two"
    />

  </>,
  document.getElementById('root')
);
