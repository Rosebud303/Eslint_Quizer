import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    )
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should have default state', () => {
    expect(wrapper.state()).toEqual({categories: [],
                                    questions: [],
                                    showQuiz: false,
                                    incorrectAnswers: [],
                                    showWrong: false
                                    });
  });

  it('Should toggle the state of showQuiz', () => {
    expect(wrapper.state('showQuiz')).toEqual(false);
    wrapper.instance().toggleQuiz();
    expect(wrapper.state('showQuiz')).toEqual(true);
  });

  it('Should toggle the state of showWrong', () => {
    expect(wrapper.state('showWrong')).toEqual(false);
    wrapper.instance().toggleWrong();
    expect(wrapper.state('showWrong')).toEqual(true);
  });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
