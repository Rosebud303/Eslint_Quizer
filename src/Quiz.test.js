import React from 'react';
import Quiz from './Quiz.js';
import { shallow } from 'enzyme';

const mockQuest ={
    "name": "Key Spacing",
    "quiz": "https://i.imgur.com/6F1XUXC.png",
    "answer": "https://i.imgur.com/gcQ23xw.png",
    "id": 4
}

describe('Quiz', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Quiz current={mockQuest}/>
        )
    });

    it('Should match the snapshot' , () => {
        expect(wrapper).toMatchSnapshot();
    });
});