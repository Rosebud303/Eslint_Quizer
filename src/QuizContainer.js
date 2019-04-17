import React, { Component } from 'react';
import Quiz from './Quiz.js';
import './QuizContainer.css'

export default class QuizContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: {},
            quizIndex: 0,
            hideQuestion: true
        }
    }
    
    toggleQuestion = () => {
        this.setState({hideQuestion: !this.state.hideQuestion}, () => {
            this.findQuizQuestion();
        });
    };
    
    incrementIndex = () => {
        if(this.state.quizIndex < 29) {
            this.setState({quizIndex: this.state.quizIndex + 1}, () => {
                this.findQuizQuestion();
            });
        } else {
            alert('Finished with Quiz! Click "Show Missed..." to see score');
            this.toggleQuestion();
            this.setState({quizIndex: 0});
        }
    };

    findQuizQuestion = () => {
        let newQuestion = this.props.questions.find((question, idx) => {
            return idx === this.state.quizIndex
        });
        this.setState({currentQuestion: newQuestion});
    };

    checkAnswer = (e) => {
        const { currentQuestion } = this.state;
        const { wrong } = this.props;
        if(wrong.includes(currentQuestion.id) || currentQuestion.name === e.target.innerText) {
            this.incrementIndex();
            let idx = wrong.indexOf(currentQuestion.id);
            wrong.splice(idx, 1);
            localStorage.setItem('wrongAnswers', JSON.stringify(wrong));
        } else if (currentQuestion.name !== e.target.innerText && !wrong.includes(currentQuestion.id)) {
            wrong.push(currentQuestion.id);
            localStorage.setItem('wrongAnswers', JSON.stringify(wrong));
            this.incrementIndex();
        }
    };

    render() {
        return (
            <div className='quiz-container'>
            {
                this.state.hideQuestion ? 
                (
                    <div>
                        <h2>Instrutions</h2><br/>
                        <p>You will now be starting the quiz</p><br/>
                        <ul>NOTE!
                            <li>You will have to choose which rule is being violated</li>
                            <li>You will have three buttons to make your choice</li>
                            <li>You cannot go back</li>
                            <li>Your score will display at the end of the quiz</li>
                            <li>You may use notes..BUT TRY NOT TO!</li>
                            <li>HAVE FUN!</li>
                        </ul>
                        <button className='show-question-button' onClick={this.toggleQuestion}>GOT IT!</button>
                    </div>
                ) 
                : 
                (
                    <div>
                        <Quiz current={this.state.currentQuestion}/>
                        <div className='buttons'>
                        {
                            this.props.categories.map ( category => {
                                return (
                                    <button key={category.url} onClick={this.checkAnswer}>{category.name}</button>
                                )
                                })
                        }
                        </div>
                    </div>
                )
            }
            </div>
        )
    };
};
