// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDzj1sUj82ps4PYwWXXr4abgeAwU_-bysA",
//     authDomain: "auth-base-df67b.firebaseapp.com",
//     projectId: "auth-base-df67b",
//     storageBucket: "auth-base-df67b.firebasestorage.app",
//     messagingSenderId: "742987474361",
//     appId: "1:742987474361:web:0a036d88442a668bda0268"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);


// //submit button
// const submit = document.getElementById('submit');
// submit.addEventListener("click", function (event) {
//     event.preventDefault();

//     //input
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const username = document.getElementById('username').value;
//     const phone = document.getElementById('phone').value;

//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed up 
//             const user = userCredential.user;
//             alert("Creating Account....")
//             window.location.href ="newpage.html";
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             alert(errorMessage)
//             // ..
//         });
// })
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

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

// Submit button
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault();

    // Input fields
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;
    const phone = document.getElementById('phone').value;

    // Validation flags
    let isValid = true;
    let errorMessage = "";

    // Email validation
    if (!email.includes("@")) {
        isValid = false;
        errorMessage += "Please enter a valid email address.\n";
    }

    // Username validation (e.g., must not be empty, at least 3 characters, and no numbers)
    const usernameRegex = /^[A-Za-z\s]+$/; // Allows only letters and spaces
    if (!username || username.length < 3) {
        isValid = false;
        errorMessage += "Username must be at least 3 characters long.\n";
    } else if (!usernameRegex.test(username)) {
        isValid = false;
        errorMessage += "Username must not contain numbers or special characters.\n";
    }

    // Phone number validation (e.g., must be numeric and of specific length)
    const phoneRegex = /^[0-9]{10}$/; // Adjust regex for your phone number format
    if (!phoneRegex.test(phone)) {
        isValid = false;
        errorMessage += "Please enter a valid 10-digit phone number.\n";
    }

    // Password validation (optional: add checks for length, special characters, etc.)
    if (!password || password.length < 6) {
        isValid = false;
        errorMessage += "Password must be at least 6 characters long.\n";
    }

    // If validation fails, show alert and stop submission
    if (!isValid) {
        alert(errorMessage);
        return;
    }

    // Proceed with Firebase Authentication if all validations pass
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Creating Account....");
            window.location.href = "newpage.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});
