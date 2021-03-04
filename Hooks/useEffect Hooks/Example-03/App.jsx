import React, { useState, useEffect } from 'react';

// This is because in many cases we want to perform the same side effect regardless of 
// whether the component just mounted, or if it has been updated. Conceptually, we 
// want it to happen after every render — but React class components don’t have a method 
// like this. We could extract a separate method but we would still have to call it in two places.


const App = () =>{
    const [val1, Setval1] = useState(0);
    const [val2, Setval2] = useState(0);
    const Clicked1 = ()=>{
        Setval1(val1+1);
    };
    const Clicked2 = ()=>{
        Setval2(val2+1);
    };
    // alert is happened at frist time, when page is render, after it can't happen (becz, you pass empty array).
    // when you clicked any buttons then alert can't happen.
    useEffect(()=>{
        alert('I am Clicked');
    }, []); // If present, effect will only activate if the values in the list change.
    return(
        <>
            <button onClick={Clicked1}>Click Me  {val1}</button>
            <button onClick={Clicked2}>Click Me  {val2}</button>
        </>
    );
};
export default App;