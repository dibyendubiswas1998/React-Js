import React, { useReducer } from 'react';
import './index.css';

const App = () =>{
    const reducer = (state, actions) =>{
        // console.log(state, actions);
        if (actions.type === "Increment"){
            return state += 1;
        }
        if ( state >0){
            if (actions.type === "Decrement"){
                return state -= 1;
            }
        }
        return state;
    }
    // useReducer(takeFunction, initialState);
    const [state, dispatch] = useReducer(reducer, 0);

    return (
        <>
            <h3>{state}</h3>
            <button onClick={()=> dispatch({type: 'Increment'})}>Increment</button>
            <button onClick={()=> dispatch({type: 'Decrement'})}>Decrement</button>
        </>
    )
}
export default App;