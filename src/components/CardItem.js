import React from 'react'
import { Link } from 'react-router-dom'
import '../css/CardItem.css';
// import View from './View'
import { projectsArray } from '../JSONArray/projectsArr'


const CardItem = (props) => {
  let maxLength = 100;
  const replaceInStr = (str, replacingText, replaceWith) => {
    return str.replace(replacingText, replaceWith);
  }
  return (
    <div className='cards bg-3 text-justify'>
      <img src={props.img} className="cardImg" alt='CardImg' />
      <div className="m-0">
        <div className="title font-bold text-pink">{props.title}</div>
        <div className="category font-bold text-color-2">{props.category}</div>
        <div className="description h-7">
          {props.description.length > maxLength ? <div>{props.description.slice(0, maxLength)}...<Link className="links ml-0" to="/view"><span className='font-bold ml-0 links text-pink cursor-pointer' onClick={()=>{props.updateView(props.index)}}>Read More</span></Link></div> : props.description}
        </div>
        <div className="btns btns-1">
          {/* <Link className="links ml-0" to="/Readmore"><button className='bg text-white linkBtns linkBtn1 ml-0'>Read More</button></Link> */}
          <Link className="links ml-0" to={`/Projects/${replaceInStr(projectsArray[props.index].title, /\s+/g, "_")}_${props.index+1}`}>
            <button className='bg text-white linkBtns linkBtn1 ml-0' onClick={()=>{props.updateView(props.index)}}>View</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardItem
