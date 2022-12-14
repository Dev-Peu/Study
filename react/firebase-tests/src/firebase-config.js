import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqZ7ef0FjZe4LCE7cAQHkaelrTbz9f9ZU",
  authDomain: "tests-devpeu.firebaseapp.com",
  projectId: "tests-devpeu",
  storageBucket: "tests-devpeu.appspot.com",
  messagingSenderId: "19123789137",
  appId: "1:19123789137:web:80e26752a21ad991058770",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
