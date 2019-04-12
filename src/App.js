import React, { Component } from 'react';
import logo from './logo.svg';
import RuleLibrary from './RuleLibrary.js';
import catergories from './data.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catergories: catergories
    }
  }
  
  render() {
    console.log(this.state.catergories)
    return (
      <div className="App">
        <h1>memoize.eslint!</h1>
        <RuleLibrary catergories={this.state.catergories}/>
      </div>
    );
  }
}

export default App;
