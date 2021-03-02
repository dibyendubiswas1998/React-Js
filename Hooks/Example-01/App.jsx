import React, {useState} from 'react';

const App = () =>{
    const [val, setval] = useState(0);
    const NumInc = ()=>{
        setval(val+1);
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