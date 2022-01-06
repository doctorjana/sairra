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
    import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

    const auth = getAuth();

    export function loginUser(){


    let email = document.getElementById("floatingInput").value;
    let password = document.getElementById("floatingPassword").value;
    
    const message = document.getElementById("message");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        console.log("user logged in");
        const user = userCredential.user;
        
        message.innerHTML = "Logged in!";
           
        //redirect to mainpage
        window.location.replace("index.html");

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if(errorCode=="auth/invalid-email"){
            message.innerHTML = "Please enter a valid Email id";
            //make the box red
        }else if(errorCode =="auth/wrong-password"){
            message.innerHTML = "Wrong password";
            
        }else if(errorCode =="auth/internal-error"){
            message.innerHTML = "Enter correct email id and password";
           
        }else if(errorCode =="auth/user-not-found"){
            message.innerHTML = "No such user exists";
            // make user red
        }
        else{
            message.innerHTML = "ERROR!";
        }
      });

    }