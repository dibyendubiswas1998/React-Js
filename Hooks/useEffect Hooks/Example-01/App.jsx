import React, { useState, useEffect } from 'react';

// This is because in many cases we want to perform the same side effect regardless of 
// whether the component just mounted, or if it has been updated. Conceptually, we 
// want it to happen after every render — but React class components don’t have a method 
// like this. We could extract a separate method but we would still have to call it in two places.


const App = () =>{
    const [val, Setval] = useState(0);
    const Clicked = ()=>{
        Setval(val+1);
    };
    useEffect(()=>{
        alert('I am Clicked');
    });
    return(
        <>
            <button onClick={Clicked}>Click Me  {val}</button>
        </>
    );
};
export default App;