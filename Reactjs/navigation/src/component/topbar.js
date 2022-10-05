import React from 'react';
import {NavLink} from 'react-router-dom';


//Link, useMatch, useResolvedPath, 
export default function TopBar() {
    return(
    <div class="topnav">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink> 
    </div>

    )

}
