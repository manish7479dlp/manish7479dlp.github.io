import React from 'react';
import { NavLink } from 'react-router-dom';
import ToggleImage from './toggle.png'

const Menu = () =>{
    return (
        <>
           <div className="label">
                <label htmlFor="toggle">
                <img src = {ToggleImage} alt="toggleImage" />
            </label>
           </div>
           <input type="checkbox" id = "toggle" />
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