import React, { useState, useEffect } from 'react';
import './index.css';

const App = () =>{
    
    const [width, setWidth] = useState(window.screen.width);
    const ChangeWidth = () =>{
        setWidth(window.innerWidth);
    };
    useEffect(() =>{
        window.addEventListener('resize', ChangeWidth);
    });
    return(
        <>
            <h1>My screen width is {width}</h1>        

        </>
    );
}
export default App;