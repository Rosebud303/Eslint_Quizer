import React from 'react';
import './Quiz.css'

export default function Quiz(prop) {
  return (
    <div>
      <h2 className='quiz-title'>Choose a rule!</h2>
      <img className='quiz-image' src={prop.current.quiz}/>
    </div>
  )
}
