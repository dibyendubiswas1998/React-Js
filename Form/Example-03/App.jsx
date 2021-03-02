import React, {useState} from 'react';
import './index.css';

// When You submit the form then something is happened (using form tag)....
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
    const onSubmit = (event)=>{
        event.preventDefault();
        Setfullname(name);
        Setfullphone(phone);

        // for blank input segment
        Setname("");
        Setphone("");
    }
    return(
        <div className='div'>
            <form name='form' onSubmit={onSubmit}>
                <div className='frm'>
                    <input type='text' placeholder='Enter your name' value={name} onChange={InpEvent1}/>
                    <input type='text' placeholder='Enter your phone' value={phone} onChange={InpEvent2}/>
                    <button type='submit'>Submited</button>
                </div>
            </form>
            <div className='values'>
                <h1>Name: <span>{fullname}</span></h1>
                <h1>Phone: <span>{fullphone}</span></h1>
            </div>
        </div>
    );
};
export default App;