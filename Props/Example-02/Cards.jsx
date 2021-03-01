import React from 'react';

function Card(props){
    // you can pass any argument in this functions.
    return(
        <>  
            <div className='div'>
                <img src={props.imgsrc} alt={props.altname}/>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </>
    );
};
export default Card;
