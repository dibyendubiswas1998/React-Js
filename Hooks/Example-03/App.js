import React, { useState } from 'react';
import './index.css';

const App = () =>{
    const all_Data = [
        { 
            id: 1, 
            name: 'Dibyendu',
            age: 21,
        },
        { 
            id: 2, 
            name: 'Arko',
            age: 22,
        },
        { 
            id: 3, 
            name: 'Shyam',
            age: 23,
        },
        { 
            id: 4, 
            name: 'Ronit',
            age: 21,
        },

    ]
    const [Data, setData] = useState(all_Data);

    const RemoveElement = (id) =>{
        // alert(id);
        const newData = Data.filter((curElement) =>{
            return curElement.id !== id;
        })
        setData(newData);
    }
    // console.log(Data);
    return(
        <>
            {
                Data.map((element)=> {
                    return (
                        <div className="div_ele" key={element.id}>
                            <p>{`Name: ${element.name} ----- Age: ${element.age}`}</p>
                            <button onClick={()=>RemoveElement(element.id)}>Remove</button>
                        </div>
                    );
                })
            }

        </>
    );
}
export default App;