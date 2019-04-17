import React from 'react';
import QuizContainer from './QuizContainer.js';
import { shallow } from 'enzyme';

const mockCata = [
{
    "name": "Indentation",
    "description": "When refering to 'Indentation' in esLint this means we are talking about the stylistic way your code should look in the developer. Indentation makes your code more readable and is the first step into writing less spaghetti code. It also gives the reader visual ques for hierarchy and scoping.",
    "incorrectImg": "https://i.imgur.com/oR17Hke.png",
    "correctImg": "https://i.imgur.com/YIp5OaH.png",
    "url": "https://eslint.org/docs/rules/indent"
},
{
    "name": "Key Spacing",
    "description": "When refering to 'Keyword/Function Spacing' in esLint we are talking about the structural style of a line of code. Spacing much like Indentation helps you create more readable code. Spacing after declaration of a key word or function allows the compiler to understand what kind of code you are writing. It can also determine if a piece of code you wrote works as well.",
    "incorrectImg": "https://i.imgur.com/2sbdf12.png",
    "correctImg": "https://i.imgur.com/VX72PJh.png",
    "url": "https://eslint.org/docs/rules/key-spacing"
}
];

const mockQuests = [
    {
        "name": "Indentation",
        "quiz": "https://i.imgur.com/Mglgl9Y.png",
        "answer": "https://i.imgur.com/Tajm3yU.png",
        "id": 1
    },
    {
        "name": "Indentation",
        "quiz": "https://i.imgur.com/0pEnCe4.png",
        "answer": "https://i.imgur.com/pJN3TaQ.png",
        "id": 2
    },
    {
        "name": "No Unused Vars",
        "quiz": "https://i.imgur.com/7c32ZLd.png",
        "answer": "https://i.imgur.com/789uhJG.png",
        "id": 3
    },
    {
        "name": "Key Spacing",
        "quiz": "https://i.imgur.com/6F1XUXC.png",
        "answer": "https://i.imgur.com/gcQ23xw.png",
        "id": 4
    }
];

const mockIncorrect = [1,4];

const mockFunc = jest.fn();

describe('QuizContainer', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow (
            <QuizContainer questions={mockQuests}
                            toggle={mockFunc}
                            wrong={mockIncorrect}
                            categories={mockCata}
            />
        )
    });

    it('Should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });

    it('Should have default state', () => {
        expect(wrapper.state()).toEqual({currentQuestion: {}, quizIndex: 0, hideQuestion: true})
    });

    it('Should find the question with the given index', () => {
        wrapper.setState({quizIndex: 1});
        expect(wrapper.state('currentQuestion')).toEqual({});
        wrapper.instance().findQuizQuestion()
        expect(wrapper.state('currentQuestion')).toEqual(    {
            "name": "Indentation",
            "quiz": "https://i.imgur.com/0pEnCe4.png",
            "answer": "https://i.imgur.com/pJN3TaQ.png",
            "id": 2
        });
    });

    it('Should toggle the state of hideQuestion', () => {
        expect(wrapper.state('hideQuestion')).toEqual(true);
        wrapper.instance().toggleQuestion();
        expect(wrapper.state('hideQuestion')).toEqual(false);
    });

    it('Should increment the quizIndex', () => {
        expect(wrapper.state('quizIndex')).toEqual(0);
        wrapper.instance().incrementIndex();
        expect(wrapper.state('quizIndex')).toEqual(1);
    });

    it('Should set the state of quizIndex back to 0', () => {
        wrapper.setState({quizIndex: 30})
        expect(wrapper.state('quizIndex')).toEqual(30);
        wrapper.instance().incrementIndex();
        expect(wrapper.state('quizIndex')).toEqual(0);
    });
});