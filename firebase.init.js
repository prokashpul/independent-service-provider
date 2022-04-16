// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfoCPzjJM2w_Yp3_rtOfobMwupjA-hNSE",
  authDomain: "proweb-wedding-photographer.firebaseapp.com",
  projectId: "proweb-wedding-photographer",
  storageBucket: "proweb-wedding-photographer.appspot.com",
  messagingSenderId: "891632399116",
  appId: "1:891632399116:web:0eb511f1bb9b2dd46d0f29",
  measurementId: "G-YNQ0F2FPWY",
};

// Initialize Firebase
const prowebApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(prowebApp);
const auth = getAuth(prowebApp);

export default auth;
