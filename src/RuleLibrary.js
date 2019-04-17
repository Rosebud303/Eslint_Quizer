import React, { Component } from 'react';
import CategoryDescription from './CategoryDescription.js';
import './RuleLibrary.css'

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
  }

  findSelected = () => {
      let newSelect = this.props.categories.find( category => {
          return category.name === this.state.currentCategory
      });
      this.setState({selectedCategory: newSelect});
  };

  toggleDisplay = () => {
      this.setState({isDisplayed: !this.state.isDisplayed});
  };
    
  render() {
    return (
      <div className='rules'>
        {
          this.props.categories.map(category => {
              return (
                <h2 key={category.name} 
                    className='rule' 
                    onClick={this.getCurrent}>
                    {category.name}
                </h2>
              );
          })
        }
        { this.state.isDisplayed && 
            <CategoryDescription selectedCat={this.state.selectedCategory}
                                 toggle={this.toggleDisplay}
            />
        }
      </div>
    )
  };
};
