import React from 'react';

// useParams:--
import { useParams } from 'react-router-dom';
const User = ()=>{
    const {fname, lname} = useParams();
    return(
        <h1>This is {fname} {lname}</h1>
    )
};
export default User;