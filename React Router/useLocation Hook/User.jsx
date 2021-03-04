import React from 'react';

// useParams:--
import { useParams, useLocation } from 'react-router-dom';

const User = ()=>{
    const {fname, lname} = useParams();
    const location = useLocation();
    const ShowLocation = () =>{
        document.getElementById('loc').innerHTML = location.pathname;
    }
    return(
        <>
            <h1>This is {fname} {lname}</h1>
            {/* <h2>Location is: {location.pathname}</h2> */}

            {location.pathname === `/user/Arko/Biswas` ? (
                <button onClick={ShowLocation}>Click Me</button>
            ) : null}
            {/* When I clicked the button then location is showing */}
            <p id='loc'></p>
        </>
    )
};
export default User;