import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { projectsArray } from '../JSONArray/projectsArr'


const View = (props) => {
    let key = props.index;
    // eslint-disable-next-line
    const [image, setImage] = useState(projectsArray[key].image)
    // eslint-disable-next-line
    const [title, setTitle] = useState(projectsArray[key].title)
    // eslint-disable-next-line
    const [category, setCategory] = useState(projectsArray[key].category)
    // eslint-disable-next-line
    const [metaDescription, setMetaDescription] = useState(projectsArray[key].metaDescription)
    // eslint-disable-next-line
    const [DetailedDescription, setDetailedDescription] = useState(projectsArray[key].detailedDescription)
    // eslint-disable-next-line
    const [visit, setVisit] = useState(projectsArray[key].visitURL)



    return (
        <div className='view min-h-2'>
            <div className='flex f-center f-between f-wrap f-col'>
                <div className="w-4 flex f-center f-between margin-x margin-b">
                    <div className="flex f-col">
                        <div className="text-size-3 font-bold text-pink margin-x">{title}</div>
                        <div className="category font-bold text-size-4 text-color-2 margin-x margin-b">{category}</div>
                    </div>
                    <div>
                        <Link className="links ml-0" to={visit} target='_blank'>
                            <button className='bg text-white linkBtns linkBtn1 ml-0'>Visit</button>
                        </Link>
                    </div>
                </div>
                <div className="Viewinfo px-0 text-left w-4  margin-x margin-y">
                    <div className="description text-justify margin-x">
                        {metaDescription}
                    </div>
                </div>
                <div className='text-center'><img src={image} className="border-1 border-radius w-4 h-4" alt='ViewImg' /></div>
                <div className="Viewinfo px-0 text-left w-4  margin-x margin-y">
                    <div className="description text-justify margin-x">
                        {DetailedDescription}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View
