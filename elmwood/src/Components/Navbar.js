import React from 'react';
import {Link, NavLink} from 'react-router-dom'

// Since it is not a class we do not need a state or a render
// just functions and returns

const NavBar = () =>{
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Elwood Avenue COG</a>
                <ul className="right">
                    <li><Link to="/home">Home</Link></li>
                    <li><NavLink to="/about">About Us</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar