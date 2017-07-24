import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';
import Topic from './Topic';

describe('Component:App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('state should change when textArea update', () => {
    //arrange
    const wrapper = shallow(
      <App />
    );
    const expectResult = 'test title';

    //act
    const textArea = wrapper.find('textArea');
    textArea.simulate('change', { target: { value: expectResult } })

    //assert
    const actual = wrapper.state('newTitle');
    expect(actual).toEqual(expectResult);
  });

  it('click Add topic should length +1', () => {
    //arrange
    const wrapper = shallow(
      <App />
    );
    const expectResult = wrapper.state('topics').length + 1;
    const form = wrapper.find('form');

    //act
    form.simulate('submit', { preventDefault() { } });

    //assert
    const actual = wrapper.state('topics').length;
    expect(actual).toEqual(expectResult);
  });
})