import React, { useRef, useState } from 'react';
import './index.css';

const App = () =>{
    // Uncontrolled Event

    const fname = useRef(null);
    const [show, setShow] = useState(false);
    const SubmitForm =(event)=>{
        event.preventDefault();
        // console.log(fname);
        // console.log(fname.current);
        // console.log(fname.current.value);
        const name = fname.current.value;
        name === "" ? alert("Fill your name") : setShow(true);
    }
    
    return(
        <>
            <h2>Uncontrolled Events</h2>
            <form action="" onSubmit={SubmitForm}>
                <input type="text" id="fname" placeholder="Frist Name" ref={fname} />
                <button type="submit">Submit Form</button>
            </form>
            <br/>

            <p>{show ? `name is: ${fname.current.value}` : ""}</p>
        </>
    );
}
export default App;