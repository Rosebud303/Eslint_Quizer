import React from 'react'

export default function Quiz(prop) {
  return (
    <div>
      <h1>{prop.current.name}</h1>
      <h2>{prop.current.id}</h2>
    </div>
  )
}
