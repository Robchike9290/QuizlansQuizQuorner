const exampleQuizTemplate = {
//   quizName: 'Just for fun one',
//   quizQuestions: [
//     {
//       question: '',
//       correctAnswer: '',
//       incorrectAnswers: [],
//     },
//   ],
//   timesTaken: 12,
//   category: 'Just for Fun',
//   quizDescription: 'Just for Fun quiz number 1',
//   quizBanner: 'https://i.imgur.com/Xwv08Qv.jpg',
//   quizUpvotes: 5,
//   quizDownvotes: 1,
//   reported: false,
//   reportedTimes: 0,
//   createdBy: 'PatrickTheAssistant',
//   aggregateScore: 84,
};

let exampleQuizzesFinal = [
  {
    quizName: 'Just for fun one',
    quizQuestions: [
      {
        question: 'What does DNA stand for?',
        correctAnswer: 'Deoxyribonucleic Acid',
        incorrectAnswers: [
          'Deoxyribogenetic Acid',
          'Deoxyribogenetic Atoms',
          'Detoxic Acid',
        ],
      },
      {
        question:
          'Which game did &quot;Sonic The Hedgehog&quot; make his first appearance in?',
        correctAnswer: 'Rad Mobile',
        incorrectAnswers: ['Sonic The Hedgehog', 'Super Mario 64', 'Mega Man'],
      },
      {
        question:
          'Which animal features on the logo for Abarth, the motorsport division of Fiat?',
        correctAnswer: 'Scorpion',
        incorrectAnswers: ['Snake', 'Bull', 'Horse'],
      },
      {
        question:
          'Who had a 1976 hit with the song You Make Me Feel Like Dancing?',
        correctAnswer: 'Leo Sayer',
        incorrectAnswers: ['Elton John', 'Billy Joel', 'Andy Gibb'],
      },
      {
        question:
          'What does AD stand for in relation to Windows Operating Systems? ',
        correctAnswer: 'Active Directory',
        incorrectAnswers: [
          'Alternative Drive',
          'Automated Database',
          'Active Department',
        ],
      },
      {
        question: 'On which continent is the country of Angola located?',
        correctAnswer: 'Africa',
        incorrectAnswers: ['South America', 'Europe', 'Asia'],
      },
      {
        question: 'Who is the true moon princess in Sailor Moon?',
        correctAnswer: 'Sailor Moon',
        incorrectAnswers: ['Sailor Venus', 'Sailor Mars', 'Sailor Jupiter'],
      },
      {
        question: 'What is the nickname of the US state of California?',
        correctAnswer: 'Golden State',
        incorrectAnswers: ['Sunshine State', 'Bay State', 'Treasure State'],
      },
      {
        question: 'In which Mario game did the Mega Mushroom make its debut?',
        correctAnswer: 'Mario Party 4',
        incorrectAnswers: [
          'New Super Mario Bros.',
          'Mario Kart Wii',
          'Super Mario 3D World',
        ],
      },
      {
        question:
          'Gordon Freeman is said to have burnt and destroyed what food in the break room microwave?',
        correctAnswer: 'Casserole',
        incorrectAnswers: ['Sub Sandwich', 'Chicken Soup', 'Pepperoni Pizza'],
      },
    ],
    timesTaken: 12,
    category: 'Just for Fun',
    quizDescription: 'Just for Fun quiz number 1',
    quizBanner:
      'https://i.imgur.com/Xwv08Qv.jpg',
    quizUpvotes: 5,
    quizDownvotes: 1,
    reported: false,
    reportedTimes: 0,
    createdBy: 'PatrickTheAssistant',
    aggregateScore: 84,
  },
  {
    quizName: 'Just for fun two',
    quizQuestions: [
      {
        question: 'What does DNA stand for?',
        correctAnswer: 'Deoxyribonucleic Acid',
        incorrectAnswers: [
          'Deoxyribogenetic Acid',
          'Deoxyribogenetic Atoms',
          'Detoxic Acid',
        ],
      },
      {
        question:
          'Which game did &quot;Sonic The Hedgehog&quot; make his first appearance in?',
        correctAnswer: 'Rad Mobile',
        incorrectAnswers: ['Sonic The Hedgehog', 'Super Mario 64', 'Mega Man'],
      },
      {
        question:
          'Which animal features on the logo for Abarth, the motorsport division of Fiat?',
        correctAnswer: 'Scorpion',
        incorrectAnswers: ['Snake', 'Bull', 'Horse'],
      },
      {
        question:
          'Who had a 1976 hit with the song You Make Me Feel Like Dancing?',
        correctAnswer: 'Leo Sayer',
        incorrectAnswers: ['Elton John', 'Billy Joel', 'Andy Gibb'],
      },
      {
        question:
          'What does AD stand for in relation to Windows Operating Systems? ',
        correctAnswer: 'Active Directory',
        incorrectAnswers: [
          'Alternative Drive',
          'Automated Database',
          'Active Department',
        ],
      },
      {
        question: 'On which continent is the country of Angola located?',
        correctAnswer: 'Africa',
        incorrectAnswers: ['South America', 'Europe', 'Asia'],
      },
      {
        question: 'Who is the true moon princess in Sailor Moon?',
        correctAnswer: 'Sailor Moon',
        incorrectAnswers: ['Sailor Venus', 'Sailor Mars', 'Sailor Jupiter'],
      },
      {
        question: 'What is the nickname of the US state of California?',
        correctAnswer: 'Golden State',
        incorrectAnswers: ['Sunshine State', 'Bay State', 'Treasure State'],
      },
      {
        question: 'In which Mario game did the Mega Mushroom make its debut?',
        correctAnswer: 'Mario Party 4',
        incorrectAnswers: [
          'New Super Mario Bros.',
          'Mario Kart Wii',
          'Super Mario 3D World',
        ],
      },
      {
        question:
          'Gordon Freeman is said to have burnt and destroyed what food in the break room microwave?',
        correctAnswer: 'Casserole',
        incorrectAnswers: ['Sub Sandwich', 'Chicken Soup', 'Pepperoni Pizza'],
      },
    ],
    timesTaken: 22,
    category: 'Just for Fun',
    quizDescription: 'Just for Fun quiz number 2',
    quizBanner:
      'https://i.imgur.com/Xwv08Qv.jpg',
    quizUpvotes: 15,
    quizDownvotes: 1,
    reported: false,
    reportedTimes: 0,
    createdBy: 'PatrickTheAssistant',
    aggregateScore: 120,
  },
  {
    quizName: 'Just for fun three',
    quizQuestions: [
      {
        question: 'What does DNA stand for?',
        correctAnswer: 'Deoxyribonucleic Acid',
        incorrectAnswers: [
          'Deoxyribogenetic Acid',
          'Deoxyribogenetic Atoms',
          'Detoxic Acid',
        ],
      },
      {
        question:
          'Which game did &quot;Sonic The Hedgehog&quot; make his first appearance in?',
        correctAnswer: 'Rad Mobile',
        incorrectAnswers: ['Sonic The Hedgehog', 'Super Mario 64', 'Mega Man'],
      },
      {
        question:
          'Which animal features on the logo for Abarth, the motorsport division of Fiat?',
        correctAnswer: 'Scorpion',
        incorrectAnswers: ['Snake', 'Bull', 'Horse'],
      },
      {
        question:
          'Who had a 1976 hit with the song You Make Me Feel Like Dancing?',
        correctAnswer: 'Leo Sayer',
        incorrectAnswers: ['Elton John', 'Billy Joel', 'Andy Gibb'],
      },
      {
        question:
          'What does AD stand for in relation to Windows Operating Systems? ',
        correctAnswer: 'Active Directory',
        incorrectAnswers: [
          'Alternative Drive',
          'Automated Database',
          'Active Department',
        ],
      },
      {
        question: 'On which continent is the country of Angola located?',
        correctAnswer: 'Africa',
        incorrectAnswers: ['South America', 'Europe', 'Asia'],
      },
      {
        question: 'Who is the true moon princess in Sailor Moon?',
        correctAnswer: 'Sailor Moon',
        incorrectAnswers: ['Sailor Venus', 'Sailor Mars', 'Sailor Jupiter'],
      },
      {
        question: 'What is the nickname of the US state of California?',
        correctAnswer: 'Golden State',
        incorrectAnswers: ['Sunshine State', 'Bay State', 'Treasure State'],
      },
      {
        question: 'In which Mario game did the Mega Mushroom make its debut?',
        correctAnswer: 'Mario Party 4',
        incorrectAnswers: [
          'New Super Mario Bros.',
          'Mario Kart Wii',
          'Super Mario 3D World',
        ],
      },
      {
        question:
          'Gordon Freeman is said to have burnt and destroyed what food in the break room microwave?',
        correctAnswer: 'Casserole',
        incorrectAnswers: ['Sub Sandwich', 'Chicken Soup', 'Pepperoni Pizza'],
      },
    ],
    timesTaken: 32,
    category: 'Just for Fun',
    quizDescription: 'Just for Fun quiz number 3',
    quizBanner:
      'https://i.imgur.com/Xwv08Qv.jpg',
    quizUpvotes: 35,
    quizDownvotes: 11,
    reported: false,
    reportedTimes: 0,
    createdBy: 'PatrickTheAssistant',
    aggregateScore: 260,
  },
  {
    quizName: 'Just for fun four',
    quizQuestions: [
      {
        question: 'What does DNA stand for?',
        correctAnswer: 'Deoxyribonucleic Acid',
        incorrectAnswers: [
          'Deoxyribogenetic Acid',
          'Deoxyribogenetic Atoms',
          'Detoxic Acid',
        ],
      },
      {
        question:
          'Which game did &quot;Sonic The Hedgehog&quot; make his first appearance in?',
        correctAnswer: 'Rad Mobile',
        incorrectAnswers: ['Sonic The Hedgehog', 'Super Mario 64', 'Mega Man'],
      },
      {
        question:
          'Which animal features on the logo for Abarth, the motorsport division of Fiat?',
        correctAnswer: 'Scorpion',
        incorrectAnswers: ['Snake', 'Bull', 'Horse'],
      },
      {
        question:
          'Who had a 1976 hit with the song You Make Me Feel Like Dancing?',
        correctAnswer: 'Leo Sayer',
        incorrectAnswers: ['Elton John', 'Billy Joel', 'Andy Gibb'],
      },
      {
        question:
          'What does AD stand for in relation to Windows Operating Systems? ',
        correctAnswer: 'Active Directory',
        incorrectAnswers: [
          'Alternative Drive',
          'Automated Database',
          'Active Department',
        ],
      },
      {
        question: 'On which continent is the country of Angola located?',
        correctAnswer: 'Africa',
        incorrectAnswers: ['South America', 'Europe', 'Asia'],
      },
      {
        question: 'Who is the true moon princess in Sailor Moon?',
        correctAnswer: 'Sailor Moon',
        incorrectAnswers: ['Sailor Venus', 'Sailor Mars', 'Sailor Jupiter'],
      },
      {
        question: 'What is the nickname of the US state of California?',
        correctAnswer: 'Golden State',
        incorrectAnswers: ['Sunshine State', 'Bay State', 'Treasure State'],
      },
      {
        question: 'In which Mario game did the Mega Mushroom make its debut?',
        correctAnswer: 'Mario Party 4',
        incorrectAnswers: [
          'New Super Mario Bros.',
          'Mario Kart Wii',
          'Super Mario 3D World',
        ],
      },
      {
        question:
          'Gordon Freeman is said to have burnt and destroyed what food in the break room microwave?',
        correctAnswer: 'Casserole',
        incorrectAnswers: ['Sub Sandwich', 'Chicken Soup', 'Pepperoni Pizza'],
      },
    ],
    timesTaken: 42,
    category: 'Just for Fun',
    quizDescription: 'Just for Fun quiz number 4',
    quizBanner:
      'https://i.imgur.com/Xwv08Qv.jpg',
    quizUpvotes: 25,
    quizDownvotes: 10,
    reported: false,
    reportedTimes: 0,
    createdBy: 'PatrickTheAssistant',
    aggregateScore: 360,
  },
  {
    quizName: 'Just for fun five',
    quizQuestions: [
      {
        question: 'What does DNA stand for?',
        correctAnswer: 'Deoxyribonucleic Acid',
        incorrectAnswers: [
          'Deoxyribogenetic Acid',
          'Deoxyribogenetic Atoms',
          'Detoxic Acid',
        ],
      },
      {
        question:
          'Which game did &quot;Sonic The Hedgehog&quot; make his first appearance in?',
        correctAnswer: 'Rad Mobile',
        incorrectAnswers: ['Sonic The Hedgehog', 'Super Mario 64', 'Mega Man'],
      },
      {
        question:
          'Which animal features on the logo for Abarth, the motorsport division of Fiat?',
        correctAnswer: 'Scorpion',
        incorrectAnswers: ['Snake', 'Bull', 'Horse'],
      },
      {
        question:
          'Who had a 1976 hit with the song You Make Me Feel Like Dancing?',
        correctAnswer: 'Leo Sayer',
        incorrectAnswers: ['Elton John', 'Billy Joel', 'Andy Gibb'],
      },
      {
        question:
          'What does AD stand for in relation to Windows Operating Systems? ',
        correctAnswer: 'Active Directory',
        incorrectAnswers: [
          'Alternative Drive',
          'Automated Database',
          'Active Department',
        ],
      },
      {
        question: 'On which continent is the country of Angola located?',
        correctAnswer: 'Africa',
        incorrectAnswers: ['South America', 'Europe', 'Asia'],
      },
      {
        question: 'Who is the true moon princess in Sailor Moon?',
        correctAnswer: 'Sailor Moon',
        incorrectAnswers: ['Sailor Venus', 'Sailor Mars', 'Sailor Jupiter'],
      },
      {
        question: 'What is the nickname of the US state of California?',
        correctAnswer: 'Golden State',
        incorrectAnswers: ['Sunshine State', 'Bay State', 'Treasure State'],
      },
      {
        question: 'In which Mario game did the Mega Mushroom make its debut?',
        correctAnswer: 'Mario Party 4',
        incorrectAnswers: [
          'New Super Mario Bros.',
          'Mario Kart Wii',
          'Super Mario 3D World',
        ],
      },
      {
        question:
          'Gordon Freeman is said to have burnt and destroyed what food in the break room microwave?',
        correctAnswer: 'Casserole',
        incorrectAnswers: ['Sub Sandwich', 'Chicken Soup', 'Pepperoni Pizza'],
      },
    ],
    timesTaken: 50,
    category: 'Just for Fun',
    quizDescription: 'Just for Fun quiz number 5',
    quizBanner:
      'https://i.imgur.com/Xwv08Qv.jpg',
    quizUpvotes: 25,
    quizDownvotes: 11,
    reported: false,
    reportedTimes: 0,
    createdBy: 'PatrickTheAssistant',
    aggregateScore: 450,
  },
  {
    quizName: 'Science and Nature quiz one',
    quizQuestions: [
      {
        question: 'Which of these bones is hardest to break?',
        correctAnswer: 'Femur',
        incorrectAnswers: ['Cranium', 'Humerus', 'Tibia'],
      },
      {
        question:
          'Rhinoplasty is a surgical procedure on what part of the human body?',
        correctAnswer: 'Nose',
        incorrectAnswers: ['Ears', 'Chin', 'Neck'],
      },
      {
        question:
          'To the nearest minute, how long does it take for light to travel from the Sun to the Earth?',
        correctAnswer: '8 Minutes',
        incorrectAnswers: ['6 Minutes', '2 Minutes', '12 Minutes'],
      },
      {
        question: 'Which chemical element has the lowest boiling point?',
        correctAnswer: 'Helium',
        incorrectAnswers: ['Hydrogen', 'Neon', 'Nitrogen'],
      },
      {
        question:
          'An organic compound is considered an alcohol if it has what functional group?',
        correctAnswer: 'Hydroxyl',
        incorrectAnswers: ['Carbonyl', 'Alkyl', 'Aldehyde'],
      },
      {
        question: 'Au on the Periodic Table refers to which element?',
        correctAnswer: 'Gold',
        incorrectAnswers: ['Silver', 'Oxygen', 'Nickel'],
      },
      {
        question:
          'All the following metal elements are liquids at or near room temperature EXCEPT:',
        correctAnswer: 'Beryllium',
        incorrectAnswers: ['Gallium', 'Caesium', 'Mercury'],
      },
      {
        question:
          'How many officially recognized dwarf planets in the solar system are named after Polynesian deities?',
        correctAnswer: '2',
        incorrectAnswers: ['0', '1', '5'],
      },
      {
        question: 'Folic acid is the synthetic form of which vitamin?',
        correctAnswer: 'Vitamin B',
        incorrectAnswers: ['Vitamin A', 'Vitamin C', 'Vitamin D'],
      },
      {
        question: 'What term is best associated with Sigmund Freud?',
        correctAnswer: 'Psychoanalysis',
        incorrectAnswers: [
          'Cognitive-Behavioral Therapy',
          'Theory of Gravity',
          'Dialectical Behavior Therapy',
        ],
      },
    ],
    timesTaken: 10,
    category: 'Science&Nature',
    quizDescription: 'Science and Nature quiz number 1',
    quizBanner:
      'https://i.imgur.com/542Jxv9.jpg',
    quizUpvotes: 9,
    quizDownvotes: 1,
    reported: false,
    reportedTimes: 0,
    createdBy: 'SteveTheQwizard',
    aggregateScore: 50,
  },
  {
    quizName: 'Science and Nature quiz two',
    quizQuestions: [
      {
        question: 'Which of these bones is hardest to break?',
        correctAnswer: 'Femur',
        incorrectAnswers: ['Cranium', 'Humerus', 'Tibia'],
      },
      {
        question:
          'Rhinoplasty is a surgical procedure on what part of the human body?',
        correctAnswer: 'Nose',
        incorrectAnswers: ['Ears', 'Chin', 'Neck'],
      },
      {
        question:
          'To the nearest minute, how long does it take for light to travel from the Sun to the Earth?',
        correctAnswer: '8 Minutes',
        incorrectAnswers: ['6 Minutes', '2 Minutes', '12 Minutes'],
      },
      {
        question: 'Which chemical element has the lowest boiling point?',
        correctAnswer: 'Helium',
        incorrectAnswers: ['Hydrogen', 'Neon', 'Nitrogen'],
      },
      {
        question:
          'An organic compound is considered an alcohol if it has what functional group?',
        correctAnswer: 'Hydroxyl',
        incorrectAnswers: ['Carbonyl', 'Alkyl', 'Aldehyde'],
      },
      {
        question: 'Au on the Periodic Table refers to which element?',
        correctAnswer: 'Gold',
        incorrectAnswers: ['Silver', 'Oxygen', 'Nickel'],
      },
      {
        question:
          'All the following metal elements are liquids at or near room temperature EXCEPT:',
        correctAnswer: 'Beryllium',
        incorrectAnswers: ['Gallium', 'Caesium', 'Mercury'],
      },
      {
        question:
          'How many officially recognized dwarf planets in the solar system are named after Polynesian deities?',
        correctAnswer: '2',
        incorrectAnswers: ['0', '1', '5'],
      },
      {
        question: 'Folic acid is the synthetic form of which vitamin?',
        correctAnswer: 'Vitamin B',
        incorrectAnswers: ['Vitamin A', 'Vitamin C', 'Vitamin D'],
      },
      {
        question: 'What term is best associated with Sigmund Freud?',
        correctAnswer: 'Psychoanalysis',
        incorrectAnswers: [
          'Cognitive-Behavioral Therapy',
          'Theory of Gravity',
          'Dialectical Behavior Therapy',
        ],
      },
    ],
    timesTaken: 20,
    category: 'Science&Nature',
    quizDescription: 'Science and Nature quiz number 2',
    quizBanner:
      'https://i.imgur.com/542Jxv9.jpg',
    quizUpvotes: 9,
    quizDownvotes: 1,
    reported: false,
    reportedTimes: 0,
    createdBy: 'SteveTheQwizard',
    aggregateScore: 150,
  },
  {
    quizName: 'Science and Nature quiz three',
    quizQuestions: [
      {
        question: 'Which of these bones is hardest to break?',
        correctAnswer: 'Femur',
        incorrectAnswers: ['Cranium', 'Humerus', 'Tibia'],
      },
      {
        question:
          'Rhinoplasty is a surgical procedure on what part of the human body?',
        correctAnswer: 'Nose',
        incorrectAnswers: ['Ears', 'Chin', 'Neck'],
      },
      {
        question:
          'To the nearest minute, how long does it take for light to travel from the Sun to the Earth?',
        correctAnswer: '8 Minutes',
        incorrectAnswers: ['6 Minutes', '2 Minutes', '12 Minutes'],
      },
      {
        question: 'Which chemical element has the lowest boiling point?',
        correctAnswer: 'Helium',
        incorrectAnswers: ['Hydrogen', 'Neon', 'Nitrogen'],
      },
      {
        question:
          'An organic compound is considered an alcohol if it has what functional group?',
        correctAnswer: 'Hydroxyl',
        incorrectAnswers: ['Carbonyl', 'Alkyl', 'Aldehyde'],
      },
      {
        question: 'Au on the Periodic Table refers to which element?',
        correctAnswer: 'Gold',
        incorrectAnswers: ['Silver', 'Oxygen', 'Nickel'],
      },
      {
        question:
          'All the following metal elements are liquids at or near room temperature EXCEPT:',
        correctAnswer: 'Beryllium',
        incorrectAnswers: ['Gallium', 'Caesium', 'Mercury'],
      },
      {
        question:
          'How many officially recognized dwarf planets in the solar system are named after Polynesian deities?',
        correctAnswer: '2',
        incorrectAnswers: ['0', '1', '5'],
      },
      {
        question: 'Folic acid is the synthetic form of which vitamin?',
        correctAnswer: 'Vitamin B',
        incorrectAnswers: ['Vitamin A', 'Vitamin C', 'Vitamin D'],
      },
      {
        question: 'What term is best associated with Sigmund Freud?',
        correctAnswer: 'Psychoanalysis',
        incorrectAnswers: [
          'Cognitive-Behavioral Therapy',
          'Theory of Gravity',
          'Dialectical Behavior Therapy',
        ],
      },
    ],
    timesTaken: 30,
    category: 'Science&Nature',
    quizDescription: 'Science and Nature quiz number 3',
    quizBanner:
      'https://i.imgur.com/542Jxv9.jpg',
    quizUpvotes: 19,
    quizDownvotes: 11,
    reported: false,
    reportedTimes: 0,
    createdBy: 'SteveTheQwizard',
    aggregateScore: 270,
  },
  {
    quizName: 'Science and Nature quiz four',
    quizQuestions: [
      {
        question: 'Which of these bones is hardest to break?',
        correctAnswer: 'Femur',
        incorrectAnswers: ['Cranium', 'Humerus', 'Tibia'],
      },
      {
        question:
          'Rhinoplasty is a surgical procedure on what part of the human body?',
        correctAnswer: 'Nose',
        incorrectAnswers: ['Ears', 'Chin', 'Neck'],
      },
      {
        question:
          'To the nearest minute, how long does it take for light to travel from the Sun to the Earth?',
        correctAnswer: '8 Minutes',
        incorrectAnswers: ['6 Minutes', '2 Minutes', '12 Minutes'],
      },
      {
        question: 'Which chemical element has the lowest boiling point?',
        correctAnswer: 'Helium',
        incorrectAnswers: ['Hydrogen', 'Neon', 'Nitrogen'],
      },
      {
        question:
          'An organic compound is considered an alcohol if it has what functional group?',
        correctAnswer: 'Hydroxyl',
        incorrectAnswers: ['Carbonyl', 'Alkyl', 'Aldehyde'],
      },
      {
        question: 'Au on the Periodic Table refers to which element?',
        correctAnswer: 'Gold',
        incorrectAnswers: ['Silver', 'Oxygen', 'Nickel'],
      },
      {
        question:
          'All the following metal elements are liquids at or near room temperature EXCEPT:',
        correctAnswer: 'Beryllium',
        incorrectAnswers: ['Gallium', 'Caesium', 'Mercury'],
      },
      {
        question:
          'How many officially recognized dwarf planets in the solar system are named after Polynesian deities?',
        correctAnswer: '2',
        incorrectAnswers: ['0', '1', '5'],
      },
      {
        question: 'Folic acid is the synthetic form of which vitamin?',
        correctAnswer: 'Vitamin B',
        incorrectAnswers: ['Vitamin A', 'Vitamin C', 'Vitamin D'],
      },
      {
        question: 'What term is best associated with Sigmund Freud?',
        correctAnswer: 'Psychoanalysis',
        incorrectAnswers: [
          'Cognitive-Behavioral Therapy',
          'Theory of Gravity',
          'Dialectical Behavior Therapy',
        ],
      },
    ],
    timesTaken: 40,
    category: 'Science&Nature',
    quizDescription: 'Science and Nature quiz number 4',
    quizBanner:
      'https://i.imgur.com/542Jxv9.jpg',
    quizUpvotes: 29,
    quizDownvotes: 1,
    reported: false,
    reportedTimes: 0,
    createdBy: 'SteveTheQwizard',
    aggregateScore: 420,
  },
  {
    quizName: 'Science and Nature quiz five',
    quizQuestions: [
      {
        question: 'Which of these bones is hardest to break?',
        correctAnswer: 'Femur',
        incorrectAnswers: ['Cranium', 'Humerus', 'Tibia'],
      },
      {
        question:
          'Rhinoplasty is a surgical procedure on what part of the human body?',
        correctAnswer: 'Nose',
        incorrectAnswers: ['Ears', 'Chin', 'Neck'],
      },
      {
        question:
          'To the nearest minute, how long does it take for light to travel from the Sun to the Earth?',
        correctAnswer: '8 Minutes',
        incorrectAnswers: ['6 Minutes', '2 Minutes', '12 Minutes'],
      },
      {
        question: 'Which chemical element has the lowest boiling point?',
        correctAnswer: 'Helium',
        incorrectAnswers: ['Hydrogen', 'Neon', 'Nitrogen'],
      },
      {
        question:
          'An organic compound is considered an alcohol if it has what functional group?',
        correctAnswer: 'Hydroxyl',
        incorrectAnswers: ['Carbonyl', 'Alkyl', 'Aldehyde'],
      },
      {
        question: 'Au on the Periodic Table refers to which element?',
        correctAnswer: 'Gold',
        incorrectAnswers: ['Silver', 'Oxygen', 'Nickel'],
      },
      {
        question:
          'All the following metal elements are liquids at or near room temperature EXCEPT:',
        correctAnswer: 'Beryllium',
        incorrectAnswers: ['Gallium', 'Caesium', 'Mercury'],
      },
      {
        question:
          'How many officially recognized dwarf planets in the solar system are named after Polynesian deities?',
        correctAnswer: '2',
        incorrectAnswers: ['0', '1', '5'],
      },
      {
        question: 'Folic acid is the synthetic form of which vitamin?',
        correctAnswer: 'Vitamin B',
        incorrectAnswers: ['Vitamin A', 'Vitamin C', 'Vitamin D'],
      },
      {
        question: 'What term is best associated with Sigmund Freud?',
        correctAnswer: 'Psychoanalysis',
        incorrectAnswers: [
          'Cognitive-Behavioral Therapy',
          'Theory of Gravity',
          'Dialectical Behavior Therapy',
        ],
      },
    ],
    timesTaken: 50,
    category: 'Science&Nature',
    quizDescription: 'Science and Nature quiz number 5',
    quizBanner:
      'https://i.imgur.com/542Jxv9.jpg',
    quizUpvotes: 29,
    quizDownvotes: 16,
    reported: false,
    reportedTimes: 0,
    createdBy: 'SteveTheQwizard',
    aggregateScore: 350,
  },
  {
    quizName: 'Animal quiz one',
    quizQuestions: [
      {
        question:
          'What was the name of the Ethiopian Wolf before they knew it was related to wolves?',
        correctAnswer: 'Simien Jackel',
        incorrectAnswers: [
          'Ethiopian Coyote',
          'Amharic Fox',
          'Canis Simiensis',
        ],
      },
      {
        question:
          'A carnivorous animal eats flesh, what does a nucivorous animal eat?',
        correctAnswer: 'Nuts',
        incorrectAnswers: ['Nothing', 'Fruit', 'Seaweed'],
      },
      {
        question: 'What is the fastest land animal?',
        correctAnswer: 'Cheetah',
        incorrectAnswers: [
          'Lion',
          'Thomson&rsquo;s Gazelle',
          'Pronghorn Antelope',
        ],
      },
      {
        question: 'What is the scientific name for modern day humans?',
        correctAnswer: 'Homo Sapiens',
        incorrectAnswers: [
          'Homo Ergaster',
          'Homo Erectus',
          'Homo Neanderthalensis',
        ],
      },
      {
        question:
          'The Kākāpō is a large, flightless, nocturnal parrot native to which country?',
        correctAnswer: 'New Zealand',
        incorrectAnswers: ['South Africa', 'Australia', 'Madagascar'],
      },
      {
        question: 'Hippocampus is the Latin name for which marine creature?',
        correctAnswer: 'Seahorse',
        incorrectAnswers: ['Dolphin', 'Whale', 'Octopus'],
      },
      {
        question: 'Cashmere is the wool from which kind of animal?',
        correctAnswer: 'Goat',
        incorrectAnswers: ['Sheep', 'Camel', 'Llama'],
      },
      {
        question:
          'What scientific suborder does the family Hyaenidae belong to?',
        correctAnswer: 'Feliformia',
        incorrectAnswers: ['Haplorhini', 'Caniformia', 'Ciconiiformes'],
      },
      {
        question: 'What is the scientific name of the cheetah?',
        correctAnswer: 'Acinonyx jubatus',
        incorrectAnswers: ['Panthera onca', 'Lynx rufus', 'Felis catus'],
      },
      {
        question: 'What is the scientific name of the Budgerigar?',
        correctAnswer: 'Melopsittacus undulatus',
        incorrectAnswers: [
          'Nymphicus hollandicus',
          'Pyrrhura molinae',
          'Ara macao',
        ],
      },
    ],
    timesTaken: 19,
    category: 'Animals',
    quizDescription: 'Animal quiz number 1',
    quizBanner:
      'https://i.imgur.com/4wZslIx.png',
    quizUpvotes: 12,
    quizDownvotes: 4,
    reported: false,
    reportedTimes: 0,
    createdBy: 'LizTheQuizWiz',
    aggregateScore: 130,
  },
  {
    quizName: 'Animal quiz two',
    quizQuestions: [
      {
        question:
          'What was the name of the Ethiopian Wolf before they knew it was related to wolves?',
        correctAnswer: 'Simien Jackel',
        incorrectAnswers: [
          'Ethiopian Coyote',
          'Amharic Fox',
          'Canis Simiensis',
        ],
      },
      {
        question:
          'A carnivorous animal eats flesh, what does a nucivorous animal eat?',
        correctAnswer: 'Nuts',
        incorrectAnswers: ['Nothing', 'Fruit', 'Seaweed'],
      },
      {
        question: 'What is the fastest land animal?',
        correctAnswer: 'Cheetah',
        incorrectAnswers: [
          'Lion',
          'Thomson&rsquo;s Gazelle',
          'Pronghorn Antelope',
        ],
      },
      {
        question: 'What is the scientific name for modern day humans?',
        correctAnswer: 'Homo Sapiens',
        incorrectAnswers: [
          'Homo Ergaster',
          'Homo Erectus',
          'Homo Neanderthalensis',
        ],
      },
      {
        question:
          'The Kākāpō is a large, flightless, nocturnal parrot native to which country?',
        correctAnswer: 'New Zealand',
        incorrectAnswers: ['South Africa', 'Australia', 'Madagascar'],
      },
      {
        question: 'Hippocampus is the Latin name for which marine creature?',
        correctAnswer: 'Seahorse',
        incorrectAnswers: ['Dolphin', 'Whale', 'Octopus'],
      },
      {
        question: 'Cashmere is the wool from which kind of animal?',
        correctAnswer: 'Goat',
        incorrectAnswers: ['Sheep', 'Camel', 'Llama'],
      },
      {
        question:
          'What scientific suborder does the family Hyaenidae belong to?',
        correctAnswer: 'Feliformia',
        incorrectAnswers: ['Haplorhini', 'Caniformia', 'Ciconiiformes'],
      },
      {
        question: 'What is the scientific name of the cheetah?',
        correctAnswer: 'Acinonyx jubatus',
        incorrectAnswers: ['Panthera onca', 'Lynx rufus', 'Felis catus'],
      },
      {
        question: 'What is the scientific name of the Budgerigar?',
        correctAnswer: 'Melopsittacus undulatus',
        incorrectAnswers: [
          'Nymphicus hollandicus',
          'Pyrrhura molinae',
          'Ara macao',
        ],
      },
    ],
    timesTaken: 20,
    category: 'Animals',
    quizDescription: 'Animal quiz number 2',
    quizBanner:
      'https://i.imgur.com/4wZslIx.png',
    quizUpvotes: 12,
    quizDownvotes: 4,
    reported: false,
    reportedTimes: 0,
    createdBy: 'LizTheQuizWiz',
    aggregateScore: 130,
  },
  {
    quizName: 'Animal quiz three',
    quizQuestions: [
      {
        question:
          'What was the name of the Ethiopian Wolf before they knew it was related to wolves?',
        correctAnswer: 'Simien Jackel',
        incorrectAnswers: [
          'Ethiopian Coyote',
          'Amharic Fox',
          'Canis Simiensis',
        ],
      },
      {
        question:
          'A carnivorous animal eats flesh, what does a nucivorous animal eat?',
        correctAnswer: 'Nuts',
        incorrectAnswers: ['Nothing', 'Fruit', 'Seaweed'],
      },
      {
        question: 'What is the fastest land animal?',
        correctAnswer: 'Cheetah',
        incorrectAnswers: [
          'Lion',
          'Thomson&rsquo;s Gazelle',
          'Pronghorn Antelope',
        ],
      },
      {
        question: 'What is the scientific name for modern day humans?',
        correctAnswer: 'Homo Sapiens',
        incorrectAnswers: [
          'Homo Ergaster',
          'Homo Erectus',
          'Homo Neanderthalensis',
        ],
      },
      {
        question:
          'The Kākāpō is a large, flightless, nocturnal parrot native to which country?',
        correctAnswer: 'New Zealand',
        incorrectAnswers: ['South Africa', 'Australia', 'Madagascar'],
      },
      {
        question: 'Hippocampus is the Latin name for which marine creature?',
        correctAnswer: 'Seahorse',
        incorrectAnswers: ['Dolphin', 'Whale', 'Octopus'],
      },
      {
        question: 'Cashmere is the wool from which kind of animal?',
        correctAnswer: 'Goat',
        incorrectAnswers: ['Sheep', 'Camel', 'Llama'],
      },
      {
        question:
          'What scientific suborder does the family Hyaenidae belong to?',
        correctAnswer: 'Feliformia',
        incorrectAnswers: ['Haplorhini', 'Caniformia', 'Ciconiiformes'],
      },
      {
        question: 'What is the scientific name of the cheetah?',
        correctAnswer: 'Acinonyx jubatus',
        incorrectAnswers: ['Panthera onca', 'Lynx rufus', 'Felis catus'],
      },
      {
        question: 'What is the scientific name of the Budgerigar?',
        correctAnswer: 'Melopsittacus undulatus',
        incorrectAnswers: [
          'Nymphicus hollandicus',
          'Pyrrhura molinae',
          'Ara macao',
        ],
      },
    ],
    timesTaken: 30,
    category: 'Animals',
    quizDescription: 'Animal quiz number 3',
    quizBanner:
      'https://i.imgur.com/4wZslIx.png',
    quizUpvotes: 20,
    quizDownvotes: 4,
    reported: false,
    reportedTimes: 0,
    createdBy: 'LizTheQuizWiz',
    aggregateScore: 250,
  },
  {
    quizName: 'Animal quiz four',
    quizQuestions: [
      {
        question:
          'What was the name of the Ethiopian Wolf before they knew it was related to wolves?',
        correctAnswer: 'Simien Jackel',
        incorrectAnswers: [
          'Ethiopian Coyote',
          'Amharic Fox',
          'Canis Simiensis',
        ],
      },
      {
        question:
          'A carnivorous animal eats flesh, what does a nucivorous animal eat?',
        correctAnswer: 'Nuts',
        incorrectAnswers: ['Nothing', 'Fruit', 'Seaweed'],
      },
      {
        question: 'What is the fastest land animal?',
        correctAnswer: 'Cheetah',
        incorrectAnswers: [
          'Lion',
          'Thomson&rsquo;s Gazelle',
          'Pronghorn Antelope',
        ],
      },
      {
        question: 'What is the scientific name for modern day humans?',
        correctAnswer: 'Homo Sapiens',
        incorrectAnswers: [
          'Homo Ergaster',
          'Homo Erectus',
          'Homo Neanderthalensis',
        ],
      },
      {
        question:
          'The Kākāpō is a large, flightless, nocturnal parrot native to which country?',
        correctAnswer: 'New Zealand',
        incorrectAnswers: ['South Africa', 'Australia', 'Madagascar'],
      },
      {
        question: 'Hippocampus is the Latin name for which marine creature?',
        correctAnswer: 'Seahorse',
        incorrectAnswers: ['Dolphin', 'Whale', 'Octopus'],
      },
      {
        question: 'Cashmere is the wool from which kind of animal?',
        correctAnswer: 'Goat',
        incorrectAnswers: ['Sheep', 'Camel', 'Llama'],
      },
      {
        question:
          'What scientific suborder does the family Hyaenidae belong to?',
        correctAnswer: 'Feliformia',
        incorrectAnswers: ['Haplorhini', 'Caniformia', 'Ciconiiformes'],
      },
      {
        question: 'What is the scientific name of the cheetah?',
        correctAnswer: 'Acinonyx jubatus',
        incorrectAnswers: ['Panthera onca', 'Lynx rufus', 'Felis catus'],
      },
      {
        question: 'What is the scientific name of the Budgerigar?',
        correctAnswer: 'Melopsittacus undulatus',
        incorrectAnswers: [
          'Nymphicus hollandicus',
          'Pyrrhura molinae',
          'Ara macao',
        ],
      },
    ],
    timesTaken: 40,
    category: 'Animals',
    quizDescription: 'Animal quiz number 4',
    quizBanner:
      'https://i.imgur.com/4wZslIx.png',
    quizUpvotes: 25,
    quizDownvotes: 4,
    reported: false,
    reportedTimes: 0,
    createdBy: 'LizTheQuizWiz',
    aggregateScore: 320,
  },
  {
    quizName: 'Animal quiz five',
    quizQuestions: [
      {
        question:
          'What was the name of the Ethiopian Wolf before they knew it was related to wolves?',
        correctAnswer: 'Simien Jackel',
        incorrectAnswers: [
          'Ethiopian Coyote',
          'Amharic Fox',
          'Canis Simiensis',
        ],
      },
      {
        question:
          'A carnivorous animal eats flesh, what does a nucivorous animal eat?',
        correctAnswer: 'Nuts',
        incorrectAnswers: ['Nothing', 'Fruit', 'Seaweed'],
      },
      {
        question: 'What is the fastest land animal?',
        correctAnswer: 'Cheetah',
        incorrectAnswers: [
          'Lion',
          'Thomson&rsquo;s Gazelle',
          'Pronghorn Antelope',
        ],
      },
      {
        question: 'What is the scientific name for modern day humans?',
        correctAnswer: 'Homo Sapiens',
        incorrectAnswers: [
          'Homo Ergaster',
          'Homo Erectus',
          'Homo Neanderthalensis',
        ],
      },
      {
        question:
          'The Kākāpō is a large, flightless, nocturnal parrot native to which country?',
        correctAnswer: 'New Zealand',
        incorrectAnswers: ['South Africa', 'Australia', 'Madagascar'],
      },
      {
        question: 'Hippocampus is the Latin name for which marine creature?',
        correctAnswer: 'Seahorse',
        incorrectAnswers: ['Dolphin', 'Whale', 'Octopus'],
      },
      {
        question: 'Cashmere is the wool from which kind of animal?',
        correctAnswer: 'Goat',
        incorrectAnswers: ['Sheep', 'Camel', 'Llama'],
      },
      {
        question:
          'What scientific suborder does the family Hyaenidae belong to?',
        correctAnswer: 'Feliformia',
        incorrectAnswers: ['Haplorhini', 'Caniformia', 'Ciconiiformes'],
      },
      {
        question: 'What is the scientific name of the cheetah?',
        correctAnswer: 'Acinonyx jubatus',
        incorrectAnswers: ['Panthera onca', 'Lynx rufus', 'Felis catus'],
      },
      {
        question: 'What is the scientific name of the Budgerigar?',
        correctAnswer: 'Melopsittacus undulatus',
        incorrectAnswers: [
          'Nymphicus hollandicus',
          'Pyrrhura molinae',
          'Ara macao',
        ],
      },
    ],
    timesTaken: 50,
    category: 'Animals',
    quizDescription: 'Animal quiz number 5',
    quizBanner:
      'https://i.imgur.com/4wZslIx.png',
    quizUpvotes: 36,
    quizDownvotes: 4,
    reported: false,
    reportedTimes: 0,
    createdBy: 'LizTheQuizWiz',
    aggregateScore: 480,
  },
  {
    quizName: 'Pop Culture quiz one',
    quizQuestions: [
      {
        question:
          'What was the name of the Ethiopian Wolf before they knew it was related to wolves?',
        correctAnswer: 'Simien Jackel',
        incorrectAnswers: [
          'Ethiopian Coyote',
          'Amharic Fox',
          'Canis Simiensis',
        ],
      },
      {
        question:
          'A carnivorous animal eats flesh, what does a nucivorous animal eat?',
        correctAnswer: 'Nuts',
        incorrectAnswers: ['Nothing', 'Fruit', 'Seaweed'],
      },
      {
        question: 'What is the fastest land animal?',
        correctAnswer: 'Cheetah',
        incorrectAnswers: [
          'Lion',
          'Thomson&rsquo;s Gazelle',
          'Pronghorn Antelope',
        ],
      },
      {
        question: 'What is the scientific name for modern day humans?',
        correctAnswer: 'Homo Sapiens',
        incorrectAnswers: [
          'Homo Ergaster',
          'Homo Erectus',
          'Homo Neanderthalensis',
        ],
      },
      {
        question:
          'The Kākāpō is a large, flightless, nocturnal parrot native to which country?',
        correctAnswer: 'New Zealand',
        incorrectAnswers: ['South Africa', 'Australia', 'Madagascar'],
      },
      {
        question: 'Hippocampus is the Latin name for which marine creature?',
        correctAnswer: 'Seahorse',
        incorrectAnswers: ['Dolphin', 'Whale', 'Octopus'],
      },
      {
        question: 'Cashmere is the wool from which kind of animal?',
        correctAnswer: 'Goat',
        incorrectAnswers: ['Sheep', 'Camel', 'Llama'],
      },
      {
        question:
          'What scientific suborder does the family Hyaenidae belong to?',
        correctAnswer: 'Feliformia',
        incorrectAnswers: ['Haplorhini', 'Caniformia', 'Ciconiiformes'],
      },
      {
        question: 'What is the scientific name of the cheetah?',
        correctAnswer: 'Acinonyx jubatus',
        incorrectAnswers: ['Panthera onca', 'Lynx rufus', 'Felis catus'],
      },
      {
        question: 'What is the scientific name of the Budgerigar?',
        correctAnswer: 'Melopsittacus undulatus',
        incorrectAnswers: [
          'Nymphicus hollandicus',
          'Pyrrhura molinae',
          'Ara macao',
        ],
      },
    ],
    timesTaken: 10,
    category: 'Pop Culture',
    quizDescription: 'Pop Culture quiz number 1',
    quizBanner:
      'https://i.imgur.com/ASQMn4Y.jpg',
    quizUpvotes: 12,
    quizDownvotes: 4,
    reported: false,
    reportedTimes: 0,
    createdBy: 'LizTheQuizWiz',
    aggregateScore: 130,
  },
  {
    quizName: 'Pop Culture quiz two',
    quizQuestions: [
      {
        question:
          'What was the name of the Ethiopian Wolf before they knew it was related to wolves?',
        correctAnswer: 'Simien Jackel',
        incorrectAnswers: [
          'Ethiopian Coyote',
          'Amharic Fox',
          'Canis Simiensis',
        ],
      },
      {
        question:
          'A carnivorous animal eats flesh, what does a nucivorous animal eat?',
        correctAnswer: 'Nuts',
        incorrectAnswers: ['Nothing', 'Fruit', 'Seaweed'],
      },
      {
        question: 'What is the fastest land animal?',
        correctAnswer: 'Cheetah',
        incorrectAnswers: [
          'Lion',
          'Thomson&rsquo;s Gazelle',
          'Pronghorn Antelope',
        ],
      },
      {
        question: 'What is the scientific name for modern day humans?',
        correctAnswer: 'Homo Sapiens',
        incorrectAnswers: [
          'Homo Ergaster',
          'Homo Erectus',
          'Homo Neanderthalensis',
        ],
      },
      {
        question:
          'The Kākāpō is a large, flightless, nocturnal parrot native to which country?',
        correctAnswer: 'New Zealand',
        incorrectAnswers: ['South Africa', 'Australia', 'Madagascar'],
      },
      {
        question: 'Hippocampus is the Latin name for which marine creature?',
        correctAnswer: 'Seahorse',
        incorrectAnswers: ['Dolphin', 'Whale', 'Octopus'],
      },
      {
        question: 'Cashmere is the wool from which kind of animal?',
        correctAnswer: 'Goat',
        incorrectAnswers: ['Sheep', 'Camel', 'Llama'],
      },
      {
        question:
          'What scientific suborder does the family Hyaenidae belong to?',
        correctAnswer: 'Feliformia',
        incorrectAnswers: ['Haplorhini', 'Caniformia', 'Ciconiiformes'],
      },
      {
        question: 'What is the scientific name of the cheetah?',
        correctAnswer: 'Acinonyx jubatus',
        incorrectAnswers: ['Panthera onca', 'Lynx rufus', 'Felis catus'],
      },
      {
        question: 'What is the scientific name of the Budgerigar?',
        correctAnswer: 'Melopsittacus undulatus',
        incorrectAnswers: [
          'Nymphicus hollandicus',
          'Pyrrhura molinae',
          'Ara macao',
        ],
      },
    ],
    timesTaken: 20,
    category: 'Pop Culture',
    quizDescription: 'Pop Culture quiz number 2',
    quizBanner:
      'https://i.imgur.com/ASQMn4Y.jpg',
    quizUpvotes: 10,
    quizDownvotes: 4,
    reported: false,
    reportedTimes: 0,
    createdBy: 'LizTheQuizWiz',
    aggregateScore: 130,
  },
  {
    quizName: 'Pop Culture quiz three',
    quizQuestions: [
      {
        question:
          'What was the name of the Ethiopian Wolf before they knew it was related to wolves?',
        correctAnswer: 'Simien Jackel',
        incorrectAnswers: [
          'Ethiopian Coyote',
          'Amharic Fox',
          'Canis Simiensis',
        ],
      },
      {
        question:
          'A carnivorous animal eats flesh, what does a nucivorous animal eat?',
        correctAnswer: 'Nuts',
        incorrectAnswers: ['Nothing', 'Fruit', 'Seaweed'],
      },
      {
        question: 'What is the fastest land animal?',
        correctAnswer: 'Cheetah',
        incorrectAnswers: [
          'Lion',
          'Thomson&rsquo;s Gazelle',
          'Pronghorn Antelope',
        ],
      },
      {
        question: 'What is the scientific name for modern day humans?',
        correctAnswer: 'Homo Sapiens',
        incorrectAnswers: [
          'Homo Ergaster',
          'Homo Erectus',
          'Homo Neanderthalensis',
        ],
      },
      {
        question:
          'The Kākāpō is a large, flightless, nocturnal parrot native to which country?',
        correctAnswer: 'New Zealand',
        incorrectAnswers: ['South Africa', 'Australia', 'Madagascar'],
      },
      {
        question: 'Hippocampus is the Latin name for which marine creature?',
        correctAnswer: 'Seahorse',
        incorrectAnswers: ['Dolphin', 'Whale', 'Octopus'],
      },
      {
        question: 'Cashmere is the wool from which kind of animal?',
        correctAnswer: 'Goat',
        incorrectAnswers: ['Sheep', 'Camel', 'Llama'],
      },
      {
        question:
          'What scientific suborder does the family Hyaenidae belong to?',
        correctAnswer: 'Feliformia',
        incorrectAnswers: ['Haplorhini', 'Caniformia', 'Ciconiiformes'],
      },
      {
        question: 'What is the scientific name of the cheetah?',
        correctAnswer: 'Acinonyx jubatus',
        incorrectAnswers: ['Panthera onca', 'Lynx rufus', 'Felis catus'],
      },
      {
        question: 'What is the scientific name of the Budgerigar?',
        correctAnswer: 'Melopsittacus undulatus',
        incorrectAnswers: [
          'Nymphicus hollandicus',
          'Pyrrhura molinae',
          'Ara macao',
        ],
      },
    ],
    timesTaken: 30,
    category: 'Pop Culture',
    quizDescription: 'Pop Culture quiz number 3',
    quizBanner:
      'https://i.imgur.com/ASQMn4Y.jpg',
    quizUpvotes: 12,
    quizDownvotes: 4,
    reported: false,
    reportedTimes: 0,
    createdBy: 'LizTheQuizWiz',
    aggregateScore: 240,
  },
  {
    quizName: 'Pop Culture quiz four',
    quizQuestions: [
      {
        question:
          'What was the name of the Ethiopian Wolf before they knew it was related to wolves?',
        correctAnswer: 'Simien Jackel',
        incorrectAnswers: [
          'Ethiopian Coyote',
          'Amharic Fox',
          'Canis Simiensis',
        ],
      },
      {
        question:
          'A carnivorous animal eats flesh, what does a nucivorous animal eat?',
        correctAnswer: 'Nuts',
        incorrectAnswers: ['Nothing', 'Fruit', 'Seaweed'],
      },
      {
        question: 'What is the fastest land animal?',
        correctAnswer: 'Cheetah',
        incorrectAnswers: [
          'Lion',
          'Thomson&rsquo;s Gazelle',
          'Pronghorn Antelope',
        ],
      },
      {
        question: 'What is the scientific name for modern day humans?',
        correctAnswer: 'Homo Sapiens',
        incorrectAnswers: [
          'Homo Ergaster',
          'Homo Erectus',
          'Homo Neanderthalensis',
        ],
      },
      {
        question:
          'The Kākāpō is a large, flightless, nocturnal parrot native to which country?',
        correctAnswer: 'New Zealand',
        incorrectAnswers: ['South Africa', 'Australia', 'Madagascar'],
      },
      {
        question: 'Hippocampus is the Latin name for which marine creature?',
        correctAnswer: 'Seahorse',
        incorrectAnswers: ['Dolphin', 'Whale', 'Octopus'],
      },
      {
        question: 'Cashmere is the wool from which kind of animal?',
        correctAnswer: 'Goat',
        incorrectAnswers: ['Sheep', 'Camel', 'Llama'],
      },
      {
        question:
          'What scientific suborder does the family Hyaenidae belong to?',
        correctAnswer: 'Feliformia',
        incorrectAnswers: ['Haplorhini', 'Caniformia', 'Ciconiiformes'],
      },
      {
        question: 'What is the scientific name of the cheetah?',
        correctAnswer: 'Acinonyx jubatus',
        incorrectAnswers: ['Panthera onca', 'Lynx rufus', 'Felis catus'],
      },
      {
        question: 'What is the scientific name of the Budgerigar?',
        correctAnswer: 'Melopsittacus undulatus',
        incorrectAnswers: [
          'Nymphicus hollandicus',
          'Pyrrhura molinae',
          'Ara macao',
        ],
      },
    ],
    timesTaken: 40,
    category: 'Pop Culture',
    quizDescription: 'Pop Culture quiz number 4',
    quizBanner:
      'https://i.imgur.com/ASQMn4Y.jpg',
    quizUpvotes: 22,
    quizDownvotes: 4,
    reported: false,
    reportedTimes: 0,
    createdBy: 'LizTheQuizWiz',
    aggregateScore: 360,
  },
  {
    quizName: 'Pop Culture quiz five',
    quizQuestions: [
      {
        question:
          'What was the name of the Ethiopian Wolf before they knew it was related to wolves?',
        correctAnswer: 'Simien Jackel',
        incorrectAnswers: [
          'Ethiopian Coyote',
          'Amharic Fox',
          'Canis Simiensis',
        ],
      },
      {
        question:
          'A carnivorous animal eats flesh, what does a nucivorous animal eat?',
        correctAnswer: 'Nuts',
        incorrectAnswers: ['Nothing', 'Fruit', 'Seaweed'],
      },
      {
        question: 'What is the fastest land animal?',
        correctAnswer: 'Cheetah',
        incorrectAnswers: [
          'Lion',
          'Thomson&rsquo;s Gazelle',
          'Pronghorn Antelope',
        ],
      },
      {
        question: 'What is the scientific name for modern day humans?',
        correctAnswer: 'Homo Sapiens',
        incorrectAnswers: [
          'Homo Ergaster',
          'Homo Erectus',
          'Homo Neanderthalensis',
        ],
      },
      {
        question:
          'The Kākāpō is a large, flightless, nocturnal parrot native to which country?',
        correctAnswer: 'New Zealand',
        incorrectAnswers: ['South Africa', 'Australia', 'Madagascar'],
      },
      {
        question: 'Hippocampus is the Latin name for which marine creature?',
        correctAnswer: 'Seahorse',
        incorrectAnswers: ['Dolphin', 'Whale', 'Octopus'],
      },
      {
        question: 'Cashmere is the wool from which kind of animal?',
        correctAnswer: 'Goat',
        incorrectAnswers: ['Sheep', 'Camel', 'Llama'],
      },
      {
        question:
          'What scientific suborder does the family Hyaenidae belong to?',
        correctAnswer: 'Feliformia',
        incorrectAnswers: ['Haplorhini', 'Caniformia', 'Ciconiiformes'],
      },
      {
        question: 'What is the scientific name of the cheetah?',
        correctAnswer: 'Acinonyx jubatus',
        incorrectAnswers: ['Panthera onca', 'Lynx rufus', 'Felis catus'],
      },
      {
        question: 'What is the scientific name of the Budgerigar?',
        correctAnswer: 'Melopsittacus undulatus',
        incorrectAnswers: [
          'Nymphicus hollandicus',
          'Pyrrhura molinae',
          'Ara macao',
        ],
      },
    ],
    timesTaken: 50,
    category: 'Pop Culture',
    quizDescription: 'Pop Culture quiz number 5',
    quizBanner:
      'https://i.imgur.com/ASQMn4Y.jpg',
    quizUpvotes: 12,
    quizDownvotes: 4,
    reported: false,
    reportedTimes: 0,
    createdBy: 'LizTheQuizWiz',
    aggregateScore: 420,
  },
  {
    quizName: 'History quiz one',
    quizQuestions: [
      {
        question:
          'What was the name of the Ethiopian Wolf before they knew it was related to wolves?',
        correctAnswer: 'Simien Jackel',
        incorrectAnswers: [
          'Ethiopian Coyote',
          'Amharic Fox',
          'Canis Simiensis',
        ],
      },
      {
        question:
          'A carnivorous animal eats flesh, what does a nucivorous animal eat?',
        correctAnswer: 'Nuts',
        incorrectAnswers: ['Nothing', 'Fruit', 'Seaweed'],
      },
      {
        question: 'What is the fastest land animal?',
        correctAnswer: 'Cheetah',
        incorrectAnswers: [
          'Lion',
          'Thomson&rsquo;s Gazelle',
          'Pronghorn Antelope',
        ],
      },
      {
        question: 'What is the scientific name for modern day humans?',
        correctAnswer: 'Homo Sapiens',
        incorrectAnswers: [
          'Homo Ergaster',
          'Homo Erectus',
          'Homo Neanderthalensis',
        ],
      },
      {
        question:
          'The Kākāpō is a large, flightless, nocturnal parrot native to which country?',
        correctAnswer: 'New Zealand',
        incorrectAnswers: ['South Africa', 'Australia', 'Madagascar'],
      },
      {
        question: 'Hippocampus is the Latin name for which marine creature?',
        correctAnswer: 'Seahorse',
        incorrectAnswers: ['Dolphin', 'Whale', 'Octopus'],
      },
      {
        question: 'Cashmere is the wool from which kind of animal?',
        correctAnswer: 'Goat',
        incorrectAnswers: ['Sheep', 'Camel', 'Llama'],
      },
      {
        question:
          'What scientific suborder does the family Hyaenidae belong to?',
        correctAnswer: 'Feliformia',
        incorrectAnswers: ['Haplorhini', 'Caniformia', 'Ciconiiformes'],
      },
      {
        question: 'What is the scientific name of the cheetah?',
        correctAnswer: 'Acinonyx jubatus',
        incorrectAnswers: ['Panthera onca', 'Lynx rufus', 'Felis catus'],
      },
      {
        question: 'What is the scientific name of the Budgerigar?',
        correctAnswer: 'Melopsittacus undulatus',
        incorrectAnswers: [
          'Nymphicus hollandicus',
          'Pyrrhura molinae',
          'Ara macao',
        ],
      },
    ],
    timesTaken: 10,
    category: 'History',
    quizDescription: 'History quiz number 1',
    quizBanner:
      'https://i.imgur.com/vW2wWam.jpg',
    quizUpvotes: 2,
    quizDownvotes: 4,
    reported: false,
    reportedTimes: 0,
    createdBy: 'LizTheQuizWiz',
    aggregateScore: 75,
  },
  {
    quizName: 'History quiz two',
    quizQuestions: [
      {
        question:
          'What was the name of the Ethiopian Wolf before they knew it was related to wolves?',
        correctAnswer: 'Simien Jackel',
        incorrectAnswers: [
          'Ethiopian Coyote',
          'Amharic Fox',
          'Canis Simiensis',
        ],
      },
      {
        question:
          'A carnivorous animal eats flesh, what does a nucivorous animal eat?',
        correctAnswer: 'Nuts',
        incorrectAnswers: ['Nothing', 'Fruit', 'Seaweed'],
      },
      {
        question: 'What is the fastest land animal?',
        correctAnswer: 'Cheetah',
        incorrectAnswers: [
          'Lion',
          'Thomson&rsquo;s Gazelle',
          'Pronghorn Antelope',
        ],
      },
      {
        question: 'What is the scientific name for modern day humans?',
        correctAnswer: 'Homo Sapiens',
        incorrectAnswers: [
          'Homo Ergaster',
          'Homo Erectus',
          'Homo Neanderthalensis',
        ],
      },
      {
        question:
          'The Kākāpō is a large, flightless, nocturnal parrot native to which country?',
        correctAnswer: 'New Zealand',
        incorrectAnswers: ['South Africa', 'Australia', 'Madagascar'],
      },
      {
        question: 'Hippocampus is the Latin name for which marine creature?',
        correctAnswer: 'Seahorse',
        incorrectAnswers: ['Dolphin', 'Whale', 'Octopus'],
      },
      {
        question: 'Cashmere is the wool from which kind of animal?',
        correctAnswer: 'Goat',
        incorrectAnswers: ['Sheep', 'Camel', 'Llama'],
      },
      {
        question:
          'What scientific suborder does the family Hyaenidae belong to?',
        correctAnswer: 'Feliformia',
        incorrectAnswers: ['Haplorhini', 'Caniformia', 'Ciconiiformes'],
      },
      {
        question: 'What is the scientific name of the cheetah?',
        correctAnswer: 'Acinonyx jubatus',
        incorrectAnswers: ['Panthera onca', 'Lynx rufus', 'Felis catus'],
      },
      {
        question: 'What is the scientific name of the Budgerigar?',
        correctAnswer: 'Melopsittacus undulatus',
        incorrectAnswers: [
          'Nymphicus hollandicus',
          'Pyrrhura molinae',
          'Ara macao',
        ],
      },
    ],
    timesTaken: 20,
    category: 'History',
    quizDescription: 'History quiz number 2',
    quizBanner:
      'https://i.imgur.com/vW2wWam.jpg',
    quizUpvotes: 12,
    quizDownvotes: 4,
    reported: false,
    reportedTimes: 0,
    createdBy: 'LizTheQuizWiz',
    aggregateScore: 160,
  },
  {
    quizName: 'History quiz three',
    quizQuestions: [
      {
        question:
          'What was the name of the Ethiopian Wolf before they knew it was related to wolves?',
        correctAnswer: 'Simien Jackel',
        incorrectAnswers: [
          'Ethiopian Coyote',
          'Amharic Fox',
          'Canis Simiensis',
        ],
      },
      {
        question:
          'A carnivorous animal eats flesh, what does a nucivorous animal eat?',
        correctAnswer: 'Nuts',
        incorrectAnswers: ['Nothing', 'Fruit', 'Seaweed'],
      },
      {
        question: 'What is the fastest land animal?',
        correctAnswer: 'Cheetah',
        incorrectAnswers: [
          'Lion',
          'Thomson&rsquo;s Gazelle',
          'Pronghorn Antelope',
        ],
      },
      {
        question: 'What is the scientific name for modern day humans?',
        correctAnswer: 'Homo Sapiens',
        incorrectAnswers: [
          'Homo Ergaster',
          'Homo Erectus',
          'Homo Neanderthalensis',
        ],
      },
      {
        question:
          'The Kākāpō is a large, flightless, nocturnal parrot native to which country?',
        correctAnswer: 'New Zealand',
        incorrectAnswers: ['South Africa', 'Australia', 'Madagascar'],
      },
      {
        question: 'Hippocampus is the Latin name for which marine creature?',
        correctAnswer: 'Seahorse',
        incorrectAnswers: ['Dolphin', 'Whale', 'Octopus'],
      },
      {
        question: 'Cashmere is the wool from which kind of animal?',
        correctAnswer: 'Goat',
        incorrectAnswers: ['Sheep', 'Camel', 'Llama'],
      },
      {
        question:
          'What scientific suborder does the family Hyaenidae belong to?',
        correctAnswer: 'Feliformia',
        incorrectAnswers: ['Haplorhini', 'Caniformia', 'Ciconiiformes'],
      },
      {
        question: 'What is the scientific name of the cheetah?',
        correctAnswer: 'Acinonyx jubatus',
        incorrectAnswers: ['Panthera onca', 'Lynx rufus', 'Felis catus'],
      },
      {
        question: 'What is the scientific name of the Budgerigar?',
        correctAnswer: 'Melopsittacus undulatus',
        incorrectAnswers: [
          'Nymphicus hollandicus',
          'Pyrrhura molinae',
          'Ara macao',
        ],
      },
    ],
    timesTaken: 30,
    category: 'History',
    quizDescription: 'History quiz number 3',
    quizBanner:
      'https://i.imgur.com/vW2wWam.jpg',
    quizUpvotes: 22,
    quizDownvotes: 4,
    reported: false,
    reportedTimes: 0,
    createdBy: 'LizTheQuizWiz',
    aggregateScore: 220,
  },
  {
    quizName: 'History quiz four',
    quizQuestions: [
      {
        question:
          'What was the name of the Ethiopian Wolf before they knew it was related to wolves?',
        correctAnswer: 'Simien Jackel',
        incorrectAnswers: [
          'Ethiopian Coyote',
          'Amharic Fox',
          'Canis Simiensis',
        ],
      },
      {
        question:
          'A carnivorous animal eats flesh, what does a nucivorous animal eat?',
        correctAnswer: 'Nuts',
        incorrectAnswers: ['Nothing', 'Fruit', 'Seaweed'],
      },
      {
        question: 'What is the fastest land animal?',
        correctAnswer: 'Cheetah',
        incorrectAnswers: [
          'Lion',
          'Thomson&rsquo;s Gazelle',
          'Pronghorn Antelope',
        ],
      },
      {
        question: 'What is the scientific name for modern day humans?',
        correctAnswer: 'Homo Sapiens',
        incorrectAnswers: [
          'Homo Ergaster',
          'Homo Erectus',
          'Homo Neanderthalensis',
        ],
      },
      {
        question:
          'The Kākāpō is a large, flightless, nocturnal parrot native to which country?',
        correctAnswer: 'New Zealand',
        incorrectAnswers: ['South Africa', 'Australia', 'Madagascar'],
      },
      {
        question: 'Hippocampus is the Latin name for which marine creature?',
        correctAnswer: 'Seahorse',
        incorrectAnswers: ['Dolphin', 'Whale', 'Octopus'],
      },
      {
        question: 'Cashmere is the wool from which kind of animal?',
        correctAnswer: 'Goat',
        incorrectAnswers: ['Sheep', 'Camel', 'Llama'],
      },
      {
        question:
          'What scientific suborder does the family Hyaenidae belong to?',
        correctAnswer: 'Feliformia',
        incorrectAnswers: ['Haplorhini', 'Caniformia', 'Ciconiiformes'],
      },
      {
        question: 'What is the scientific name of the cheetah?',
        correctAnswer: 'Acinonyx jubatus',
        incorrectAnswers: ['Panthera onca', 'Lynx rufus', 'Felis catus'],
      },
      {
        question: 'What is the scientific name of the Budgerigar?',
        correctAnswer: 'Melopsittacus undulatus',
        incorrectAnswers: [
          'Nymphicus hollandicus',
          'Pyrrhura molinae',
          'Ara macao',
        ],
      },
    ],
    timesTaken: 40,
    category: 'History',
    quizDescription: 'History quiz number 4',
    quizBanner:
      'https://i.imgur.com/vW2wWam.jpg',
    quizUpvotes: 32,
    quizDownvotes: 4,
    reported: false,
    reportedTimes: 0,
    createdBy: 'LizTheQuizWiz',
    aggregateScore: 300,
  },
  {
    quizName: 'History quiz five',
    quizQuestions: [
      {
        question:
          'What was the name of the Ethiopian Wolf before they knew it was related to wolves?',
        correctAnswer: 'Simien Jackel',
        incorrectAnswers: [
          'Ethiopian Coyote',
          'Amharic Fox',
          'Canis Simiensis',
        ],
      },
      {
        question:
          'A carnivorous animal eats flesh, what does a nucivorous animal eat?',
        correctAnswer: 'Nuts',
        incorrectAnswers: ['Nothing', 'Fruit', 'Seaweed'],
      },
      {
        question: 'What is the fastest land animal?',
        correctAnswer: 'Cheetah',
        incorrectAnswers: [
          'Lion',
          'Thomson&rsquo;s Gazelle',
          'Pronghorn Antelope',
        ],
      },
      {
        question: 'What is the scientific name for modern day humans?',
        correctAnswer: 'Homo Sapiens',
        incorrectAnswers: [
          'Homo Ergaster',
          'Homo Erectus',
          'Homo Neanderthalensis',
        ],
      },
      {
        question:
          'The Kākāpō is a large, flightless, nocturnal parrot native to which country?',
        correctAnswer: 'New Zealand',
        incorrectAnswers: ['South Africa', 'Australia', 'Madagascar'],
      },
      {
        question: 'Hippocampus is the Latin name for which marine creature?',
        correctAnswer: 'Seahorse',
        incorrectAnswers: ['Dolphin', 'Whale', 'Octopus'],
      },
      {
        question: 'Cashmere is the wool from which kind of animal?',
        correctAnswer: 'Goat',
        incorrectAnswers: ['Sheep', 'Camel', 'Llama'],
      },
      {
        question:
          'What scientific suborder does the family Hyaenidae belong to?',
        correctAnswer: 'Feliformia',
        incorrectAnswers: ['Haplorhini', 'Caniformia', 'Ciconiiformes'],
      },
      {
        question: 'What is the scientific name of the cheetah?',
        correctAnswer: 'Acinonyx jubatus',
        incorrectAnswers: ['Panthera onca', 'Lynx rufus', 'Felis catus'],
      },
      {
        question: 'What is the scientific name of the Budgerigar?',
        correctAnswer: 'Melopsittacus undulatus',
        incorrectAnswers: [
          'Nymphicus hollandicus',
          'Pyrrhura molinae',
          'Ara macao',
        ],
      },
    ],
    timesTaken: 50,
    category: 'History',
    quizDescription: 'History quiz number 5',
    quizBanner:
      'https://i.imgur.com/vW2wWam.jpg',
    quizUpvotes: 35,
    quizDownvotes: 4,
    reported: false,
    reportedTimes: 0,
    createdBy: 'LizTheQuizWiz',
    aggregateScore: 370,
  },
  {
    quizName: 'Literature quiz one',
    quizQuestions: [
      {
        question:
          'What was the name of the Ethiopian Wolf before they knew it was related to wolves?',
        correctAnswer: 'Simien Jackel',
        incorrectAnswers: [
          'Ethiopian Coyote',
          'Amharic Fox',
          'Canis Simiensis',
        ],
      },
      {
        question:
          'A carnivorous animal eats flesh, what does a nucivorous animal eat?',
        correctAnswer: 'Nuts',
        incorrectAnswers: ['Nothing', 'Fruit', 'Seaweed'],
      },
      {
        question: 'What is the fastest land animal?',
        correctAnswer: 'Cheetah',
        incorrectAnswers: [
          'Lion',
          'Thomson&rsquo;s Gazelle',
          'Pronghorn Antelope',
        ],
      },
      {
        question: 'What is the scientific name for modern day humans?',
        correctAnswer: 'Homo Sapiens',
        incorrectAnswers: [
          'Homo Ergaster',
          'Homo Erectus',
          'Homo Neanderthalensis',
        ],
      },
      {
        question:
          'The Kākāpō is a large, flightless, nocturnal parrot native to which country?',
        correctAnswer: 'New Zealand',
        incorrectAnswers: ['South Africa', 'Australia', 'Madagascar'],
      },
      {
        question: 'Hippocampus is the Latin name for which marine creature?',
        correctAnswer: 'Seahorse',
        incorrectAnswers: ['Dolphin', 'Whale', 'Octopus'],
      },
      {
        question: 'Cashmere is the wool from which kind of animal?',
        correctAnswer: 'Goat',
        incorrectAnswers: ['Sheep', 'Camel', 'Llama'],
      },
      {
        question:
          'What scientific suborder does the family Hyaenidae belong to?',
        correctAnswer: 'Feliformia',
        incorrectAnswers: ['Haplorhini', 'Caniformia', 'Ciconiiformes'],
      },
      {
        question: 'What is the scientific name of the cheetah?',
        correctAnswer: 'Acinonyx jubatus',
        incorrectAnswers: ['Panthera onca', 'Lynx rufus', 'Felis catus'],
      },
      {
        question: 'What is the scientific name of the Budgerigar?',
        correctAnswer: 'Melopsittacus undulatus',
        incorrectAnswers: [
          'Nymphicus hollandicus',
          'Pyrrhura molinae',
          'Ara macao',
        ],
      },
    ],
    timesTaken: 10,
    category: 'Literature',
    quizDescription: 'Literature quiz number 1',
    quizBanner:
      'https://i.imgur.com/8o0Mo3R.jpg',
    quizUpvotes: 5,
    quizDownvotes: 4,
    reported: false,
    reportedTimes: 0,
    createdBy: 'LizTheQuizWiz',
    aggregateScore: 60,
  },
  {
    quizName: 'Literature quiz two',
    quizQuestions: [
      {
        question:
          'What was the name of the Ethiopian Wolf before they knew it was related to wolves?',
        correctAnswer: 'Simien Jackel',
        incorrectAnswers: [
          'Ethiopian Coyote',
          'Amharic Fox',
          'Canis Simiensis',
        ],
      },
      {
        question:
          'A carnivorous animal eats flesh, what does a nucivorous animal eat?',
        correctAnswer: 'Nuts',
        incorrectAnswers: ['Nothing', 'Fruit', 'Seaweed'],
      },
      {
        question: 'What is the fastest land animal?',
        correctAnswer: 'Cheetah',
        incorrectAnswers: [
          'Lion',
          'Thomson&rsquo;s Gazelle',
          'Pronghorn Antelope',
        ],
      },
      {
        question: 'What is the scientific name for modern day humans?',
        correctAnswer: 'Homo Sapiens',
        incorrectAnswers: [
          'Homo Ergaster',
          'Homo Erectus',
          'Homo Neanderthalensis',
        ],
      },
      {
        question:
          'The Kākāpō is a large, flightless, nocturnal parrot native to which country?',
        correctAnswer: 'New Zealand',
        incorrectAnswers: ['South Africa', 'Australia', 'Madagascar'],
      },
      {
        question: 'Hippocampus is the Latin name for which marine creature?',
        correctAnswer: 'Seahorse',
        incorrectAnswers: ['Dolphin', 'Whale', 'Octopus'],
      },
      {
        question: 'Cashmere is the wool from which kind of animal?',
        correctAnswer: 'Goat',
        incorrectAnswers: ['Sheep', 'Camel', 'Llama'],
      },
      {
        question:
          'What scientific suborder does the family Hyaenidae belong to?',
        correctAnswer: 'Feliformia',
        incorrectAnswers: ['Haplorhini', 'Caniformia', 'Ciconiiformes'],
      },
      {
        question: 'What is the scientific name of the cheetah?',
        correctAnswer: 'Acinonyx jubatus',
        incorrectAnswers: ['Panthera onca', 'Lynx rufus', 'Felis catus'],
      },
      {
        question: 'What is the scientific name of the Budgerigar?',
        correctAnswer: 'Melopsittacus undulatus',
        incorrectAnswers: [
          'Nymphicus hollandicus',
          'Pyrrhura molinae',
          'Ara macao',
        ],
      },
    ],
    timesTaken: 20,
    category: 'Literature',
    quizDescription: 'Literature quiz number 1',
    quizBanner:
      'https://i.imgur.com/8o0Mo3R.jpg',
    quizUpvotes: 15,
    quizDownvotes: 4,
    reported: true,
    reportedTimes: 2,
    createdBy: 'LizTheQuizWiz',
    aggregateScore: 100,
  },
  {
    quizName: 'Literature quiz three',
    quizQuestions: [
      {
        question:
          'What was the name of the Ethiopian Wolf before they knew it was related to wolves?',
        correctAnswer: 'Simien Jackel',
        incorrectAnswers: [
          'Ethiopian Coyote',
          'Amharic Fox',
          'Canis Simiensis',
        ],
      },
      {
        question:
          'A carnivorous animal eats flesh, what does a nucivorous animal eat?',
        correctAnswer: 'Nuts',
        incorrectAnswers: ['Nothing', 'Fruit', 'Seaweed'],
      },
      {
        question: 'What is the fastest land animal?',
        correctAnswer: 'Cheetah',
        incorrectAnswers: [
          'Lion',
          'Thomson&rsquo;s Gazelle',
          'Pronghorn Antelope',
        ],
      },
      {
        question: 'What is the scientific name for modern day humans?',
        correctAnswer: 'Homo Sapiens',
        incorrectAnswers: [
          'Homo Ergaster',
          'Homo Erectus',
          'Homo Neanderthalensis',
        ],
      },
      {
        question:
          'The Kākāpō is a large, flightless, nocturnal parrot native to which country?',
        correctAnswer: 'New Zealand',
        incorrectAnswers: ['South Africa', 'Australia', 'Madagascar'],
      },
      {
        question: 'Hippocampus is the Latin name for which marine creature?',
        correctAnswer: 'Seahorse',
        incorrectAnswers: ['Dolphin', 'Whale', 'Octopus'],
      },
      {
        question: 'Cashmere is the wool from which kind of animal?',
        correctAnswer: 'Goat',
        incorrectAnswers: ['Sheep', 'Camel', 'Llama'],
      },
      {
        question:
          'What scientific suborder does the family Hyaenidae belong to?',
        correctAnswer: 'Feliformia',
        incorrectAnswers: ['Haplorhini', 'Caniformia', 'Ciconiiformes'],
      },
      {
        question: 'What is the scientific name of the cheetah?',
        correctAnswer: 'Acinonyx jubatus',
        incorrectAnswers: ['Panthera onca', 'Lynx rufus', 'Felis catus'],
      },
      {
        question: 'What is the scientific name of the Budgerigar?',
        correctAnswer: 'Melopsittacus undulatus',
        incorrectAnswers: [
          'Nymphicus hollandicus',
          'Pyrrhura molinae',
          'Ara macao',
        ],
      },
    ],
    timesTaken: 30,
    category: 'Literature',
    quizDescription: 'Literature quiz number 3',
    quizBanner:
      'https://i.imgur.com/8o0Mo3R.jpg',
    quizUpvotes: 5,
    quizDownvotes: 4,
    reported: false,
    reportedTimes: 0,
    createdBy: 'LizTheQuizWiz',
    aggregateScore: 60,
  },
  {
    quizName: 'Literature quiz four',
    quizQuestions: [
      {
        question:
          'What was the name of the Ethiopian Wolf before they knew it was related to wolves?',
        correctAnswer: 'Simien Jackel',
        incorrectAnswers: [
          'Ethiopian Coyote',
          'Amharic Fox',
          'Canis Simiensis',
        ],
      },
      {
        question:
          'A carnivorous animal eats flesh, what does a nucivorous animal eat?',
        correctAnswer: 'Nuts',
        incorrectAnswers: ['Nothing', 'Fruit', 'Seaweed'],
      },
      {
        question: 'What is the fastest land animal?',
        correctAnswer: 'Cheetah',
        incorrectAnswers: [
          'Lion',
          'Thomson&rsquo;s Gazelle',
          'Pronghorn Antelope',
        ],
      },
      {
        question: 'What is the scientific name for modern day humans?',
        correctAnswer: 'Homo Sapiens',
        incorrectAnswers: [
          'Homo Ergaster',
          'Homo Erectus',
          'Homo Neanderthalensis',
        ],
      },
      {
        question:
          'The Kākāpō is a large, flightless, nocturnal parrot native to which country?',
        correctAnswer: 'New Zealand',
        incorrectAnswers: ['South Africa', 'Australia', 'Madagascar'],
      },
      {
        question: 'Hippocampus is the Latin name for which marine creature?',
        correctAnswer: 'Seahorse',
        incorrectAnswers: ['Dolphin', 'Whale', 'Octopus'],
      },
      {
        question: 'Cashmere is the wool from which kind of animal?',
        correctAnswer: 'Goat',
        incorrectAnswers: ['Sheep', 'Camel', 'Llama'],
      },
      {
        question:
          'What scientific suborder does the family Hyaenidae belong to?',
        correctAnswer: 'Feliformia',
        incorrectAnswers: ['Haplorhini', 'Caniformia', 'Ciconiiformes'],
      },
      {
        question: 'What is the scientific name of the cheetah?',
        correctAnswer: 'Acinonyx jubatus',
        incorrectAnswers: ['Panthera onca', 'Lynx rufus', 'Felis catus'],
      },
      {
        question: 'What is the scientific name of the Budgerigar?',
        correctAnswer: 'Melopsittacus undulatus',
        incorrectAnswers: [
          'Nymphicus hollandicus',
          'Pyrrhura molinae',
          'Ara macao',
        ],
      },
    ],
    timesTaken: 140,
    category: 'Literature',
    quizDescription: 'Literature quiz number 4',
    quizBanner:
      'https://i.imgur.com/8o0Mo3R.jpg',
    quizUpvotes: 5,
    quizDownvotes: 24,
    reported: true,
    reportedTimes: 19,
    createdBy: 'LizTheQuizWiz',
    aggregateScore: 100,
  },
  {
    quizName: 'Literature quiz five',
    quizQuestions: [
      {
        question:
          'What was the name of the Ethiopian Wolf before they knew it was related to wolves?',
        correctAnswer: 'Simien Jackel',
        incorrectAnswers: [
          'Ethiopian Coyote',
          'Amharic Fox',
          'Canis Simiensis',
        ],
      },
      {
        question:
          'A carnivorous animal eats flesh, what does a nucivorous animal eat?',
        correctAnswer: 'Nuts',
        incorrectAnswers: ['Nothing', 'Fruit', 'Seaweed'],
      },
      {
        question: 'What is the fastest land animal?',
        correctAnswer: 'Cheetah',
        incorrectAnswers: [
          'Lion',
          'Thomson&rsquo;s Gazelle',
          'Pronghorn Antelope',
        ],
      },
      {
        question: 'What is the scientific name for modern day humans?',
        correctAnswer: 'Homo Sapiens',
        incorrectAnswers: [
          'Homo Ergaster',
          'Homo Erectus',
          'Homo Neanderthalensis',
        ],
      },
      {
        question:
          'The Kākāpō is a large, flightless, nocturnal parrot native to which country?',
        correctAnswer: 'New Zealand',
        incorrectAnswers: ['South Africa', 'Australia', 'Madagascar'],
      },
      {
        question: 'Hippocampus is the Latin name for which marine creature?',
        correctAnswer: 'Seahorse',
        incorrectAnswers: ['Dolphin', 'Whale', 'Octopus'],
      },
      {
        question: 'Cashmere is the wool from which kind of animal?',
        correctAnswer: 'Goat',
        incorrectAnswers: ['Sheep', 'Camel', 'Llama'],
      },
      {
        question:
          'What scientific suborder does the family Hyaenidae belong to?',
        correctAnswer: 'Feliformia',
        incorrectAnswers: ['Haplorhini', 'Caniformia', 'Ciconiiformes'],
      },
      {
        question: 'What is the scientific name of the cheetah?',
        correctAnswer: 'Acinonyx jubatus',
        incorrectAnswers: ['Panthera onca', 'Lynx rufus', 'Felis catus'],
      },
      {
        question: 'What is the scientific name of the Budgerigar?',
        correctAnswer: 'Melopsittacus undulatus',
        incorrectAnswers: [
          'Nymphicus hollandicus',
          'Pyrrhura molinae',
          'Ara macao',
        ],
      },
    ],
    timesTaken: 50,
    category: 'Literature',
    quizDescription: 'Literature quiz number 1',
    quizBanner:
      'https://i.imgur.com/8o0Mo3R.jpg',
    quizUpvotes: 45,
    quizDownvotes: 4,
    reported: false,
    reportedTimes: 0,
    createdBy: 'LizTheQuizWiz',
    aggregateScore: 450,
  },
  {
    quizName: 'TV and Movies quiz one',
    quizQuestions: [
      {
        question:
          'What was the name of the Ethiopian Wolf before they knew it was related to wolves?',
        correctAnswer: 'Simien Jackel',
        incorrectAnswers: [
          'Ethiopian Coyote',
          'Amharic Fox',
          'Canis Simiensis',
        ],
      },
      {
        question:
          'A carnivorous animal eats flesh, what does a nucivorous animal eat?',
        correctAnswer: 'Nuts',
        incorrectAnswers: ['Nothing', 'Fruit', 'Seaweed'],
      },
      {
        question: 'What is the fastest land animal?',
        correctAnswer: 'Cheetah',
        incorrectAnswers: [
          'Lion',
          'Thomson&rsquo;s Gazelle',
          'Pronghorn Antelope',
        ],
      },
      {
        question: 'What is the scientific name for modern day humans?',
        correctAnswer: 'Homo Sapiens',
        incorrectAnswers: [
          'Homo Ergaster',
          'Homo Erectus',
          'Homo Neanderthalensis',
        ],
      },
      {
        question:
          'The Kākāpō is a large, flightless, nocturnal parrot native to which country?',
        correctAnswer: 'New Zealand',
        incorrectAnswers: ['South Africa', 'Australia', 'Madagascar'],
      },
      {
        question: 'Hippocampus is the Latin name for which marine creature?',
        correctAnswer: 'Seahorse',
        incorrectAnswers: ['Dolphin', 'Whale', 'Octopus'],
      },
      {
        question: 'Cashmere is the wool from which kind of animal?',
        correctAnswer: 'Goat',
        incorrectAnswers: ['Sheep', 'Camel', 'Llama'],
      },
      {
        question:
          'What scientific suborder does the family Hyaenidae belong to?',
        correctAnswer: 'Feliformia',
        incorrectAnswers: ['Haplorhini', 'Caniformia', 'Ciconiiformes'],
      },
      {
        question: 'What is the scientific name of the cheetah?',
        correctAnswer: 'Acinonyx jubatus',
        incorrectAnswers: ['Panthera onca', 'Lynx rufus', 'Felis catus'],
      },
      {
        question: 'What is the scientific name of the Budgerigar?',
        correctAnswer: 'Melopsittacus undulatus',
        incorrectAnswers: [
          'Nymphicus hollandicus',
          'Pyrrhura molinae',
          'Ara macao',
        ],
      },
    ],
    timesTaken: 10,
    category: 'TV and Movies',
    quizDescription: 'TV and Movies quiz number 1',
    quizBanner:
      'https://i.imgur.com/FSIPzwE.jpg',
    quizUpvotes: 5,
    quizDownvotes: 4,
    reported: false,
    reportedTimes: 0,
    createdBy: 'LizTheQuizWiz',
    aggregateScore: 60,
  },
  {
    quizName: 'TV and Movies quiz two',
    quizQuestions: [
      {
        question:
          'What was the name of the Ethiopian Wolf before they knew it was related to wolves?',
        correctAnswer: 'Simien Jackel',
        incorrectAnswers: [
          'Ethiopian Coyote',
          'Amharic Fox',
          'Canis Simiensis',
        ],
      },
      {
        question:
          'A carnivorous animal eats flesh, what does a nucivorous animal eat?',
        correctAnswer: 'Nuts',
        incorrectAnswers: ['Nothing', 'Fruit', 'Seaweed'],
      },
      {
        question: 'What is the fastest land animal?',
        correctAnswer: 'Cheetah',
        incorrectAnswers: [
          'Lion',
          'Thomson&rsquo;s Gazelle',
          'Pronghorn Antelope',
        ],
      },
      {
        question: 'What is the scientific name for modern day humans?',
        correctAnswer: 'Homo Sapiens',
        incorrectAnswers: [
          'Homo Ergaster',
          'Homo Erectus',
          'Homo Neanderthalensis',
        ],
      },
      {
        question:
          'The Kākāpō is a large, flightless, nocturnal parrot native to which country?',
        correctAnswer: 'New Zealand',
        incorrectAnswers: ['South Africa', 'Australia', 'Madagascar'],
      },
      {
        question: 'Hippocampus is the Latin name for which marine creature?',
        correctAnswer: 'Seahorse',
        incorrectAnswers: ['Dolphin', 'Whale', 'Octopus'],
      },
      {
        question: 'Cashmere is the wool from which kind of animal?',
        correctAnswer: 'Goat',
        incorrectAnswers: ['Sheep', 'Camel', 'Llama'],
      },
      {
        question:
          'What scientific suborder does the family Hyaenidae belong to?',
        correctAnswer: 'Feliformia',
        incorrectAnswers: ['Haplorhini', 'Caniformia', 'Ciconiiformes'],
      },
      {
        question: 'What is the scientific name of the cheetah?',
        correctAnswer: 'Acinonyx jubatus',
        incorrectAnswers: ['Panthera onca', 'Lynx rufus', 'Felis catus'],
      },
      {
        question: 'What is the scientific name of the Budgerigar?',
        correctAnswer: 'Melopsittacus undulatus',
        incorrectAnswers: [
          'Nymphicus hollandicus',
          'Pyrrhura molinae',
          'Ara macao',
        ],
      },
    ],
    timesTaken: 20,
    category: 'TV and Movies',
    quizDescription: 'TV and Movies quiz number 2',
    quizBanner:
      'https://i.imgur.com/FSIPzwE.jpg',
    quizUpvotes: 15,
    quizDownvotes: 4,
    reported: false,
    reportedTimes: 0,
    createdBy: 'LizTheQuizWiz',
    aggregateScore: 150,
  },
  {
    quizName: 'TV and Movies quiz three',
    quizQuestions: [
      {
        question:
          'What was the name of the Ethiopian Wolf before they knew it was related to wolves?',
        correctAnswer: 'Simien Jackel',
        incorrectAnswers: [
          'Ethiopian Coyote',
          'Amharic Fox',
          'Canis Simiensis',
        ],
      },
      {
        question:
          'A carnivorous animal eats flesh, what does a nucivorous animal eat?',
        correctAnswer: 'Nuts',
        incorrectAnswers: ['Nothing', 'Fruit', 'Seaweed'],
      },
      {
        question: 'What is the fastest land animal?',
        correctAnswer: 'Cheetah',
        incorrectAnswers: [
          'Lion',
          'Thomson&rsquo;s Gazelle',
          'Pronghorn Antelope',
        ],
      },
      {
        question: 'What is the scientific name for modern day humans?',
        correctAnswer: 'Homo Sapiens',
        incorrectAnswers: [
          'Homo Ergaster',
          'Homo Erectus',
          'Homo Neanderthalensis',
        ],
      },
      {
        question:
          'The Kākāpō is a large, flightless, nocturnal parrot native to which country?',
        correctAnswer: 'New Zealand',
        incorrectAnswers: ['South Africa', 'Australia', 'Madagascar'],
      },
      {
        question: 'Hippocampus is the Latin name for which marine creature?',
        correctAnswer: 'Seahorse',
        incorrectAnswers: ['Dolphin', 'Whale', 'Octopus'],
      },
      {
        question: 'Cashmere is the wool from which kind of animal?',
        correctAnswer: 'Goat',
        incorrectAnswers: ['Sheep', 'Camel', 'Llama'],
      },
      {
        question:
          'What scientific suborder does the family Hyaenidae belong to?',
        correctAnswer: 'Feliformia',
        incorrectAnswers: ['Haplorhini', 'Caniformia', 'Ciconiiformes'],
      },
      {
        question: 'What is the scientific name of the cheetah?',
        correctAnswer: 'Acinonyx jubatus',
        incorrectAnswers: ['Panthera onca', 'Lynx rufus', 'Felis catus'],
      },
      {
        question: 'What is the scientific name of the Budgerigar?',
        correctAnswer: 'Melopsittacus undulatus',
        incorrectAnswers: [
          'Nymphicus hollandicus',
          'Pyrrhura molinae',
          'Ara macao',
        ],
      },
    ],
    timesTaken: 30,
    category: 'TV and Movies',
    quizDescription: 'TV and Movies quiz number 3',
    quizBanner:
      'https://i.imgur.com/FSIPzwE.jpg',
    quizUpvotes: 5,
    quizDownvotes: 24,
    reported: true,
    reportedTimes: 11,
    createdBy: 'LizTheQuizWiz',
    aggregateScore: 60,
  },
  {
    quizName: 'TV and Movies quiz four',
    quizQuestions: [
      {
        question:
          'What was the name of the Ethiopian Wolf before they knew it was related to wolves?',
        correctAnswer: 'Simien Jackel',
        incorrectAnswers: [
          'Ethiopian Coyote',
          'Amharic Fox',
          'Canis Simiensis',
        ],
      },
      {
        question:
          'A carnivorous animal eats flesh, what does a nucivorous animal eat?',
        correctAnswer: 'Nuts',
        incorrectAnswers: ['Nothing', 'Fruit', 'Seaweed'],
      },
      {
        question: 'What is the fastest land animal?',
        correctAnswer: 'Cheetah',
        incorrectAnswers: [
          'Lion',
          'Thomson&rsquo;s Gazelle',
          'Pronghorn Antelope',
        ],
      },
      {
        question: 'What is the scientific name for modern day humans?',
        correctAnswer: 'Homo Sapiens',
        incorrectAnswers: [
          'Homo Ergaster',
          'Homo Erectus',
          'Homo Neanderthalensis',
        ],
      },
      {
        question:
          'The Kākāpō is a large, flightless, nocturnal parrot native to which country?',
        correctAnswer: 'New Zealand',
        incorrectAnswers: ['South Africa', 'Australia', 'Madagascar'],
      },
      {
        question: 'Hippocampus is the Latin name for which marine creature?',
        correctAnswer: 'Seahorse',
        incorrectAnswers: ['Dolphin', 'Whale', 'Octopus'],
      },
      {
        question: 'Cashmere is the wool from which kind of animal?',
        correctAnswer: 'Goat',
        incorrectAnswers: ['Sheep', 'Camel', 'Llama'],
      },
      {
        question:
          'What scientific suborder does the family Hyaenidae belong to?',
        correctAnswer: 'Feliformia',
        incorrectAnswers: ['Haplorhini', 'Caniformia', 'Ciconiiformes'],
      },
      {
        question: 'What is the scientific name of the cheetah?',
        correctAnswer: 'Acinonyx jubatus',
        incorrectAnswers: ['Panthera onca', 'Lynx rufus', 'Felis catus'],
      },
      {
        question: 'What is the scientific name of the Budgerigar?',
        correctAnswer: 'Melopsittacus undulatus',
        incorrectAnswers: [
          'Nymphicus hollandicus',
          'Pyrrhura molinae',
          'Ara macao',
        ],
      },
    ],
    timesTaken: 40,
    category: 'TV and Movies',
    quizDescription: 'TV and Movies quiz number 4',
    quizBanner:
      'https://i.imgur.com/FSIPzwE.jpg',
    quizUpvotes: 25,
    quizDownvotes: 14,
    reported: true,
    reportedTimes: 6,
    createdBy: 'LizTheQuizWiz',
    aggregateScore: 300,
  },
  {
    quizName: 'TV and Movies quiz five',
    quizQuestions: [
      {
        question:
          'What was the name of the Ethiopian Wolf before they knew it was related to wolves?',
        correctAnswer: 'Simien Jackel',
        incorrectAnswers: [
          'Ethiopian Coyote',
          'Amharic Fox',
          'Canis Simiensis',
        ],
      },
      {
        question:
          'A carnivorous animal eats flesh, what does a nucivorous animal eat?',
        correctAnswer: 'Nuts',
        incorrectAnswers: ['Nothing', 'Fruit', 'Seaweed'],
      },
      {
        question: 'What is the fastest land animal?',
        correctAnswer: 'Cheetah',
        incorrectAnswers: [
          'Lion',
          'Thomson&rsquo;s Gazelle',
          'Pronghorn Antelope',
        ],
      },
      {
        question: 'What is the scientific name for modern day humans?',
        correctAnswer: 'Homo Sapiens',
        incorrectAnswers: [
          'Homo Ergaster',
          'Homo Erectus',
          'Homo Neanderthalensis',
        ],
      },
      {
        question:
          'The Kākāpō is a large, flightless, nocturnal parrot native to which country?',
        correctAnswer: 'New Zealand',
        incorrectAnswers: ['South Africa', 'Australia', 'Madagascar'],
      },
      {
        question: 'Hippocampus is the Latin name for which marine creature?',
        correctAnswer: 'Seahorse',
        incorrectAnswers: ['Dolphin', 'Whale', 'Octopus'],
      },
      {
        question: 'Cashmere is the wool from which kind of animal?',
        correctAnswer: 'Goat',
        incorrectAnswers: ['Sheep', 'Camel', 'Llama'],
      },
      {
        question:
          'What scientific suborder does the family Hyaenidae belong to?',
        correctAnswer: 'Feliformia',
        incorrectAnswers: ['Haplorhini', 'Caniformia', 'Ciconiiformes'],
      },
      {
        question: 'What is the scientific name of the cheetah?',
        correctAnswer: 'Acinonyx jubatus',
        incorrectAnswers: ['Panthera onca', 'Lynx rufus', 'Felis catus'],
      },
      {
        question: 'What is the scientific name of the Budgerigar?',
        correctAnswer: 'Melopsittacus undulatus',
        incorrectAnswers: [
          'Nymphicus hollandicus',
          'Pyrrhura molinae',
          'Ara macao',
        ],
      },
    ],
    timesTaken: 50,
    category: 'TV and Movies',
    quizDescription: 'TV and Movies quiz number 5',
    quizBanner:
      'https://i.imgur.com/FSIPzwE.jpg',
    quizUpvotes: 45,
    quizDownvotes: 4,
    reported: false,
    reportedTimes: 0,
    createdBy: 'LizTheQuizWiz',
    aggregateScore: 400,
  }

];

module.exports = {
  exampleQuizzesFinal: exampleQuizzesFinal,
};

