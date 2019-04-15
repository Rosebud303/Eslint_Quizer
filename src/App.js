import React, { Component } from 'react';
import QuizContainer from './QuizContainer.js';
import RuleLibrary from './RuleLibrary.js';
import { categories, quizQuestions } from './data.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: categories,
      questions: quizQuestions,
      showQuiz: false
    }
  };

  toggleQuiz = () => {
    this.setState({showQuiz: !this.state.showQuiz})
  };

  render() {
    console.log()
    const { categories, questions, showQuiz } = this.state
    const { toggleQuiz } = this
    return (
      <div className="App">
        <h1>memoize.eslint!</h1>
        <RuleLibrary categories={categories}/>
        <button className='startQuiz' 
                onClick={toggleQuiz}>
                Take Quiz!
        </button>
        { showQuiz &&
            <QuizContainer questions={questions}
                           toggle={toggleQuiz}
            />
        }
      </div>
    )
  };
};

export default App;
