import React, { Component } from 'react';
import './CategoryDescription.css';

export default class CategoryDescription extends Component {
    
  render() {
    const { name, description, url, correctImg, incorrectImg} = this.props.selectedCat
    
    return (
      <div className='description-card'>
        <h3 className='card-name'>{name}</h3>
        <p className='card-description'>{description}</p>
        <p>This is how not to do it:</p>
        <img className='category-image' src={incorrectImg}/>
        <p>This is the proper way to do it:</p>
        <img className='category-image' src={correctImg}/>
        <p>Link for more info:</p>
        <a href={url}>{url}</a>
        <button className='return-button' onClick={this.props.toggle}>Finished</button>
      </div>
    )
  }
}
