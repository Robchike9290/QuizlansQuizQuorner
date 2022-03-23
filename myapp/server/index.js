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
  removeFriend
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
  getQuizzes(req.body.createdBy, req.body.category)
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      console.error(err);
    })
})

app.post('/upvote', (req, res) => {
  upVote(req.body.quizId)
    .then((results) => {
      res.status(201).send("upvoted!");
    })
    .catch((err) => {
      console.error(err);
    })
})

app.post('/downvote', (req, res) => {
  downVote(req.body.quizId)
    .then((results) => {
      res.status(201).send("downvoted!");
    })
    .catch((err) => {
      console.error(err);
    })
})

app.post('/reportQuiz', (req, res) => {
  reportQuiz(req.body.quizId)
    .then((results) => {
      res.status(201).send("reported!");
    })
    .catch((err) => {
      console.error(err);
    })
})

app.post('/removeQuiz', (req, res) => {
  removeQuiz(req.body.quizId)
    .then((results) => {
      res.status(201).send("removed!");
    })
    .catch((err) => {
      console.error(err);
    })
})

app.post('/addQuiz', (req, res) => {
  addQuiz(req.body.newQuiz)
    .then((results) => {
      res.status(201).send("quiz added!");
    })
    .catch((err) => {
      console.error(err);
    })
})

app.get('/user', (req, res) => {
  getUser(req.body.userId)
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      console.error(err);
    })
})

app.post('/addFriend', (req, res) => {
  addFriend(req.body.userId, req.body.friendID)
    .then((results) => {
      res.status(201).send("Friend added!");
    })
    .catch((err) => {
      console.error(err);
    })
})

app.post('/removeFriend', (req, res) => {
  removeFriend(req.body.userId, req.body.friendID)
    .then((results) => {
      res.status(201).send("Friend removed!");
    })
    .catch((err) => {
      console.error(err);
    })
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