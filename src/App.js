import React, { Component } from 'react';
import logo from './logo.svg';
import RuleLibrary from './RuleLibrary.js';
import { categories, quizQuestions } from './data.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: categories,
      questions: quizQuestions
    }
  }
  
  render() {
    console.log(this.state.categories)
    return (
      <div className="App">
        <h1>memoize.eslint!</h1>
        <RuleLibrary categories={this.state.categories}/>
      </div>
    );
  }
}

export default App;
