// import { initializeApp } from "firebase/app";

// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore, doc, setDoc } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAHExHfMDRu2lVecgYxgW86TXDF-dvsWrY",
//   authDomain: "personal-finance-tracker-ec56e.firebaseapp.com",
//   projectId: "personal-finance-tracker-ec56e",
//   storageBucket: "personal-finance-tracker-ec56e.appspot.com",
//   messagingSenderId: "669303047696",
//   appId: "1:669303047696:web:5b4b41cc896752c03e6c95",
//   measurementId: "G-7X36E69HYW",
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// export { db, auth, provider, doc, setDoc };







// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxJVDfswDsDzRNMeDBtHNyQqhPbLG7xNo",
  authDomain: "expense-app-761f6.firebaseapp.com",
  projectId: "expense-app-761f6",
  storageBucket: "expense-app-761f6.appspot.com",
  messagingSenderId: "108772299485",
  appId: "1:108772299485:web:e3d6e68070ce17c9e40134",
  measurementId: "G-3KW43HG8E7"


  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // projectId: process.env.P_ID,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId: process.env.MESSAGING_SENDERID,
  // appId: process.env.APP_ID,
  // measurementId: process.env.MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };