import React, { Component } from 'react';
import './App.css';

const articles = [
  { title: 'Hello world', voteCount: 0 },
  { title: 'Wow! \nReact version is awesome!!', voteCount: 5 },
  { title: 'I love coding', voteCount: 88 }
];

const Article = ({article, onChangeVote}) => {
  return (
    <article className="article">
      <div className="counter">
        <div><i className="fa fa-arrow-up" onClick={() => onChangeVote(1)}></i></div>
        <div>{article.voteCount}</div>
        <div><i className="fa fa-arrow-down" onClick={() => onChangeVote(-1)}></i></div>
      </div>
      <p className="content">{article.title}</p>
    </article>)
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTitle: '',
      articles
    };

  }

  handleInputChange = (event) => {
    this.setState({ newTitle: event.target.value })
  }

  articleSubmit = (event) => {
    this.state.articles.unshift({ title: this.state.newTitle, voteCount: 0 })
    this.setState({ articles: this.state.articles })
    event.preventDefault();
  }

  changeVote = (article, value) => {
    article.voteCount += value;
    this.setState({ articles: this.state.articles })
  }

  render() {
    return (
      <div className="App">
        <h2>Welcome to Comet</h2>
        <form onSubmit={this.articleSubmit} className="article-form">
          <textArea rows="3" cols="100" type="text" value={this.state.newTitle} onChange={this.handleInputChange.bind(this)} maxLength="255" required />
          <button type="submit" >Add Article</button>
        </form>
        {this.state.articles.sort(({voteCount: a}, {voteCount: b}) => b - a).slice(0, 20).map((article, index) =>
          <Article article={article} key={index} onChangeVote={(value) => this.changeVote(article, value)}></Article>
        )}
      </div>
    );
  }
}

export default App;
