import React, {useState} from 'react';
import './index.css';

// When You submit the form then something is happened (using form tag and multiple input)....
const App = () =>{
    const [val, Setval] = useState({
        fname: "",
        phone: "",
        email: "",
        address: "",
    });
    const [fullval, Setfullval] = useState({
        ffname: "",
        fphone: "",
        femail: "",
        faddress: "",
    });
    const InputEvents = (event)=>{
        const {name, value} = event.target;
        // console.log(name);
        // console.log(value); 

        Setval((preval)=>{
            if(name === 'fname'){
                return{
                    fname: value,
                    phone: preval.phone,
                    email: preval.email,
                    address: preval.address,
                }
            }
            else if(name === 'phone'){
                return{
                    fname: preval.fname,
                    phone: value,
                    email: preval.email,
                    address: preval.address,
                }
            }
            else if(name === 'email'){
                return{
                    fname: preval.fname,
                    phone: preval.phone,
                    email: value,
                    address: preval.address,
                }
            }
            else if(name === 'address'){
                return{
                    fname: preval.fname,
                    phone: preval.phone,
                    email: preval.email,
                    address: value,
                }
            }

        });
    }
    const onSubmit = (event)=>{
        event.preventDefault();
        Setfullval({
            ffname: val.fname,
            fphone: val.phone,
            femail: val.email,
            faddress: val.address,
        });
        // After Submit the form, the input segment is now blank..
        Setval({
            fname: "",
            phone: "",
            email: "",
            address: "",
        });
    }
    return(
        <div className='div'>
            <form name='form' onSubmit={onSubmit}>
                <div className='frm'>
                    <input type='text' placeholder='Enter your name' value={val.fname} name='fname' onChange={InputEvents}/>
                    <input type='text' placeholder='Enter your phone' value={val.phone} name="phone" onChange={InputEvents}/>
                    <input type='text' placeholder='Enter your email' value={val.email} name="email" onChange={InputEvents}/>
                    <input type='text' placeholder='Enter your address' value={val.address} name='address' onChange={InputEvents}/>
                    <button type='submit'>Submited</button>
                </div>
            </form>
            <div className='values'>
                <h1>Name: <span>{fullval.ffname}</span></h1>
                <h1>Phone: <span>{fullval.fphone}</span></h1>
                <h1>Email: <span>{fullval.femail}</span></h1>
                <h1>Address: <span>{fullval.faddress}</span></h1>
            </div>
        </div>
    );
};
export default App;