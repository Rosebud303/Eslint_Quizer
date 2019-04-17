import React, { Component } from 'react';
import WrongItem from './WrongItem.js';
import './WrongContainer.css';

export default class WrongContainer extends Component {
  constructor(props) {
    super(props);

  }

  
  render() {
    const { questions, incorrects, toggle } = this.props
    const getIncorrectObj = questions.filter(question => (incorrects.includes(question.id)));
    const displayWrong = getIncorrectObj.map(question => {
      return <WrongItem {...question} />
    })
    return (
      <div className='wrong-container'>
        <h2>Missed items...</h2>
        {displayWrong}
        <button className='show-wrong-button' onClick={toggle}>Finished</button>
      </div>
    )
  }
}
