// Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getDatabase, ref, set, onValue } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js';
// Firebase SDK
const firebaseConfig = {
  apiKey: "AIzaSyDxeU-bMAf-O0HYhz6X8yhsNPpqe19ld_8",
  authDomain: "apsc-database.firebaseapp.com",
  databaseURL: "https://apsc-database-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "apsc-database",
  storageBucket: "apsc-database.appspot.com",
  messagingSenderId: "848325536482",
  appId: "1:848325536482:web:efe7c6b0cd442eff6c0cbb"
};
// Firebase initialization
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

// Login code start	  
document.getElementById("login").addEventListener("click", function() {
  let email = document.getElementById("login_email").value;
  let password = document.getElementById("login_password").value;
  // For signin
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      window.location.href = "mainPage";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert("Invalid email or password ! !");
    });
});

// New Registration code start	  
document.getElementById("register").addEventListener("click", function() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPass = document.getElementById("confirmPass").value;
  let initializeNewUserNode = {
    'Machine Information': {
      coinsTotal: 0,
      current: 0,
      eWalletTotal: 0,
      lastDataUpdate: 0,
      reservoirLevel1: 0,
      reservoirLevel2: 0,
      voltage: 0
    },
    transactionHistory: {
      coins: {
        coinsTranasctionIdSample: 0
      },
      eWallet: {
        eWalletTranasctionIdSample: 0
      }
    }
  };
  if(password == confirmPass){
    // For new registration
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const dataRef = ref(database, `users/uid/${user.uid}`);
      //initializeNewUser
      set(dataRef, {
        TST001: initializeNewUserNode,
        email: user.email
      })
      .then(() => {
        console.log("User node created successfully");
      })
      .catch((error) => {
        console.error("Error creating user node:", error.message);
      });
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

// Forgot Password functionality
const forgotPasswordLink = document.getElementById("forgotPasswordLink");
const resetPasswordPopup = document.getElementById("resetPasswordPopup");
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
