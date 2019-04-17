import React from 'react';
import WrongItem from './WrongItem.js';
import { shallow } from 'enzyme';

const mockData = {
    name: 'Bob',
    answer: 'Some Image',
    id: 1
}

describe('WrongItem', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <WrongItem {...mockData}/>
        )
    });

    it('Should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });
});