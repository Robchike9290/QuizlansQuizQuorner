const exampleQuizTemplate = {
  quizId: 1,
  quizName: 'General one',
  quizQuestions: [
    {
      question: "",
      correctAnswer: "",
      incorrectAnswers: []
    },
    {
      question: "",
      correctAnswer: "",
      incorrectAnswers: []
    },
    {
      question: "",
      correctAnswer: "",
      incorrectAnswers: []
    },
    {
      question: "",
      correctAnswer: "",
      incorrectAnswers: []
    },
    {
      question: "",
      correctAnswer: "",
      incorrectAnswers: []
    },
    {
      question: "",
      correctAnswer: "",
      incorrectAnswers: []
    },
    {
      question: "",
      correctAnswer: "",
      incorrectAnswers: []
    },
    {
      question: "",
      correctAnswer: "",
      incorrectAnswers: []
    },
    {
      question: "",
      correctAnswer: "",
      incorrectAnswers: []
    },
    {
      question: "",
      correctAnswer: "",
      incorrectAnswers: []
    }
  ],
  timesTaken: 12,
  category: 'general',
  quizDescription: 'General knowledge quiz number 1',
  quizBanner: 'photo url',
  quizUpvotes: 5,
  quizDownvotes: 1,
  reported: false,
  reportedTimes: 0,
  createdBy: 'PatrickTheAssistant',
  aggregateScore: 84
};

let exampleQuizzes =
  [
    {
      quizId: 1,
      quizName: 'General one',
      quizQuestions: [
        {
          question: "What does DNA stand for?",
          correctAnswer: "Deoxyribonucleic Acid",
          incorrectAnswers: ["Deoxyribogenetic Acid",
          "Deoxyribogenetic Atoms",
          "Detoxic Acid"]
        },
        {
          question: "Which game did &quot;Sonic The Hedgehog&quot; make his first appearance in?",
          correctAnswer: "Rad Mobile",
          incorrectAnswers: ["Sonic The Hedgehog",
          "Super Mario 64",
          "Mega Man"]
        },
        {
          question: "Which animal features on the logo for Abarth, the motorsport division of Fiat?",
          correctAnswer: "Scorpion",
          incorrectAnswers: ["Snake",
          "Bull",
          "Horse"]
        },
        {
          question: "Who had a 1976 hit with the song You Make Me Feel Like Dancing?",
          correctAnswer: "Leo Sayer",
          incorrectAnswers: ["Elton John",
          "Billy Joel",
          "Andy Gibb"]
        },
        {
          question: "What does AD stand for in relation to Windows Operating Systems? ",
          correctAnswer: "Active Directory",
          incorrectAnswers: ["Alternative Drive",
          "Automated Database",
          "Active Department"]
        },
        {
          question: "On which continent is the country of Angola located?",
          correctAnswer: "Africa",
          incorrectAnswers: ["South America",
          "Europe",
          "Asia"]
        },
        {
          question: "Who is the true moon princess in Sailor Moon?",
          correctAnswer: "Sailor Moon",
          incorrectAnswers: ["Sailor Venus",
          "Sailor Mars",
          "Sailor Jupiter"]
        },
        {
          question: "What is the nickname of the US state of California?",
          correctAnswer: "Golden State",
          incorrectAnswers: ["Sunshine State",
          "Bay State",
          "Treasure State"]
        },
        {
          question: "In which Mario game did the Mega Mushroom make its debut?",
          correctAnswer: "Mario Party 4",
          incorrectAnswers: ["New Super Mario Bros.",
          "Mario Kart Wii",
          "Super Mario 3D World"]
        },
        {
          question: "Gordon Freeman is said to have burnt and destroyed what food in the break room microwave?",
          correctAnswer: "Casserole",
          incorrectAnswers: ["Sub Sandwich",
          "Chicken Soup",
          "Pepperoni Pizza"]
        }
      ],
      timesTaken: 12,
      category: 'general',
      quizDescription: 'General knowledge quiz number 1',
      quizBanner: 'photo url',
      quizUpvotes: 5,
      quizDownvotes: 1,
      reported: false,
      reportedTimes: 0,
      createdBy: 'PatrickTheAssistant',
      aggregateScore: 84
    },
    {
      quizId: 2,
      quizName: 'General Two',
      quizQuestions: [
        {
          question: "Which of these was the name of a bug found in April 2014 in the publicly available OpenSSL cryptography library",
          correctAnswer: "Heartbleed",
          incorrectAnswers: ["Shellshock",
          "Corrupted Blood",
          "Shellscript"]
        },
        {
          question: "What is the name of the formerly rich fishing grounds off the island of Newfoundland, Canada?",
          correctAnswer: "Grand Banks",
          incorrectAnswers: ["Great Barrier Reef",
          "Mariana Trench",
          "Hudson Bay"]
        },
        {
          question: "Which one of these cartoon characters is NOT voiced by Rob Paulsen?",
          correctAnswer: "Max Tennyson (Ben 10)",
          incorrectAnswers: ["Carl Wheezer (Jimmy Neutron)",
          "Yakko Warner (Animaniacs)",
          "The Mask (The Mask, TV Series)"]
        },
        {
          question: "African-American performer Sammy Davis Jr. was known for losing which part of his body in a car accident?",
          correctAnswer: "Left Eye",
          incorrectAnswers: ["Right Ear",
          "Right Middle Finger",
          "Nose"]
        },
        {
          question: "Who out of these actresses is the youngest?",
          correctAnswer: "Kiernan Shipka",
          incorrectAnswers: ["Ariel Winter",
          "Emma Watson",
          "Bonnie Wright"]
        },
        {
          question: "What is former United States President Bill Clinton full name?",
          correctAnswer: "William Jefferson Clinton",
          incorrectAnswers: ["William Roosevelt Clinton",
          "William Truman Clinton",
          "William Lincoln Clinton"]
        },
        {
          question: "In Battlestar Galactica (2004), what is the name of the President of the Twelve Colonies?",
          correctAnswer: "Laura Roslin",
          incorrectAnswers: ["William Adama",
          "Tricia Helfer",
          "Harry Stills"]
        },
        {
          question: "In which year was League of Legends released?",
          correctAnswer: "2009",
          incorrectAnswers: ["2010",
          "2003",
          "2001"]
        },
        {
          question: "Which of the following is the longest river in Europe?",
          correctAnswer: "Volga",
          incorrectAnswers: ["Danube",
          "Ural",
          "Dnieper"]
        },
        {
          question: "Which country drives on the left side of the road?",
          correctAnswer: "Japan",
          incorrectAnswers: ["Germany",
          "Russia",
          "China"]
        }
      ],
      timesTaken: 22,
      category: 'general',
      quizDescription: 'General knowledge quiz number 2',
      quizBanner: 'photo url',
      quizUpvotes: 12,
      quizDownvotes: 8,
      reported: false,
      reportedTimes: 0,
      createdBy: 'PatrickTheAssistant',
      aggregateScore: 132
    },
    {
      quizId: 3,
      quizName: 'Science and Nature quiz one',
      quizQuestions: [
        {
          question: "Which of these bones is hardest to break?",
          correctAnswer: "Femur",
          incorrectAnswers: ["Cranium",
          "Humerus",
          "Tibia"]
        },
        {
          question: "Rhinoplasty is a surgical procedure on what part of the human body?",
          correctAnswer: "Nose",
          incorrectAnswers: ["Ears",
          "Chin",
          "Neck"]
        },
        {
          question: "To the nearest minute, how long does it take for light to travel from the Sun to the Earth?",
          correctAnswer: "8 Minutes",
          incorrectAnswers: ["6 Minutes",
          "2 Minutes",
          "12 Minutes"]
        },
        {
          question: "Which chemical element has the lowest boiling point?",
          correctAnswer: "Helium",
          incorrectAnswers: ["Hydrogen",
          "Neon",
          "Nitrogen"]
        },
        {
          question: "An organic compound is considered an alcohol if it has what functional group?",
          correctAnswer: "Hydroxyl",
          incorrectAnswers: ["Carbonyl",
          "Alkyl",
          "Aldehyde"]
        },
        {
          question: "Au on the Periodic Table refers to which element?",
          correctAnswer: "Gold",
          incorrectAnswers: ["Silver",
          "Oxygen",
          "Nickel"]
        },
        {
          question: "All the following metal elements are liquids at or near room temperature EXCEPT:",
          correctAnswer: "Beryllium",
          incorrectAnswers: ["Gallium",
          "Caesium",
          "Mercury"]
        },
        {
          question: "How many officially recognized dwarf planets in the solar system are named after Polynesian deities?",
          correctAnswer: "2",
          incorrectAnswers: ["0",
          "1",
          "5"]
        },
        {
          question: "Folic acid is the synthetic form of which vitamin?",
          correctAnswer: "Vitamin B",
          incorrectAnswers: ["Vitamin A",
          "Vitamin C",
          "Vitamin D"]
        },
        {
          question: "What term is best associated with Sigmund Freud?",
          correctAnswer: "Psychoanalysis",
          incorrectAnswers: ["Cognitive-Behavioral Therapy",
          "Theory of Gravity",
          "Dialectical Behavior Therapy"]
        }
      ],
      timesTaken: 10,
      category: 'Science&Nature',
      quizDescription: 'Science and Nature quiz number 1',
      quizBanner: 'photo url',
      quizUpvotes: 9,
      quizDownvotes: 1,
      reported: false,
      reportedTimes: 0,
      createdBy: 'SteveTheQwizard',
      aggregateScore: 50
    },
    {
      quizId: 4,
      quizName: 'Science and Nature quiz two',
      quizQuestions: [
        {
          question: "The human heart has how many chambers?",
          correctAnswer: "4",
          incorrectAnswers: ["2",
          "6",
          "3"]
        },
        {
          question: "The human right lung has how many lobes?",
          correctAnswer: "3",
          incorrectAnswers: ["4",
          "2",
          "1"]
        },
        {
          question: "Human cells typically have how many copies of each gene?",
          correctAnswer: "2",
          incorrectAnswers: ["1",
          "4",
          "3"]
        },
        {
          question: "Who made the discovery of X-rays?",
          correctAnswer: "Wilhelm Conrad Roentgen",
          incorrectAnswers: ["Thomas Alva Edison",
          "James Watt",
          "Albert Einstein"]
        },
        {
          question: "Botanically speaking, which of these fruits is NOT a berry?",
          correctAnswer: "Strawberry",
          incorrectAnswers: ["Blueberry",
          "Banana",
          "Concord Grape"]
        },
        {
          question: "An average human can go how many weeks without water.",
          correctAnswer: "2",
          incorrectAnswers: ["1",
          "4",
          "3"]
        },
        {
          question: "Burning which of these metals will produce a bright white flame?",
          correctAnswer: "Magnesium",
          incorrectAnswers: ["Copper",
          "Lithium",
          "Lead"]
        },
        {
          question: "Which chemical element was originally known as Alabamine?",
          correctAnswer: "Astatine",
          incorrectAnswers: ["Selenium",
          "Antimony",
          "Molybdenum"]
        },
        {
          question: "Which of the following men does not have a chemical element named after him?",
          correctAnswer: "Sir Isaac Newton",
          incorrectAnswers: ["Albert Einstein",
          "Niels Bohr",
          "Enrico Fermi"]
        },
        {
          question: "What is the half-life of Uranium-235?",
          correctAnswer: "703,800,000 years",
          incorrectAnswers: ["4,300,400,000 years",
          "1,260,900,000 years",
          "Uranium-235 is a stable isotope"]
        }
      ],
      timesTaken: 50,
      category: 'general',
      quizDescription: 'Science and Nature quiz number 2',
      quizBanner: 'photo url',
      quizUpvotes: 26,
      quizDownvotes: 8,
      reported: false,
      reportedTimes: 0,
      createdBy: 'SteveTheQwizard',
      aggregateScore: 375
    }
  ];