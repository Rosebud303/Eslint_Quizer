import React from 'react';
import WrongContainer from './WrongContainer.js';
import { shallow } from 'enzyme';

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

const mockIncorrect = [2,4];
const mockFunc = jest.fn();

describe('WrongContainer', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow (
            <WrongContainer questions={mockQuests}
                            incorrects={mockIncorrect}
                            toggle={mockFunc}
            />
        )
    });

    it('Should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('Should simulate a click and call the function inside', () => {
        wrapper.find('.show-wrong-button').simulate('click');
        expect(mockFunc).toHaveBeenCalled();
    });
});
