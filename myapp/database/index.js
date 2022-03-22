const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quizQuorner')
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch((err) => {
    console.log('Unable to connect to MongoDB:', err)
  });

const quizSchema = mongoose.Schema({
  quizId: { type: Number, required: true, index: { unique: true }}, // our end - auto increment??
  quizName: { type: String, required: true }, // user - user genenrated
  quizQuestions: [
    {
      question: { type: String, required: true }, // user - user generated
      correctAnswer: { type: String, required: true }, // user - user generated
      incorrectAnswers: [{ type: String, required: true }] // user - user generated
    }
  ],
  timesTaken: { type: Number, required: true }, // our end - default 0
  category: { type: String, required: true }, // user - select from list
  quizDescription: { type: String, required: true },  // user - user generated
  quizBanner: String,
  quizUpvotes: { type: Number, required: true }, // our end - default 0
  quizDownvotes: { type: Number, required: true }, // our end - default 0
  reported: { type: Boolean, required: true }, // our end - default false
  reportedTimes: { type: Number, required: true }, // our end - default 0
  createdBy: { type: String, required: true }, // user - based on userName
  aggregateScore: { type: Number, required: true } // our end - default 0
})


const userSchema = mongoose.Schema({
  userId: { type: Number, required: true, index: { unique: true }}, // our end - auto increment??
  userName: { type: String, required: true, index: { unique: true }}, // user - based on userName
  email: { type: String, required: true, index: { unique: true }}, // user - based on email
  quizHistory: [
    {
      quizId: { type: Number, required: true }, // based on quizId after completion
      quizName: { type: String, required: true }, // based on quizName after completion
      timesUserHasTaken: { type: Number, required: true }, // increment after completion
      userScores: [{ type: Number, required: true }] // add score to array after completion
    }
  ],
  friends: [{ type: Number, required: true, index: { unique: true }}] // add or remove userId to array as user adds or removes friend
})

const Quiz = mongoose.model('Quiz', quizSchema);

const User = mongoose.model('User', userSchema);

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

const upVote = function (quizId) {
  Quiz.updateOne({ "quizId": quizId}, {$inc: {quizUpvotes: 1} }, {upsert: true});
  console.log('upvote db method');
};

const downVote = (quizId) => {
  Quiz.updateOne({ "quizId": quizId}, {$inc: {quizUpvotes: -1} }, {upsert: true});
  console.log('downvote db method');
}

const reportQuiz = (quizId) => {
  Quiz.updateOne({ "quizId": quizId}, {$set: {reported: true}}, {upsert: true});
  console.log('reportQuiz db method');
}

const reportCount = (quizId) => {
  Quiz.updateOne({ "quizId": quizId}, {$inc: {reportedTimes: 1} }, {upsert: true});
  console.log('reportCount db method');
}

const removeQuiz = (quizId) => {
  Quiz.deleteOne({ "quizId": quizId })
  console.log('removeQuiz db method');
}

//what are we searching by? user/category. one has to be null
const getQuizzes = (createdBy, category) => {
  if (createdBy) {
    Quiz.find({ "createdBy": createdBy})
  }
  if (category) {
    Quiz.find({ "category": category})
  }
  console.log('getQuizzes db method');
}

const getQuiz = (quizId) => {
  Quiz.find({ "quizId": quizId})
  console.log('getQuizzes db method');
}

const addQuiz = (newQuiz) => {
  Quiz.create(newQuiz)
  console.log('addQuiz db method');
}

const addUser = (newUser) => {
  User.create(newUser)
  console.log('addUser db method');
}

const getUser = (userId) => {
  User.find({ "userId": userId})
  console.log('user db method');
}

const addFriend = (userId, friendID) => {
  User.updateOne({ "userId": userId}, {$push: {friends: friendID}})
  console.log('addFriend db method');
}

const removeFriend = (userId, friendID) => {
  User.updateOne({ "userId": userId}, {$pull: {friends: friendID}})
  console.log('removeFriend db method');
}

// const search = () => {
//   console.log('search db method');
// }


module.exports = {
  upVote: upVote,
  downVote: downVote,
  reportQuiz: reportQuiz,
  removeQuiz: removeQuiz,
  getQuizzes: getQuizzes,
  getQuiz: getQuiz,
  addQuiz: addQuiz,
  getUser: getUser,
  addFriend: addFriend,
  removeFriend: removeFriend
};

// TODO:
// GET for user quizHistory
// GET for user created quizzes
// GET for admin, reported quizzes, display by timesReported
