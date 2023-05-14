import React from 'react'
import { Link } from "react-router-dom";
import logo from '../logo.jpg'

const Footer = (props) => {
    return (
        <footer className='NavFooter flex f-center f-around f-wrap border-top'>
            <div className="flex f-center">
                <img src={logo} className='img-logo' alt="logo" />
            <div className="name text-size-1 text-pink">{props.name}</div>
            </div>
            <div className="text-pink">
                <Link className="links text-pink" to="https://github.com/ShahidAkhter" target='_blank'>Github</Link>
            </div>
        </footer>
    )
}

export default Footer
