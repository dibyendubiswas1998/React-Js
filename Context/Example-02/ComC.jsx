import React from 'react';
import { Fristname, Lastname } from './App';

const ComC =()=>{
    return(
        <>
            <Fristname.Consumer>
                {(fname) => {
                    return(
                        <Lastname.Consumer>
                            {(lname) =>{
                                return(
                                    <h1>My name is: {fname} {lname}</h1>
                                )
                            }}
                        </Lastname.Consumer>
                    );
                }}
            </Fristname.Consumer>
        </>
    );
};
export default ComC;
