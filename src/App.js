import React, { Component } from 'react';
import QuizContainer from './QuizContainer.js';
import RuleLibrary from './RuleLibrary.js';
import './App.css';
import WrongContainer from './WrongContainer.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      questions: [],
      showQuiz: false,
      incorrectAnswers: [],
      showWrong: false
    }
  };

  componentDidMount() {
    let wrongStorage = JSON.parse(localStorage.getItem('wrongAnswers'));
    let updatedCurrentWrong = [];
    fetch('https://fe-apps.herokuapp.com/api/v1/memoize/1901/duydata/categories')
    .then(response => response.json())
    .then(data => {
      this.setState({
        categories: data.categories,
      })
    })
    .catch(error => {
      this.setState({error: error.message})
    });
    fetch('https://fe-apps.herokuapp.com/api/v1/memoize/1901/duydata/quizQuestions')
    .then(response => response.json())
    .then(data => {
      this.setState({
        questions: data.quizQuestions,
      })
    })
    .catch(error => {
      this.setState({error: error.message})
    });
    if(wrongStorage !== null) {
      updatedCurrentWrong = wrongStorage
    }
    this.setState({ incorrectAnswers: updatedCurrentWrong});
  }

  toggleWrong = () => {
    this.setState({showWrong: !this.state.showWrong});
  };

  toggleQuiz = () => {
    this.setState({showQuiz: !this.state.showQuiz});
  };

  render() {
    const { categories, questions, showQuiz, incorrectAnswers, showWrong } = this.state;
    const { toggleQuiz, toggleWrong } = this;
    return (
      <div className="App">
        <h1>memoize.eslint!</h1>
        <h3 className='score'>Score: {incorrectAnswers.length}/30</h3>
        <RuleLibrary categories={categories}/>
        { showWrong &&
            <div>
              <WrongContainer questions={questions}
                              incorrects={incorrectAnswers}
                              toggle={toggleWrong}
              />
            </div>
        }
        <div className='button-area'>
          <button className='startQuiz' 
                  onClick={toggleQuiz}>
                  Take Quiz!
          </button>
          <button className='show-wrong'
                  onClick={toggleWrong}>
                  Show Missed...
          </button>
        </div>
        { showQuiz &&
            <QuizContainer questions={questions}
                           toggle={toggleQuiz}
                           wrong={incorrectAnswers}
                           categories={categories}
            />
        }
      </div>
    )
  };
};

export default App;
