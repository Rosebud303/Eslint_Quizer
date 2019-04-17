import React from 'react';
import RuleLibrary from './RuleLibrary.js';
import { shallow } from 'enzyme';

const mockCata =[
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

describe('RuleLibrary', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <RuleLibrary categories={mockCata}/>
        )
    });

    it('Should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('Should have default state', () => {
        expect(wrapper.state()).toEqual({isDisplayed: false, selectedCategory: {}, currentCategory: '' })
    });

    it('Should set state of selectedCategory depending on category name', () => {
        wrapper.setState({currentCategory: 'Indentation'});
        expect(wrapper.state('selectedCategory')).toEqual({});
        wrapper.instance().findSelected();
        expect(wrapper.state('selectedCategory')).toEqual(    {
            "name": "Indentation",
            "description": "When refering to 'Indentation' in esLint this means we are talking about the stylistic way your code should look in the developer. Indentation makes your code more readable and is the first step into writing less spaghetti code. It also gives the reader visual ques for hierarchy and scoping.",
            "incorrectImg": "https://i.imgur.com/oR17Hke.png",
            "correctImg": "https://i.imgur.com/YIp5OaH.png",
            "url": "https://eslint.org/docs/rules/indent"
        });
    });

    it('Should toggle the state of isDisplayed', () => {
        expect(wrapper.state('isDisplayed')).toEqual(false);
        wrapper.instance().toggleDisplay();
        expect(wrapper.state('isDisplayed')).toEqual(true);
    });

    it('Should set state of currentCategory with event.target.InnerText', () => {
        const mockTarget = {target: {innerText: 'e'}}
        expect(wrapper.state('currentCategory')).toEqual('');
        wrapper.instance().getCurrent(mockTarget);
        expect(wrapper.state('currentCategory')).toEqual('e')
    });
});