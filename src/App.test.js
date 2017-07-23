import React from 'react';
import App from './App';
import { shallow, mount, render } from 'enzyme';

describe('Component:Article', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('state should change when textArea update', () => {
    //arrange
    const wrapper = shallow(
      <App />
    );
    const expectResult = 'aaa';

    //act
    const textArea = wrapper.find('textArea');
    textArea.simulate('change', { target: { value: expectResult } })

    //assert
    const actual = wrapper.state('newTitle');
    expect(actual).toEqual(expectResult);
  });

  it('Click add article should length +1', () => {
    //arrange
    const wrapper = shallow(
      <App />
    );
    const expectResult = wrapper.state('articles').length + 1;
    const form = wrapper.find('form');

    //act
    form.simulate('submit', { preventDefault() { } });
    const actual = wrapper.state('articles').length;

    //assert
    expect(actual).toEqual(expectResult);
  });
})