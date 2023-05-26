import React from 'react'
import CardItem from './CardItem'
// import View from './View'
// import logo from '../logo.jpg'
import { projectsArray } from '../JSONArray/projectsArr'


const Cards = (props) => {
  return (
    <div className='margin-b-2'>
      <div className="cardsTitle text-center margin-y font-bolder text-pink text-size-3 margin-y-1">Latest Projects</div>

      <div className='flex f-center f-wrap'>
        {projectsArray && projectsArray.map((element, i) => {
          // props.updateProgress(0+(projectsArray.length*100))
          return i<3 && <CardItem img={element.image} title={element.title} category={element.category} metaDescription={element.metaDescription} index={i} key={i} updateView={props.updateView}/>
        })}

      </div>
    </div>
  )
}

export default Cards
