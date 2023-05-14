import React from 'react'
import CardItem from './CardItem'
import { projectsArray } from '../JSONArray/projectsArr'

const Projects = (props) => {
    return (
        <div className="min-h-2">
            <div className='flex f-center f-wrap'>
                {projectsArray && projectsArray.map((element, i) => {
                    // props.updateProgress(0+(projectsArray.length*100))
                    return <CardItem img={element.image} title={element.title} category={element.category} description={element.description} index={i} key={i} updateView={props.updateView} />
                })}
            </div>
        </div>
    )
}

export default Projects
