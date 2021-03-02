import React, {useState} from 'react';

const App = () =>{
    let time = new Date().toLocaleTimeString();
    const [val, setval] = useState(time);
    const NumInc = ()=>{
        let Ctime = new Date().toLocaleTimeString();
        setval(Ctime);
    }
    return(
        <React.Fragment>
            <h1>{val}</h1>
            <br/>
            <button onClick={NumInc}>Click Me</button>
        </React.Fragment>
    );
};
export default App;