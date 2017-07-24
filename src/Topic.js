import React from 'react';

const Topic = ({topic, onChangeVote}) => {
  return (
    <article className="topic">
      <div className="counter">
        <div><i className="fa fa-arrow-up" onClick={() => onChangeVote(topic,1)}></i></div>
        <div className="vote-count">{topic.voteCount}</div>
        <div><i className="fa fa-arrow-down" onClick={() => onChangeVote(topic,-1)}></i></div>
      </div>
      <p className="content">{topic.title}</p>
    </article>)
}

export default Topic