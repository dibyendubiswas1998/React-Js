import React from 'react';
import { Fristname } from './App';

const ComC =()=>{
    return(
        <>
            <Fristname.Consumer>
                {(fname) => {
                    return(
                        <h1>My Frist Name is: {fname}</h1>
                    );
                }}
            </Fristname.Consumer>
        </>
    );
};
export default ComC;
