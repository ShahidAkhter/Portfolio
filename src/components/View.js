import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { projectsArray } from '../JSONArray/projectsArr'
import githubLogo from '../assets/imgs/github.svg'


const View = (props) => {
    let key = props.index;
    // eslint-disable-next-line
    // const [image, setImage] = useState(projectsArray[key].image)
    // eslint-disable-next-line
    const [title, setTitle] = useState(projectsArray[key].title)
    // eslint-disable-next-line
    const [category, setCategory] = useState(projectsArray[key].category)
    // eslint-disable-next-line
    const [metaDescription, setMetaDescription] = useState(projectsArray[key].metaDescription)
    // eslint-disable-next-line
    const [DetailedDescription, setDetailedDescription] = useState(projectsArray[key].detailedDescription)
    // eslint-disable-next-line
    const [GitHubVisit, setGitHubVisit] = useState(projectsArray[key].gitHubURL)
    // eslint-disable-next-line
    const [visit, setVisit] = useState(projectsArray[key].visitURL)

    const createMarkup = () => {
        return { __html: DetailedDescription };
    }

    return (
        <div className='view min-h-2'>
            <div className='flex f-center f-between f-wrap f-col'>
                <div className="w-4 flex f-center f-between margin-x margin-b">
                    <div className="flex f-col">
                        <div className="text-size-3 font-bold text-pink margin-x">{title}</div>
                        <div className="category font-bold text-size-4 text-color-2 margin-x margin-b">{category}</div>
                    </div>
                    <div className="flex f-center">
                        {GitHubVisit === "" ? "" : <Link className="text-pink flex f-center" to={GitHubVisit} target='_blank'>
                            <button className="gitHubLink flex f-center"><img src={githubLogo} className='h-5' alt="logo" /></button>
                        </Link>}
                        <Link className="" to={visit} target='_blank'>
                            <button className='bg text-white linkBtns linkBtn1'>Visit</button>
                        </Link>
                    </div>
                </div>
                <div className="Viewinfo px-0 text-left w-4  margin-x margin-y">
                    <div className="description text-justify text-size-4 margin-x">
                        {metaDescription}
                    </div>
                </div>
                {/* <div className='text-center'><img src={image} className="border-radius h-4" alt='ViewImg' /></div> */}
                <div className="Viewinfo px-0 text-left w-4  margin-x margin-y">
                    <div className="description text-justify text-size-4 margin-x margin-y">
                        <div dangerouslySetInnerHTML={createMarkup()} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View
