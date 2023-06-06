import React from 'react'
import Header from './Header'
import Cards from './Cards'

const Home = (props) => {
  return (
    <div className='min-h-2'>
      <Header
        name={props.name}
        nameByFatherName={props.nameByFatherName}
        skillName={props.skillName}
        description={props.description}
      />
      <Cards updateView={props.updateView} />
    </div>
  )
}

export default Home