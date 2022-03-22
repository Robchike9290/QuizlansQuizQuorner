const express = require('express');
const {
  upVote,
  downVote,
  reportQuiz,
  removeQuiz,
  getQuizzes,
  addQuiz,
  getUser,
  addFriend,
  removeFriend,
  search
} = require('../database/index.js');
const app = express();
const axios = require('axios');

app.use(express.static(__dirname + './../dist/bundle.js'));
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  next();
});

app.get('/quizzes', (req, res) => {
  console.log('Hello from the server!')
  res.status(200).send('Test from server!')
})

app.get('/getQuiz', (req, res) => {

})

app.post('/upvote', (req, res) => {
  // upVote();
  res.status(200).send("upvoted!");
})

app.patch('/downvote', (req, res) => {

})

app.patch('/reportQuiz', (req, res) => {

})

app.delete('/removeQuiz', (req, res) => {

})

app.post('/addQuiz', (req, res) => {

})

app.get('/getUser', (req, res) => {

})

app.patch('/addFriend', (req, res) => {

})

app.patch('/removeFriend', (req, res) => {

})

app.get('/search', (req, res) => {
  // just use getQuizzes with params??
})

const PORT = 4444;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
})
// upvote
// downvote
// reportQuiz
// removeQuiz
// getQuizzes
// addQuiz
// user
// addFriend
// removeFriend
// search?