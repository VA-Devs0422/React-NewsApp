import React from 'react'
import './Card.css'

function Card({title,description,urlToImage}) {
  return (
    <>

   <div className='Card'>
      <img src={urlToImage} alt="This is image Section" />
      <div className="title"><h3>{title}</h3></div>
      <div className="description"><p>{description}</p></div>
    </div>
   
    
    
    </>
    
  )
}

export default Card
