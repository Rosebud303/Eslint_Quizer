import React, { Component } from 'react';
import CategoryDescription from './CategoryDescription.js';

export default class RuleLibrary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplayed: false,
            selectedCategory: {},
            currentCategory: ''
        }  
    }

    getCurrent = (e) => {
        this.setState({currentCategory: e.target.innerText}, () => {
            this.findSelected();
        });
        this.toggleDisplay();
    };

    findSelected = () => {
        let newSelect = this.props.catergories.find( category => {
            return category.name === this.state.currentCategory
        });
        console.log(newSelect)
        this.setState({selectedCategory: newSelect})
    };

    toggleDisplay = () => {
        this.setState({isDisplayed: !this.state.isDisplayed})
    };
    
  render() {
      console.log(this.state.currentCategory)
    return (
      <div>
        <h2 onClick={this.getCurrent}>Indentation</h2>
        <h2 onClick={this.getCurrent}>Key Spacing</h2>
        <h2 onClick={this.getCurrent}>No Unused Vars</h2>
        {
            this.state.isDisplayed ? 
            (<CategoryDescription selectedCat={this.state.selectedCategory}/>)
             : (null)
        }
      </div>
    )
  }
}
