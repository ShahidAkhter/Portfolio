import React from 'react'
import { Link } from 'react-router-dom'
import githubLogo from '../assets/imgs/github.svg'
import '../css/Contact.css'

const Contact = (props) => {
    return (
        <div className='flex f-center h-100 f-top pb-1'>
            <div className="w-4 h-4 pb-1">
                <div className="text-size-4 font-bold text-color-2 text-center">Got ideas? Suggestions? Or feedback? Hit me up!</div>
                <div className="flex f-center padding-1">
                    <img src={props.img} className='ImageStyle marginImg' alt="logo" />
                </div>
                <div className='flex f-center f-col'>
                    <div className="info flex f-center f-col pb-1">
                        <div className="skillName text-color-2 font-bold">{props.skillName}</div>
                        <div className="name text-pink ml-0">{props.name}</div>
                        <div className="desc text-size-1 text-center">{props.description}</div>
                    </div>
                    <div className="info flex f-left f-col">
                        <div className="email text-size-4 font-bold">Email Address</div>
                        <div className="email-address flex margin-t"><div className='font-bold'>Work:&nbsp;</div><div>shahidakhter5660@gmail.com</div></div>
                    </div>
                    <div className="btns">
                        <Link className="links text-pink" to="https://github.com/ShahidAkhter" target='_blank'><img src={githubLogo} className='h-7' alt="logo" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
