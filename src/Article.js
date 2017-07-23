import React from 'react';

const Article = ({article, onChangeVote}) => {
  return (
    <article className="article">
      <div className="counter">
        <div><i className="fa fa-arrow-up" onClick={() => onChangeVote(article,1)}></i></div>
        <div className="vote-count">{article.voteCount}</div>
        <div><i className="fa fa-arrow-down" onClick={() => onChangeVote(article,-1)}></i></div>
      </div>
      <p className="content">{article.title}</p>
    </article>)
}

export default Article