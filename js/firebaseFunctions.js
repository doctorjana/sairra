 // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {

    apiKey: "AIzaSyCpng3pAg0ZOf5yeVvovM_T4CjMFY8QHF4",

    authDomain: "sairra-firebase.firebaseapp.com",

    projectId: "sairra-firebase",

    storageBucket: "sairra-firebase.appspot.com",

    messagingSenderId: "897746306938",

    appId: "1:897746306938:web:362c24f9155ef0864d38c3",

    measurementId: "G-WVXPLN2XLT"

  };


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);



import { getAuth, onAuthStateChanged, signOut  } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(uid);
  } else {
    // User is signed out
    // ...
    console.log("user is logged out");
      //redirect to login page    
    window.location.replace("login.html");
  }
});

 export function logoutUser(){
     signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
 }
