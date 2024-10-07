// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8A_AamXc9D7YHRqN3dJ4VLAQU6qPMbQw",
    authDomain: "form-firebase-authentica-27ae3.firebaseapp.com",
    projectId: "form-firebase-authentica-27ae3",
    storageBucket: "form-firebase-authentica-27ae3.appspot.com",
    messagingSenderId: "183841209886",
    appId: "1:183841209886:web:ecb76c593b45505bc5780f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);