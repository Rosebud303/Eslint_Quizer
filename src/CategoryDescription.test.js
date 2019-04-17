import React from 'react';
import CategoryDescription from './CategoryDescription.js';
import { shallow } from 'enzyme';

const mockCata =     {
    "name": "Indentation",
    "description": "When refering to 'Indentation' in esLint this means we are talking about the stylistic way your code should look in the developer. Indentation makes your code more readable and is the first step into writing less spaghetti code. It also gives the reader visual ques for hierarchy and scoping.",
    "incorrectImg": "https://i.imgur.com/oR17Hke.png",
    "correctImg": "https://i.imgur.com/YIp5OaH.png",
    "url": "https://eslint.org/docs/rules/indent"
};

const mockFunc = jest.fn();

describe('CategoryDescription', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <CategoryDescription selectedCat={mockCata}
                                 toggle={mockFunc}
            />
        )
    });

    it('Should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('Should simulate a click', () => {
        wrapper.find('.return-button').simulate('click');
        expect(mockFunc).toHaveBeenCalled();
    });
});