import React from 'react';
import { NavLink } from 'react-router-dom';

const NavHeader = ({match}) => (
    <header>
        <ul>
            <li><NavLink to="/posts">Home</NavLink></li>
            <li><NavLink to="/posts/new">New Post</NavLink></li>
        </ul>    
    </header>
);

export default NavHeader;