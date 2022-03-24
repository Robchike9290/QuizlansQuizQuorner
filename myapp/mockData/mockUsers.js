const mockUserExample =  {
  userId: 300,
  userName: "",
  email: "",
  quizHistory: [
    {
      quizId: 0,
      userScores: 0
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
        quizId: 1,
        quizName: "General One",
        userScores: 60
      },
      {
        quizId: 1,
        quizName: "General One",
        userScores: 80
      },
      {
        quizId: 2,
        quizName: "General Two",
        userScores: 70
      },
      {
        quizId: 2,
        quizName: "General Two",
        userScores: 80
      }
    ],
    friends: [303, 304, 305]
  },
  {
    userId: 302,
    userName: "SteveTheQwizard",
    email: "tenOutOfTenAllDayLong@hotmail.com",
    quizHistory: [
      {
        quizId: 1,
        quizName: "General One",
        userScores: 100
      },
      {
        quizId: 2,
        quizName: "General Two",
        userScores: 100
      },
      {
        quizId: 3,
        quizName: "Science and Nature quiz one",
        userScores: 100
      },
      {
        quizId: 4,
        quizName: "Science and Nature quiz two",
        userScores: 100
      },
      {
        quizId: 5,
        quizName: "Animal quiz one",
        userScores: 100
      },
      {
        quizId: 6,
        quizName: "Animal quiz number two",
        userScores: 100
      },
      {
        quizId: 7,
        quizName: "Animal Quiz Number 3",
        userScores: 100
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
        quizId: 1,
        quizName: "General One",
        userScores: 80
      },
      {
        quizId: 1,
        quizName: "General One",
        userScores: 90
      },
      {
        quizId: 1,
        quizName: "General One",
        userScores: 100
      },
      {
        quizId: 2,
        quizName: "General Two",
        userScores: 90
      },
      {
        quizId: 2,
        quizName: "General Two",
        userScores: 100
      },
      {
        quizId: 3,
        quizName: "Science and Nature quiz one",
        userScores: 100
      },
      {
        quizId: 4,
        quizName: "Science and Nature quiz two",
        userScores: 80
      },
      {
        quizId: 4,
        quizName: "Science and Nature quiz two",
        userScores: 90
      },
      {
        quizId: 4,
        quizName: "Science and Nature quiz two",
        userScores: 100
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
        quizId: 1,
        quizName: "General One",
        userScores: 0
      },
      {
        quizId: 2,
        quizName: "General Two",
        userScores: 0
      },
      {
        quizId: 3,
        quizName: "Science and Nature quiz one",
        userScores: 0
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
        quizId: 1,
        quizName: "General One",
        userScores: 100
      },
      {
        quizId: 2,
        quizName: "General Two",
        userScores: 100
      },
      {
        quizId: 3,
        quizName: "Science and Nature quiz one",
        userScores: 100
      },
      {
        quizId: 4,
        quizName: "Science and Nature quiz two",
        userScores: 100
      },
      {
        quizId: 5,
        quizName: "Animal quiz one",
        userScores: 100
      },
      {
        quizId: 6,
        quizName: "Animal quiz number two",
        userScores: 100
      },
      {
        quizId: 7,
        quizName: "Animal Quiz Number 3",
        userScores: 100
      }
    ],
    friends: [301, 302, 303]
  }
]

module.exports = { mockUserList };
