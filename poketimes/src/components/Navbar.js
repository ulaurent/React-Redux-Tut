import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom'

//Navarbar for top of webpage
const Navbar =(props)=>{
    // setTimeout(()=> {
    //     props.history.push('/about')
    // }, 8000);
    return(
         <nav className="nav-wrapper red darken-3">
             <div className="container">
                 <a className="brand-logo">Poke'Times</a>
                 <ul className ="right">
                     <li><Link to="/home">Home</Link></li>
                     <li><NavLink to="/about">About</NavLink></li>
                     <li><NavLink to="/contact">Contact</NavLink></li>
                 </ul>
             </div>
         </nav>
    )
}

export default withRouter(Navbar) 