// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzj1sUj82ps4PYwWXXr4abgeAwU_-bysA",
    authDomain: "auth-base-df67b.firebaseapp.com",
    projectId: "auth-base-df67b",
    storageBucket: "auth-base-df67b.appspot.com",
    messagingSenderId: "742987474361",
    appId: "1:742987474361:web:0a036d88442a668bda0268"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

// Google Authentication
const googleLogin = document.getElementById("googlebtn");
googleLogin.addEventListener("click", function (event) {
    event.preventDefault();

    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            alert(`Welcome ${user.displayName}!`);
            window.location.href = "newpage.html";
        })
        .catch((error) => {
            alert(`Google Sign-In Error: ${error.message}`);
        });
});

// Email and Password Authentication (Login)
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Input validation
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }
    if (!password) {
        alert("Password cannot be empty.");
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Logging into your account...");
            window.location.href = "newpage.html";
        })
        .catch((error) => {
            alert(`Login Error: ${error.message}`);
        });
});

// Password Reset
const reset = document.getElementById('reset');
reset.addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    // Input validation
    if (!email.includes("@")) {
        alert("Please enter a valid email address to reset your password.");
        return;
    }

    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Password reset email sent!");
        })
        .catch((error) => {
            alert(`Password Reset Error: ${error.message}`);
        });
});
