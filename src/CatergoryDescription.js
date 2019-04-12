import React, { Component } from 'react'

export default class CatergoryDescription extends Component {
    constructor(props) {
        super(props);
        
    }
    
  render() {
    return (
      <div>
        <h3>{this.props.selectedCat.name}</h3>
        <p>{this.props.selectedCat.description}</p>
      </div>
    )
  }
}
