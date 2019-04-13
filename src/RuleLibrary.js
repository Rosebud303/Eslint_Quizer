import React, { Component } from 'react';
import CategoryDescription from './CategoryDescription.js';
import './RuleLibrary.css'

export default class RuleLibrary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplayed: false,
            selectedCategory: {},
            currentCategory: '',
            definitionNames: ['Indentation', 'Key Spacing', 'No Unused Vars']
        }  
    }

    getCurrent = (e) => {
        this.setState({currentCategory: e.target.innerText}, () => {
            this.findSelected();
        });
        this.toggleDisplay();
    }

    findSelected = () => {
        let newSelect = this.props.categories.find( category => {
            return category.name === this.state.currentCategory
        });
        console.log(newSelect)
        this.setState({selectedCategory: newSelect,
                        
                     });
    };

    toggleDisplay = () => {
        this.setState({isDisplayed: !this.state.isDisplayed})
    };
    
  render() {
      console.log(this.state.currentCategory)
    return (
      <div className='rules'>
        {
          this.state.definitionNames.map(names => {
              return (
                <h2 className='rule' onClick={this.getCurrent}>{names}</h2>
              )
          })
        }
        { this.state.isDisplayed && 
            <CategoryDescription selectedCat={this.state.selectedCategory}
                                 toggle={this.toggleDisplay}
            />
        }
      </div>
    )
  }
}
