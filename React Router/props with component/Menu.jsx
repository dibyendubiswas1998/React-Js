import React from 'react';
// import NavLink so that we create a menu bar.
import { NavLink} from 'react-router-dom';

// import css for styling
import './index.css';


const Menu = ()=>{
    return(
        <div className='div'>   
            <NavLink exact activeClassName='active' to='/'>Home</NavLink>
            <NavLink exact activeClassName='active' to='/About'>About</NavLink>
            <NavLink exact activeClassName='active' to='/Services'>Services</NavLink>
            <NavLink exact activeClassName='active' to='/Blog'>Blog</NavLink>
        </div>
    )
};
export default Menu;