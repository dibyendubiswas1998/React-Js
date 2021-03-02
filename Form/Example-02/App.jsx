import React, {useState} from 'react';
import './index.css';

// When You clicked on button then something is happened.
const App = () =>{
    const [name, Setname] = useState(""); // For Name
    const [phone, Setphone] = useState(""); // For Email

    const [fullname, Setfullname] = useState(""); // For Full Name
    const [fullphone, Setfullphone] = useState(""); // For Full Phone

    const InpEvent1 = (event)=>{
        Setname(event.target.value);
        // console.log(event.target.value);
    };
    const InpEvent2 = (event)=>{
        Setphone(event.target.value);
        // console.log(event.target.value);
    };

    // When I clicked on button then all values are showing...
    const Clicked = ()=>{
        Setfullname(name);
        Setfullphone(phone);

        // for blank input segment
        Setname("");
        Setphone("");
    }
    return(
        <div className='div'>
            <div className='frm'>
                <input type='text' placeholder='Enter your name' value={name} onChange={InpEvent1}/>
                <input type='text' placeholder='Enter your phone' value={phone} onChange={InpEvent2}/>
                <button onClick={Clicked}>Clicked Me</button>
            </div>
            <div className='values'>
                <h1>Name: <span>{fullname}</span></h1>
                <h1>Phone: <span>{fullphone}</span></h1>
            </div>
        </div>
    );
};
export default App;