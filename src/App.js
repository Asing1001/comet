import React, { Component } from 'react';
import './App.css';

const articles = [{ title: 123, voteCount: 0 }, { title: 888, voteCount: 5 }, { title: 456, voteCount: 88 }];

const Article = ({article, onChangeVote}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '.5em 0em', border: '1px solid', margin: '.3em 0em' }}>
      <div style={{ width: '100px', textAlign: 'center' }}>
        <div><i className="fa fa-arrow-up" onClick={() => onChangeVote(1)}></i></div>
        <div>{article.voteCount}</div>
        <div><i className="fa fa-arrow-down" onClick={() => onChangeVote(-1)}></i></div>
      </div>
      <div style={{ 'flex': 1 }}>{article.title}</div>
    </div>)
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTitle: '',
      articles
    };

  }

  handleChange = (event) => {
    this.setState({ newTitle: event.target.value })
  }

  addArticle = (event) => {
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
        <div className="App-header">
          <h2>Welcome to Comet</h2>
        </div>
        <form onSubmit={this.addArticle}>
          <input type="text" value={this.state.newTitle} onChange={this.handleChange.bind(this)} maxLength="255" required />
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
