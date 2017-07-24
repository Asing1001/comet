import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
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



  it('should only show 20 topic', () => {
    //arrange
    const wrapper = shallow(
      <App />
    );
    const expectResult = 20;
    const form = wrapper.find('form');

    //act
    for (var i = 0; i < 30; i++) {
      form.simulate('submit', { preventDefault() { } });
    }

    //assert
    const actual = wrapper.find('Topic').length;
    expect(actual).toEqual(expectResult);
  });



  it('should sort from big to small', () => {
    //arrange
    const wrapper = shallow(
      <App />
    );
    const topics = [
      { title: 'Hello world', voteCount: 2 },
      { title: 'Wow! \nReact version is awesome!!', voteCount: 4 },
      { title: 'I love coding', voteCount: 3 },
      { title: 'testing title', voteCount: 1 }
    ];

    //act
    wrapper.setState({ topics })    

    //assert
    expect(topics[0].voteCount).toEqual(4);
    expect(topics[1].voteCount).toEqual(3);
    expect(topics[2].voteCount).toEqual(2);
    expect(topics[3].voteCount).toEqual(1);
  });
})