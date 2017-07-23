import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const articles = [{ title: 123 }, { title: 888 }, { title: 456 }];

const Article = ({article}) => {
  return (<div>{article.title}</div>)
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

  addArticle = (title) => {
    this.state.articles.push({ title })
    this.setState({ articles: this.state.articles })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Comet</h2>
        </div>
        <input type="text" value={this.state.newTitle} onChange={this.handleChange.bind(this)} />
        <button onClick={() => this.addArticle(this.state.newTitle)}>Add Article</button>
        {this.state.articles.map((article, index) =>
          <Article article={article} key={index}></Article>
        )}
      </div>
    );
  }
}

export default App;
