import React from 'react'
import '../css/About.css'
import { Link } from 'react-router-dom'

const About = (props) => {
    return (
        <div className='flex f-center f-top'>
            <div className="w-4">
                <div className="flex f-center padding-1">
                    <img src={props.img} className='ImageStyle marginImg' alt="logo" />
                </div>
                <div className='flex f-center'>
                    <div className="info flex f-center f-col">
                        <div className="skillName text-color-2 font-bold">{props.skillName}</div>
                        <div className="name text-pink ml-0">{props.name}</div>
                        <div className="nameByFatherName font-bold text-pink ml-0 text-color-2 text-size-4">{props.nameByFatherName}</div>

                        {/* <div className="desc text-size-1 text-center">{props.description}</div> */}
                    </div>
                </div>
                <div className='text-justify margin-b-2'>
                    <p className='font-bold text-color-2 text-size-4'>Introduction</p>

                    <p><span size="3">I&rsquo;m Shahid Akhter from Himachal Pradesh, India. I&rsquo;m a Frontend Web Developer working on <strong>HTML</strong>, <strong>CSS</strong> &amp; <strong>JavaScript</strong> and most recommended library of JavaScript called <strong>ReactJS</strong>.</span></p>
                    <p><span size="3">Working init , 2 years, make me better than yesterday.&nbsp;</span></p>

                    <p className='font-bold text-color-2 text-size-4'>My Projects</p>

                    <p className='font-bold text-color-2'>Typing Test:</p>
                    <p>Typing Websites make us an better Typist. For working on years on my typing I realize should make my own typing test for typing and important is whole control of website in own hand. That is why, most of the coders build there own product for customization. In my Typing Test I&rsquo;ve added a <strong>reset button</strong> with useful and <strong>productivity increasing functionality</strong> added is that we can save our work until the site not reloaded after reload it will cleared whole content what after working own typing we can print/save it which should be send to teachers or instructors or anybody else to show that you are working on your typing.</p>
                    <p>For more about this project visit <Link className="text-pink font-bold" to="/Projects/Typing_Test_1">here</Link></p>

                    <p className='font-bold text-color-2'>Bingo:</p>
                    <p>Bingo is a game mostly played on your traditional books/copies mainly played by two players. In this game, there is a grid mostly 5x5, in it player should have to put random numbers from 1 to the no. of grid of your choice to where should put that no. in a particular cell which can be seen in below image.</p>
                    <p>For more about this project visit <Link className="text-pink font-bold" to="/Projects/Bingo_2">here</Link></p>
                    <p>For more awesome projects visit <Link className="text-pink font-bold" to="/Projects">here</Link></p>

                    <p className='font-bold text-color-2 text-size-4'>Solving problems as a coder:</p>
                    <p><span size="3">Working for many years in code I realized that I can solve my problems as a coder.&nbsp;</span></p>

                    <p>Like making websites called MyLinks for all works or fun at same site. I make because, unfortunately, forget the name of websites make us difficult to recall or remember.</p>

                    <p>In Typing Test adding reset with saving data until the website reload and printing option make easy to show anybody want to check your progress in typing.</p>
                    <p>Making Captioner, it is easy to add, delete, edit or update captions and copy as JSON make easy to add in myPodcasts website.</p>
                    <p>Got ideas? Suggestions? Or feedback? Hit me up! <Link className="text-pink font-bold" to="/Contact">here</Link></p>
                </div>
            </div>
        </div>
    )
}

export default About
