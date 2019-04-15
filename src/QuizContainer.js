import React, { Component } from 'react';
import Quiz from './Quiz.js';

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
            this.findQuizQuestion()
        });
    };
    
    incrementIndex = () => {
        this.setState({quizIndex: this.state.quizIndex + 1}, () => {
            this.findQuizQuestion();
        });
    };

    findQuizQuestion = () => {
        let newQuestion = this.props.questions.find((question, idx) => {
            return idx === this.state.quizIndex
        });
        this.setState({currentQuestion: newQuestion})
    };

    render() {
        console.log(this.state.quizIndex)
        return (
            <div className='quiz-container'>
            {
                this.state.hideQuestion ? 
                (
                    <div>
                        <h2>Instrutions</h2><br/>
                        <p>You will now be starting the quiz</p><br/>
                        <ul>NOTE!
                            <li>You cannot go back</li>
                            <li>Your score will display at the end of the quiz</li>
                            <li>You may use notes..BUT TRY NOT TO!</li>
                            <li>HAVE FUN!</li>
                        </ul>
                        <button onClick={this.toggleQuestion}>GOT IT!</button>
                    </div>
                ) 
                : 
                (
                    <div>
                        <Quiz current={this.state.currentQuestion}/>
                        <button onClick={this.incrementIndex}>click me</button>
                    </div>
                )
            }
            </div>
        )
    }
}
