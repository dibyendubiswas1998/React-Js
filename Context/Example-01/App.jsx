import React, { createContext } from 'react';
import ComA from './ComA';


// In a typical React application, data is passed top-down (parent to child, App-->ComA-->ComB-->ComC)
// via props, but such usage can be cumbersome for certain types of props 
// (e.g. locale preference, UI theme) that are required by many components within an application. 
// Context provides a way to share values like these between components without having to 
// explicitly pass a prop through every level of the tree (App-->ComC or App-->any component).


const Fristname = createContext();

const App = ()=>{
    
    return (
        <>
            <Fristname.Provider value={'Dibyendu'}>
                <ComA/>
            </Fristname.Provider>
        </>
    );
}
export default App;
export { Fristname };
