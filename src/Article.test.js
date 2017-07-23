import React from 'react';
import ReactDOM from 'react-dom';
import Article from './Article';
import { shallow } from 'enzyme';
import App from './App';

describe('Component:Article', () => {
    const minProps = { article: {}, onChangeVote: () => { } };
    const changeVote = shallow(<App />).instance().changeVote;

    it('renders without crashing', () => {
        shallow(<Article {...minProps} />)
    });

    it('correctly display article vote count', () => {
        //arrange
        const article = { voteCount: 5 }        
        const wrapper = shallow(<Article {...minProps} article={article} />);

        //assert
        expect(wrapper.find('.vote-count').text()).toEqual("5");
    });

    it('Click upvote voteCount should +1', () => {
        //arrange
        const article = { voteCount: 5 }
        const wrapper = shallow(<Article {...minProps} article={article} onChangeVote={changeVote} />);
        const upVoteBtn = wrapper.find('.fa-arrow-up');

        //act
        upVoteBtn.simulate('click');

        //assert
        expect(article.voteCount).toEqual(6);
    });

    it('Click downvote voteCount should -1', () => {
        //arrange
        const article = { voteCount: 5 }
        const wrapper = shallow(<Article {...minProps} article={article} onChangeVote={changeVote} />);
        const upVoteBtn = wrapper.find('.fa-arrow-down');
        
        //act
        upVoteBtn.simulate('click');

        //assert
        expect(article.voteCount).toEqual(4);
    });
})