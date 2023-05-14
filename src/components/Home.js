import React from 'react'
import Header from './Header'
import Cards from './Cards'

const Home = (props) => {
  return (
    <div className='min-h-2'>
      <Header 
      name="Shahid Akhter" 
      skillName="Frontend Web Developer" 
      description="I'm a frontend web developer can build websites with HTML, CSS & JS and most popular library of JavaScript called ReactJS and working on BootrapCSS and TailwindCSS." 
      />
      <Cards updateView={props.updateView}/>
    </div>
  )
}

export default Home
