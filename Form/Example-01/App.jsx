import React, {useState} from 'react';
import './index.css';

const App = () =>{
    const [name, Setname] = useState("");
    const [phone, Setphone] = useState("");
    const InpEvent1 = (event)=>{
        Setname(event.target.value);
        // console.log(event.target.value);
    };
    const InpEvent2 = (event)=>{
        Setphone(event.target.value);
        // console.log(event.target.value);
    };

    return(
        <div className='div'>
            <div className='frm'>
                <input type='text' placeholder='Enter your name' value={name} onChange={InpEvent1}/>
                <input type='text' placeholder='Enter your phone' value={phone} onChange={InpEvent2}/>
                
            </div>
            <div className='values'>
                <h1>Name: <span>{name}</span></h1>
                <h1>Phone: <span>{phone}</span></h1>
            </div>
        </div>
    );
};
export default App;