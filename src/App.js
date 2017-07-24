import React, { Component } from 'react';
import './App.css';
import Topic from './Topic';

const topics = [
  { title: 'Hello world', voteCount: 0 },
  { title: 'Wow! \nReact version is awesome!!', voteCount: 5 },
  { title: 'I love coding', voteCount: 8 }
];

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTitle: '',
      topics
    };

  }

  handleInputChange = (event) => {
    this.setState({ newTitle: event.target.value })
  }

  topicSubmit = (event) => {
    this.state.topics.unshift({ title: this.state.newTitle, voteCount: 0 })
    this.setState({ topics: this.state.topics })
    event.preventDefault();
  }

  changeVote = (topic, value) => {
    topic.voteCount += value;
    this.setState({ topics: this.state.topics })
  }

  render() {
    return (
      <div className="app">
        <h2>Welcome to Comet</h2>
        <form onSubmit={this.topicSubmit} className="topic-form">
          <textArea rows="3" cols="100" type="text" value={this.state.newTitle} onChange={this.handleInputChange.bind(this)} maxLength="255" required />
          <button type="submit" >Add Topic</button>
        </form>
        {this.state.topics.sort(({voteCount: a}, {voteCount: b}) => b - a).slice(0, 20).map((topic, index) =>
          <Topic topic={topic} key={index} onChangeVote={this.changeVote}></Topic>
        )}
      </div>
    );
  }
}

export default App;
