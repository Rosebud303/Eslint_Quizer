import React, { Component } from 'react';
import CatergoryDescription from './CatergoryDescription.js';

export default class RuleLibrary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplayed: false,
            selectedCatergory: {},
            currentCatergory: ''
        }  
    }

    getCurrent = (e) => {
        this.setState({currentCatergory: e.target.innerText}, () => {
            this.findSelected();
        });
        this.toggleDisplay();
    };

    findSelected = () => {
        let newSelect = this.props.catergories.find( catergory => {
            return catergory.name === this.state.currentCatergory
        });
        console.log(newSelect)
        this.setState({selectedCatergory: newSelect})
    };

    toggleDisplay = () => {
        this.setState({isDisplayed: !this.state.isDisplayed})
    };
    
  render() {
      console.log(this.state.currentCatergory)
    return (
      <div>
        <h2 onClick={this.getCurrent}>Indentation</h2>
        <h2 onClick={this.getCurrent}>Key Spacing</h2>
        <h2 onClick={this.getCurrent}>No Unused Vars</h2>
        {
            this.state.isDisplayed ? 
            (<CatergoryDescription selectedCat={this.state.selectedCatergory}/>)
             : (null)
        }
      </div>
    )
  }
}
