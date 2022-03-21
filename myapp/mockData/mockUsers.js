const mockUserExample =  {
  userId: 300,
  userName: "",
  email: "",
  quizHistory: [
    {
      quizId: 0,
      timesUserHasTaken: 0,
      userAnswers: []
    }
  ],
  friends: []
};

const mockUserList = [
  {
    userId: 301,
    userName: "PatrickTheAssistant",
    email: "pat@gmail.com",
    quizHistory: [
      {
        quizId: 0,
        timesUserHasTaken: 0,
        userAnswers: [303, 304, 305]
      }
    ],
    friends: []
  },
  {
    userId: 302,
    userName: "SteveTheQwizard",
    email: "tenOutOfTenAllDayLong@hotmail.com",
    quizHistory: [
      {
        quizId: 0,
        timesUserHasTaken: 0,
        userAnswers: []
      }
    ],
    friends: [303, 304, 305]
  },
  {
    userId: 303,
    userName: "LizTheQuizWiz",
    email: "fourPointOhLiz@yahoo.com",
    quizHistory: [
      {
        quizId: 0,
        timesUserHasTaken: 0,
        userAnswers: []
      }
    ],
    friends: [301, 305]
  },
  {
    userId: 304,
    userName: "ZeroOutOfTen",
    email: "IForgotWhereILive@outlook.com",
    quizHistory: [
      {
        quizId: 0,
        timesUserHasTaken: 0,
        userAnswers: []
      }
    ],
    friends: []
  },
  {
    userId: 305,
    userName: "KenJennings",
    email: "ImActuallyASupercomputerWearingClothes@gmail.com",
    quizHistory: [
      {
        quizId: 0,
        timesUserHasTaken: 0,
        userAnswers: []
      }
    ],
    friends: [301, 302, 303]
  }
]