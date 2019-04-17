import React from 'react'

export default function WrongItem({name, answer, id}) {
  return (
    <div key={answer}>
      <h2>{name}</h2>
      <p>This is the correct way to perform question :{id}</p>
      <img src={answer}/>
    </div>
  )
}
