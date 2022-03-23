const express = require('express');
const {
  upVote,
  downVote,
  reportQuiz,
  removeQuiz,
  getQuizzes,
  addQuiz,
  getUser,
  addUser,
  addFriend,
  removeFriend,
  newQuizHistory,
  takenQuizAgain,
  newQuizScore,
  getAllQuizzes
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
  const newQuiz = {
    quizName: req.body.quizName,
    quizQuestions: req.body.quizQuestions,
    timesTaken: 0,
    category: req.body.category,
    quizDescription: req.body.quizDescription,
    quizBanner: req.body.quizBanner || "",
    quizUpvotes: 0,
    quizDownvotes: 0,
    reported: false,
    reportedTimes: 0,
    createdBy: req.body.createdBy,
    aggregateScore: 0
  }

  addQuiz(newQuiz)
    .then((results) => {
      res.status(201).send("quiz added!");
    })
    .catch((err) => {
      console.error(err);
    })
})

app.get('/user', (req, res) => {
  getUser(req.body.email)
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      console.error(err);
    })
})

app.post('/addFriend', (req, res) => {
  addFriend(req.body.email, req.body.friendEmail)
    .then((results) => {
      res.status(201).send("Friend added!");
    })
    .catch((err) => {
      console.error(err);
    })
})

app.post('/removeFriend', (req, res) => {
  removeFriend(req.body.email, req.body.friendEmail)
    .then((results) => {
      res.status(201).send("Friend removed!");
    })
    .catch((err) => {
      console.error(err);
    })
})

app.post('/addUser', (req, res) => {
  const newUser =  {
    userName: req.body.userName,
    email: req.body.email,
    quizHistory: [],
    friends: []
  };

  addUser(newUser)
    .then((results) => {
      res.status(201).send("User added!");
    })
    .catch((err) => {
      console.error(err);
    })
})

app.post('/newQuizHistory', (req, res) => {
  const newHistory = {
      _id: req.body.quizId,
      userScores: req.body.score
  }

  const user = req.body.email;

  newQuizHistory(user, newHistory)
    .then((results) => {
      res.status(201).send("Added to quiz history!");
    })
    .catch((err) => {
      console.error(err);
    })
})

app.post('/updateQuizHistory', (req, res) => {
  takenQuizAgain(req.body.userId)
    .then((results) => {
      newQuizScore(req.body.userId, req.body.score)
        .then((results) => {
          res.status(201).send("Quiz history updated!");
        })
        .catch((err) => {
          console.error(err);
        })
    })
    .catch((err) => {
      console.error(err);
    })
})

app.get('/getAllQuizzes', (req, res) => {
  getAllQuizzes()
    .then((results) => {
      res.status(200).send(results);
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