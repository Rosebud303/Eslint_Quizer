import React, { Component } from 'react';
import './CategoryDescription.css';
// import Img from 'react-image'

export default class CategoryDescription extends Component {
    constructor(props) {
        super(props);
        
    }
    
  render() {
    const { name, description, url, correctImg, incorrectImg} = this.props.selectedCat
    console.log(incorrectImg)
    return (
      <div className='description-card'>
        <h3 className='card-name'>{name}</h3>
        <p className='card-description'>{description}</p>
        <a href={url}>{url}</a>
        <img src={incorrectImg}/>
        <button onClick={this.props.toggle}>Finished</button>
      </div>
    )
  }
}
