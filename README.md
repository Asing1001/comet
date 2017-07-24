# Comet

[![Build Status](https://travis-ci.org/Asing1001/comet.svg?branch=master)](https://travis-ci.org/Asing1001/comet)

## How to run

```bash
# install dependencies
npm install

# development
npm start

# testing
npm test

# build
npm run build
```

### Concept

1. To have a list of topics, I create array and render by functional component
1. To add new topic less than 255 length, I create input and use form authentication to validate
1. To upvote/downvote, I add property `voteCount` in Topics, and pass function `changeVote` to childComponent
1. To return a list of top 20 topics and sort by vote, I use `array.slice` for top 20, `array.sort` for order

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
