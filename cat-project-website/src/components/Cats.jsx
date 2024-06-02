import React from 'react'

export function Cats ({cats})  {
    console.log(cats)
  return (
    <div>
        {cats.map((cat)=><div key={cat.id}>
            <img src={cat.url}/>
        </div>)}
    </div>
  )
}
