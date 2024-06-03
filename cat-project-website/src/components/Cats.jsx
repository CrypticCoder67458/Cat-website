import React from 'react'
import '../styles.css'
export function Cats ({cats})  {
  return (
    <>
      <h2>Cats for you:</h2>
      <div className='cats-container'>
        <div className='cats-container--cards'>
        {cats.map((cat)=>
          <div key={cat.id} className='cat-card'>
              <img src={cat.url} className='cat-card--img'/>
          </div>)}
        </div>
      </div>
      
        
    </>
  )
}
