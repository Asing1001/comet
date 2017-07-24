import React from 'react';
import Topic from './Topic';
import { shallow } from 'enzyme';
import App from './App';

describe('Component:Topic', () => {
    const minProps = { topic: {}, onChangeVote: () => { } };
    const changeVote = shallow(<App />).instance().changeVote;

    it('renders without crashing', () => {
        shallow(<Topic {...minProps} />)
    });

    it('correctly display topic vote count', () => {
        //arrange
        const topic = { voteCount: 5 }        
        const wrapper = shallow(<Topic {...minProps} topic={topic} />);

        //assert
        expect(wrapper.find('.vote-count').text()).toEqual("5");
    });

    it('click upvote voteCount should +1', () => {
        //arrange
        const topic = { voteCount: 5 }
        const wrapper = shallow(<Topic {...minProps} topic={topic} onChangeVote={changeVote} />);
        const upVoteBtn = wrapper.find('.fa-arrow-up');

        //act
        upVoteBtn.simulate('click');

        //assert
        expect(topic.voteCount).toEqual(6);
    });

    it('click downvote voteCount should -1', () => {
        //arrange
        const topic = { voteCount: 5 }
        const wrapper = shallow(<Topic {...minProps} topic={topic} onChangeVote={changeVote} />);
        const upVoteBtn = wrapper.find('.fa-arrow-down');
        
        //act
        upVoteBtn.simulate('click');

        //assert
        expect(topic.voteCount).toEqual(4);
    });
})