import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () =>{
    return (
        <>
         
            <nav>
                <NavLink className= "navLink" activeClassName='active' to = "/">Home</NavLink>
                <NavLink className= "navLink" activeClassName='active'to = "/skills">Skills</NavLink>
                <NavLink className= "navLink" activeClassName='active'to= '/project'>Projects</NavLink>  
                <NavLink className= "navLink" activeClassName='active'to = "/contact">Contacts</NavLink>
            </nav>
        </>
    )
}

export default Menu;