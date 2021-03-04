import React from 'react';
//  Import Route, Switch 'from react-router-dom'
import {Route, Switch} from 'react-router-dom';
// import all pages (Home, About, Services, etc.)

import Home from './Home';
import Blog from './Blog';
import About from './About';
import Services from './Services';
// For Error page
import Error from './Error';

const App = () =>{
    return(
        <>
            <Switch>
                {/* 
                    "path" mean --> where u want to visit &&
                    "component" mean --> exactly this particular page/component.
                    "exact" mean --> exactly this paage, otherwise show error.
                */}
                <Route exact path='/' component={Home} /> {/* By Default this is home page or main or opening page, when path='/' */}
                <Route exact path='/about' component={About} /> 
                <Route exact path='/blog' component={Blog} /> 
                <Route exact path='/services' component={Services} /> 

                {/* 
                    When you have no page then show that this is error page, means
                    you have Home, Blog, About, Services pages. But user try to search another page
                    which is actually not exits in your system. Then it's showing error that this page
                    is not found.
                */}
                <Route component={Error} />
            </Switch>

        </>
    )
};
export default App;