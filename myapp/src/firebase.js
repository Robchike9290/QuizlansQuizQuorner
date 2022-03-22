import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const usersCol = collection(db, 'users');
const snapshot = await getDocts(usersCol);

// Detect user login
onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    console.log('Logged in!');
  } else {
    console.log('User not found.');
  }
});
// import {
//   getFirestore,
//   collection,
//   getDocs,
//   getDoc,
//   setDoc,
//   doc,
//   data,
//   query,
//   where
// } from "firebase/firestore";

// const db = getFirestore();
// const quizCol = collection(db, 'quiz');

// connectAuthEmulator(auth, "http://localhost:8080")

// const loginEmailPassword = async () => {
//   const loginEmail = txtEmail.value;
//   const loginPassword = txtPassword.value;

//   const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
//   console.log(userCredential.user);
// }

// for (let i = 0; i < exampleQuizzes.length; i++) {
//   const quiz = exampleQuizzes[i];
//   // const quizName = quiz.quizName.split(" ").join("");
//   // function camelize(str) {
//   //   return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
//   //     return index === 0 ? word.toLowerCase() : word.toUpperCase();
//   //   }).replace(/\s+/g, '');
//   // }
//   // const quizName = camelize(quiz.quizName);
//   const id = String(quiz.quizId);
//   setDoc(doc(db, "quiz", id), quiz);
// }

// setDoc(doc(db, "quiz", "testDoc3"), {"quizUpvotes": "0"})

// const addDoc = setDoc(doc(db, "quiz", "quizData"), {
//   quizId: 1,
//   quizName: 'General one',
//   quizQuestions: [
//     {
//       question: "What does DNA stand for?",
//       correctAnswer: "Deoxyribonucleic Acid",
//       incorrectAnswers: ["Deoxyribogenetic Acid",
//       "Deoxyribogenetic Atoms",
//       "Detoxic Acid"]
//     },
//     {
//       question: "Which game did &quot;Sonic The Hedgehog&quot; make his first appearance in?",
//       correctAnswer: "Rad Mobile",
//       incorrectAnswers: ["Sonic The Hedgehog",
//       "Super Mario 64",
//       "Mega Man"]
//     },
//     {
//       question: "Which animal features on the logo for Abarth, the motorsport division of Fiat?",
//       correctAnswer: "Scorpion",
//       incorrectAnswers: ["Snake",
//       "Bull",
//       "Horse"]
//     },
//     {
//       question: "Who had a 1976 hit with the song You Make Me Feel Like Dancing?",
//       correctAnswer: "Leo Sayer",
//       incorrectAnswers: ["Elton John",
//       "Billy Joel",
//       "Andy Gibb"]
//     },
//     {
//       question: "What does AD stand for in relation to Windows Operating Systems? ",
//       correctAnswer: "Active Directory",
//       incorrectAnswers: ["Alternative Drive",
//       "Automated Database",
//       "Active Department"]
//     },
//     {
//       question: "On which continent is the country of Angola located?",
//       correctAnswer: "Africa",
//       incorrectAnswers: ["South America",
//       "Europe",
//       "Asia"]
//     },
//     {
//       question: "Who is the true moon princess in Sailor Moon?",
//       correctAnswer: "Sailor Moon",
//       incorrectAnswers: ["Sailor Venus",
//       "Sailor Mars",
//       "Sailor Jupiter"]
//     },
//     {
//       question: "What is the nickname of the US state of California?",
//       correctAnswer: "Golden State",
//       incorrectAnswers: ["Sunshine State",
//       "Bay State",
//       "Treasure State"]
//     },
//     {
//       question: "In which Mario game did the Mega Mushroom make its debut?",
//       correctAnswer: "Mario Party 4",
//       incorrectAnswers: ["New Super Mario Bros.",
//       "Mario Kart Wii",
//       "Super Mario 3D World"]
//     },
//     {
//       question: "Gordon Freeman is said to have burnt and destroyed what food in the break room microwave?",
//       correctAnswer: "Casserole",
//       incorrectAnswers: ["Sub Sandwich",
//       "Chicken Soup",
//       "Pepperoni Pizza"]
//     }
//   ],
//   timesTaken: 12,
//   category: 'general',
//   quizDescription: 'General knowledge quiz number 1',
//   quizBanner: 'https://pgcpsmess.files.wordpress.com/2013/08/imagescae8o2el.jpg',
//   quizUpvotes: 5,
//   quizDownvotes: 1,
//   reported: false,
//   reportedTimes: 0,
//   createdBy: 'PatrickTheAssistant',
//   aggregateScore: 84
// })
// .then((response) => {
//   // console.log('reponse:', response);
// })
// .catch((err) => {
//   console.error(err);
// })

// let myDoc;

// const retrieveDoc = getDoc(doc(db, "quiz", "quizData"))
//   .then((response) => {
//     console.log(response.data());
//     myDoc = response.data();
//   })
//   .catch((err) => {
//     console.error(err);
//   })

// const snapshot = query(collection(db, "quiz"))

// const docRef = doc(db, "quiz");
// const docSnap = getDoc(docRef);

// console.log('docSnap.docs', docSnap.docs);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
// }

// snapshot.forEach((item) => {
// console.log(item);
// })

// console.log("Snapshot:",  snapshot);

// console.log("CLICK", quizName);

// const docName = doc(db, "quiz", "testDoc3");
// console.log(docName);
// // const upvotes = docData.quizUpvotes + 1;

// setDoc(docName, {quizUpvotes: 12}, { merge: true })
//   .then((result) => {
//     console.log("Update result:", result);
//   })
//   .catch((err) => {
//     console.error(err);
//   })

// const docRef = db.collection("quiz").doc(quizName);
// const increment = firebase.firestore.FieldValue.increment(1);

// getDoc(doc(db, "quiz", "testDoc3"))
//   .then((response) => {
//     console.log(response.data().quizUpvotes);
//     setDocData(response.data());
//   })
//   .catch((err) => {
//     console.error(err);
//   })
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);
// const db = getFirestore(app);
// const usersCol = collection(db, 'users');
// const snapshot = await getDocts(usersCol);

// // Detect user login
// onAuthStateChanged(auth, user => {
//   if (user !== null) {
//     console.log('Logged in!');
//   } else {
//     console.log('User not found.');
//   }
// });
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);
// const db = getFirestore(app);
// const usersCol = collection(db, 'users');
// const snapshot = await getDocts(usersCol);

// // Detect user login
// onAuthStateChanged(auth, user => {
//   if (user !== null) {
//     console.log('Logged in!');
//   } else {
//     console.log('User not found.');
//   }
// });
