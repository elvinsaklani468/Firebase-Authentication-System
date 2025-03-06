
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzj1sUj82ps4PYwWXXr4abgeAwU_-bysA",
    authDomain: "auth-base-df67b.firebaseapp.com",
    projectId: "auth-base-df67b",
    storageBucket: "auth-base-df67b.firebasestorage.app",
    messagingSenderId: "742987474361",
    appId: "1:742987474361:web:0a036d88442a668bda0268"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();




//submit button
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault();

    //input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    


    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("logging in your account....")
            window.location.href ="newpage.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });
})


//reset
const reset = document.getElementById('reset');
reset.addEventListener("click", function(event){
event.preventDefault()
const email=document.getElementById("email").value;
sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
    alert("email sent")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})


