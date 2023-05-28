import React from 'react'
import logo from '../logo.jpg'
import '../css/Header.css';
import { Link } from 'react-router-dom'; 
import TypedText from './TypedText';

const Header = (props) => {
  const typedStrings = ['Shahid Akhter', 'Dilwar II'];
  return (
    <div className='flex f-center f-around text-justify header pb-1'>
      <div className="info">
        <div className="skillName text-color-2 font-bold">{props.skillName}</div>
        <div className="name text-pink ml-0"><TypedText strings={typedStrings} /></div>
        <div className="desc w-1 text-size-1">{props.description}</div>
        <div className="btns">
          <Link className="links ml-0" to="/Projects"><button className='bg text-white linkBtns ml-0'>Projects</button></Link>
          <Link className="links ml-0" to="/About"><button className='bg text-white linkBtns ml-0'>About</button></Link>
        </div>
      </div>
      <div className="image">
        <img src={logo} className='logoImg' alt="logo" />
      </div>
    </div>
  )
}

export default Header
