import React from 'react'
import CardItem from './CardItem'
import { projectsArray } from '../JSONArray/projectsArr'

const Projects = (props) => {
    return (
        <div className='w-auto'>
            <div className='text-right w-93-per'>
                <select className="categoryType border-1 border-radius text-size-4">
                    <option value="Web App">All</option>
                    <option value="Web App">Web App</option>
                </select>
            </div>
            <div className="min-h-2">
                <div className='flex f-center f-wrap margin-t'>
                    {projectsArray && projectsArray.map((element, i) => {
                        // props.updateProgress(0+(projectsArray.length*100))
                        return <CardItem img={element.image} title={element.title} category={element.category} description={element.description} index={i} key={i} updateView={props.updateView} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects
