import React from 'react'
import { Link } from "react-router-dom";
import '../css/Navbar.css';

const Navbar = (props) => {
    return (
        <nav className='flex f-center f-around f-wrap margin-b-2 border-bottom NavFooter posSticky'>
            <Link className="links text-pink" to="/"><div className="name text-size-1 text-pink">{props.name}</div></Link>
            <div className="text-pink">
                <Link className="links text-pink" to="/">Home</Link>
                <Link className="links text-pink" to="/Projects">Projects</Link>
                <Link className="links text-pink" to="/About">About</Link>
                <Link className="links text-pink" to="/Contact">Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar
