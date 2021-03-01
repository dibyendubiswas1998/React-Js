import React from 'react';
import Headline from './Headline';
import Paragraph from './Paragraph';
import List from './List';

/* Consider Headline, Paragraph, List all are component
   and, all components are in a single platform.
 */


function App(){
    return(
        <>
            <Headline/>
            <Paragraph/>
            <List/>
        </>
    )
}
export default App;