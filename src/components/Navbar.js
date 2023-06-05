import React from 'react'
import { useRef, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import '../css/Navbar.css';
import navThreeBars from '../assets/imgs/bars-solid.svg'

const Navbar = (props) => {
    const ref=useRef()
    const location = useLocation();
    useEffect(() => {
        ref.current.classList.add("displayItemsSmScreenNav")
    }, [location]);

    const toggleClick=()=>{
        ref.current.classList.toggle("displayItemsSmScreenNav")
    }
    return (
        <nav className='margin-b-2 posSticky'>
            <div className='flex f-center f-between NavFooter border-bottom padding-0'>
                <div className='flex f-center f-between f-wrap NavFooter'>
                    <Link className="nameLink text-pink" onClick={toggleClick} to="/"><div className="name text-pink">{props.name}</div></Link>
                </div>
                <div className='flex f-center f-around f-wrap NavFooter'>
                    <div className="text-pink flex f-wrap f-center displayItemsBigScreen">
                        <Link className="links" to="/">Home</Link>
                        <Link className="links" to="/Projects">Projects</Link>
                        <Link className="links" to="/About">About</Link>
                        <Link className="links" to="/Contact">Contact</Link>
                    </div>
                    <div className='flex f-wrap f-center f-wrap displayItemsSmScreen cursor-pointer'>
                        <img src={navThreeBars} onClick={toggleClick} className='h-5' alt="logo" />
                    </div>
                </div>
            </div>
            <div ref={ref} className="mobileNav text-pink padding-1 flex f-wrap f-center f-col bg-3 border-bottom posRelative-1 w-100Per displayItemsSmScreenNav">
                <Link className="links" onClick={toggleClick} to="/">Home</Link>
                <Link className="links" onClick={toggleClick} to="/Projects">Projects</Link>
                <Link className="links" onClick={toggleClick} to="/About">About</Link>
                <Link className="links" onClick={toggleClick} to="/Contact">Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar
