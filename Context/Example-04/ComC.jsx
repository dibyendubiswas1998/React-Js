import React, { useContext } from 'react';
import { Fristname, Lastname } from './App';


const ComC =()=>{
    const fname = useContext(Fristname);
    const lname = useContext(Lastname);
    return(
        <>  
            <h1>Name: {fname} {lname}</h1>            
        </>
    );
};
export default ComC;
