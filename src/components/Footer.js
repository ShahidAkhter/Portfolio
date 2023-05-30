import React from 'react'
import { Link } from "react-router-dom";
import logo from '../logo.jpg'
import githubLogo from '../assets/imgs/github.svg'

const Footer = (props) => {
    return (
        <footer className='NavFooter flex f-center f-around f-wrap border-top'>
            <div className="flex f-center">
                <img src={logo} className='img-logo' alt="logo" />
            <div className="name text-pink nameDisplayNone">{props.name}</div>
            </div>
            <div className="text-pink">
                <Link className="text-pink" to="https://github.com/ShahidAkhter" target='_blank'><img src={githubLogo} className='h-5' alt="logo" /></Link>
            </div>
        </footer>
    )
}

export default Footer
