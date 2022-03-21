// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAD5XCJa8QD8V4lPHPJyQmfKlWgfuN4OTg",
//   authDomain: "blue-ocean-coriander.firebaseapp.com",
//   projectId: "blue-ocean-coriander",
//   storageBucket: "blue-ocean-coriander.appspot.com",
//   messagingSenderId: "573241081148",
//   appId: "1:573241081148:web:e55b1f5d20f4752a957239",
//   measurementId: "G-FGFWLHWL71"
// };

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