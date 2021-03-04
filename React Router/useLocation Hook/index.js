import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// useLocation Hooks in React Router:---
/*
    The useLocation hook returns the location object that represents the current URL. 
    You can think about it like a useState that returns a new location whenever the URL changes.

    Many modern websites are actually made up of a single page, they just look like 
    multiple pages because they contain components which render like separate pages. 
    These are usually referred to as SPAs - single-page applications. At its core, 
    what React Router does is conditionally render certain components to display 
    depending on the route being used in the URL (/ for the home page, /about for 
    the about page, etc.).



    step-1: Go to google and search "react router dom npm".
    step-2: Go to particuler project file where you work.
    step-3: install the react-router-dom by "npm install --save react-router-dom"
            go to "package.json" file, here you will see the react-router-dom version
            like this:  "react-router-dom": "^5.2.0",
    step-4: then start work and further start npm "npm start".
    step-5: Import BrowserRouter, Route, Switch 'from react-router-dom'.
    step-6: Import NavLink 'from react-router-dom'.


*/
import { BrowserRouter} from 'react-router-dom';



ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>, 
    document.getElementById('root')
);
