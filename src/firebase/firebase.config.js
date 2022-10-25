// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3MvS3dHncVlxG2kmMPLwb-OoqTeRh7OQ",
  authDomain: "north-tech.firebaseapp.com",
  projectId: "north-tech",
  storageBucket: "north-tech.appspot.com",
  messagingSenderId: "249572870328",
  appId: "1:249572870328:web:dad26e5fc5480ae9298c4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;