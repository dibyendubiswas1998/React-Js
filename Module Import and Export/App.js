import React from 'react';

const Fullname = "Dibyendu kr Biswas";
function fname(){
    const fname = "Dibyendu";
    return(
        <>
            <p>My Frist Name is {fname}</p>
        </>
    )
};

function mname(){
    const mname = 'Kumar';
    return(
        <>
            <p>My Middle Name is {mname}</p>
        </>
    )
};

function lname(){
    const lname = 'Biswas';
    return(
        <>
            <p>My Last Name is {lname}</p>
        </>
    )
};

// default value/method export, like this
export default Fullname;

// Multiple value/method export, like this
export {fname, mname, lname};