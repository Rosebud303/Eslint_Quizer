import React, { Component } from 'react'

export default class CategoryDescription extends Component {
    constructor(props) {
        super(props);
        
    }
    
  render() {
    const { name, description, url, correctImg, incorrectImg} = this.props.selectedCat
    return (
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <a href={url}>{url}</a>
        <img src={require(incorrectImg)}/>
      </div>
    )
  }
}
