import React from 'react';
import { NavLink, Link } from 'react-router-dom';


const NavHeader = () => (
    <header>
        <nav>
            <span className="nav-title"><Link to="/posts">Cat Board</Link></span>
            <ul className="nav nav-tabs">
                <li><NavLink exact role="presentation" to="/posts">Home</NavLink></li>
                <li><NavLink role="presentation" to="/posts/new">New Post</NavLink></li>
            </ul>    
        </nav>
    </header>
);

export default NavHeader;