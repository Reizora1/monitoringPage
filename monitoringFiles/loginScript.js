// Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// Firebase SDK
const firebaseConfig = {
  apiKey: "AIzaSyDxeU-bMAf-O0HYhz6X8yhsNPpqe19ld_8",
  authDomain: "apsc-database.firebaseapp.com",
  projectId: "apsc-database",
  storageBucket: "apsc-database.appspot.com",
  messagingSenderId: "848325536482",
  appId: "1:848325536482:web:efe7c6b0cd442eff6c0cbb"
};
// Firebase initialization
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
console.log(firebaseApp);

// Forgot Password functionality
const forgotPasswordLink = document.getElementById("forgotPasswordLink");
const resetPasswordPopup = document.getElementById("resetPasswordPopup");
const resetPasswordForm = document.getElementById("resetPasswordForm");
const resetPasswordBtn = document.getElementById("resetPasswordBtn");
forgotPasswordLink.addEventListener("click", function () {
  resetPasswordPopup.style.display = "block";
  console.log("Reset Password window display.");
});
function closeResetPasswordPopup() {
  resetPasswordPopup.style.display = "none";
  console.log("Reset Password window closed.");
}
// For close button in resetPass popup
document.body.addEventListener('click', function(event) {
  if (event.target.classList.contains('close')) {
    closeResetPasswordPopup();
  }
});
window.addEventListener("click", function (event) {
  if (event.target == resetPasswordPopup) {
    closeResetPasswordPopup();
  }
});
resetPasswordBtn.addEventListener("click", function () {
  const resetEmail = document.getElementById("resetEmail").value;
  // Send password reset email
  sendPasswordResetEmail(auth, resetEmail)
    .then(() => {
      alert("Password reset email sent. Please check your email.");
      closeResetPasswordPopup();
      console.log("Password reset email sent.");
    })
    .catch((error) => {
      console.error(error.message);
      alert("Error sending password reset email. Please try again.");
    });
});

// New Registration code start	  
document.getElementById("register").addEventListener("click", function() {
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var confirmPass = document.getElementById("confirmPass").value;
  if(password == confirmPass){
    // For new registration
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert("Registration successful ! !");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(error);
    });
  }
  else{
    alert("Passwords does not match!");
    console.log("Passwords does not match!");
  }
});

// Login code start	  
document.getElementById("login").addEventListener("click", function() {
var email = document.getElementById("login_email").value;
var password = document.getElementById("login_password").value;
// For signin
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // Redirect to mainPage HTML page after successful login
    window.location.href = "mainPage";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    alert("Invalid email or password ! !");
  });
});
