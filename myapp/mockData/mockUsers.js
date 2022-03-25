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


// {
// 	"_id" : ObjectId("623cfee5d5c9ec0828f3d097"),
// 	"userName" : "superuser",
// 	"email" : "su@gmail.com",
// 	"quizHistory" : [
// 		{
// 			"quizId" : "623b4f3193deed525907e16b",
// 			"quizName" : "Science and Nature quiz one",
// 			"userScores" : 7,
// 			"_id" : ObjectId("623d039ce76964fc2da07c16")
// 		},
// 		{
// 			"quizId" : "623b4f3193deed525907e176",
// 			"quizName" : "Science and Nature quiz two",
// 			"userScores" : 10,
// 			"_id" : ObjectId("623d03bbe76964fc2da07c18")
// 		},
// 		{
// 			"quizId" : "623b4f3193deed525907e181",
// 			"quizName" : "Animal quiz one",
// 			"userScores" : 19,
// 			"_id" : ObjectId("623d03dfe76964fc2da07c1b")
// 		},
// 		{
// 			"quizId" : "623b4f3193deed525907e18c",
// 			"quizName" : "Animal quiz number two",
// 			"userScores" : 1,
// 			"_id" : ObjectId("623d0402e76964fc2da07c1f")
// 		},
// 		{
// 			"quizId" : "623b4f3193deed525907e197",
// 			"quizName" : "Animal Quiz Number 3",
// 			"userScores" : 7,
// 			"_id" : ObjectId("623d0417e76964fc2da07c22")
// 		}
// 	],
// 	"friends" : [
// 		"ImActuallyASupercomputerWearingClothes@gmail.com",
// 		"fourPointOhLiz@yahoo.com",
// 		"tenOutOfTenAllDayLong@hotmail.com",
// 		"pat@gmail.com"
// 	]
// }
