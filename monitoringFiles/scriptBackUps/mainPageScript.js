// Imports
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import { getDatabase, ref, onValue } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js';

let userID;

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

onAuthStateChanged(auth, (user) => {
    const authenticatedContent = document.getElementById('authenticatedContent');
    if (user) {
        userID = user.uid;
        authenticatedContent.style.display = 'block';
        welcomeTxt.textContent = `Welcome, ${user.email}!`;
    } else {
        window.location.href = "loginPage";
    }
});

// HTML elements
const toggleViewButton = document.getElementById('toggleButton');
const displayTransactTypeBtn = document.getElementById("displayTransactionType");
const searchLink = document.getElementById("searchIDLink");
const searchPopup = document.getElementById("searchPopup");
const rootNodeInput = document.getElementById('rootNodeInput');
const searchBtn = document.getElementById("searchBtn");
const dataContainer = document.getElementById('dataContainer');
const txtView = document.getElementById('textView');
const txtView1 = document.getElementById('textView1');
const welcomeTxt = document.getElementById('welcomeTxt');

// Toggle view functionality for machineData and transactionHistory.
let isTransactionHistoryView = false;
window.toggleView = function() {
    if (rootNodeInput.value.trim() == "") {
        alert("Please enter a machineID!");
        dataContainer.style.display = "none";
        txtView1.style.display = "none";
        return;
    }
    else if (isTransactionHistoryView) { // 2nd to display on the 2nd toggleViewButton click.
        toggleViewButton.textContent = 'View Machine Data';
        txtView.textContent = 'TRANSACTION HISTORY';
        viewData();
        searchLink.style.display = "block";
        displayTransactTypeBtn.style.display = "block";
        dataContainer.style.display = "block";
        console.log("Viewing Transaction History.");
    }
    else { // 1st to display on the initial toggleViewButton click.
        toggleViewButton.textContent = 'View Transaction History';
        txtView.textContent = 'MACHINE DATA';
        viewData();
        searchLink.style.display = "none";
        displayTransactTypeBtn.style.display = "none";
        txtView1.style.display = "none";
        dataContainer.style.display = "block";
        console.log("Viewing Machine Data.");
    }
    isTransactionHistoryView = !isTransactionHistoryView;
};

function viewData() {
    const rootNode = rootNodeInput.value.trim();
    if(!isTransactionHistoryView) {
        const databaseRef = ref(database, `users/uid/${userID}/${rootNode}/Machine Information`);
        onValue(databaseRef, (snapshot) => {
            toggleViewButton.textContent = "View Transaction History"
            txtView.textContent = "MACHINE DATA";
            txtView1.style.display = "none";
            displayTransactTypeBtn.style.display = "none";
            searchLink.style.display = "none";
            const data = snapshot.val();
            displayMachineData(data, dataContainer);
        });
        console.log(rootNode);
    }
    else {
        const databaseRef = ref(database, `users/uid/${userID}/${rootNode}/transactionHistory`);
        onValue(databaseRef, (snapshot) => {
            const data = snapshot.val();
            displayTransactionData(data, dataContainer);
        });
        console.log(rootNode);
    }
};

// Toggle view functionality for coins and eWallet.
let isDisplayEwalletHistory = false;
window.toggleCoinEwalletHistory = function() {
    if (rootNodeInput.value.trim() == "") {
        alert("Please enter a machineID!");
        dataContainer.style.display = "none";
        txtView1.style.display = "none";
        return;
    }
    else if (isDisplayEwalletHistory) {
        displayTransactTypeBtn.textContent = 'Display Coins';
        txtView1.style.display = "block";
        dataContainer.style.display = "block";
        txtView1.textContent = "EWALLET TRANSACTIONS";
        viewTransactionHistoryType();
        console.log("Viewing E-Wallet History.");
    }
    else {
        displayTransactTypeBtn.textContent = 'Display E-Wallet';
        txtView1.style.display = "block";
        dataContainer.style.display = "block";
        txtView1.textContent = "COIN TRANSACTIONS";
        viewTransactionHistoryType();
        console.log("Viewing Coins History.");
    }
    isDisplayEwalletHistory = !isDisplayEwalletHistory;
};

function viewTransactionHistoryType() {
    const rootNode = rootNodeInput.value.trim();
    if(!isDisplayEwalletHistory) {
        const databaseRef = ref(database, `users/uid/${userID}/${rootNode}/transactionHistory/coins`);
        onValue(databaseRef, (snapshot) => {
            const data = snapshot.val();
            displayTransactionData(data, dataContainer);
        });
    }
    else {
        const databaseRef = ref(database, `users/uid/${userID}/${rootNode}/transactionHistory/eWallet`);
        onValue(databaseRef, (snapshot) => {
            const data = snapshot.val();
            displayTransactionData(data, dataContainer);
        });
    }
};

// Search transactionID from database functionality
function searchTransactionHistory() { 
    const rootNode = rootNodeInput.value.trim();
    const transactionID = document.getElementById('transactionID').value.trim();
    const databaseRef = ref(database, `users/uid/${userID}/${rootNode}/transactionHistory/eWallet/${transactionID}`);
    txtView1.textContent = `Transaction ID: ${transactionID}`;
    
    if(transactionID == "") {
        alert('Enter transactionID to search.');
    }
    else {
        onValue(databaseRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            if(data != null) {
                displayMachineData(data, dataContainer);
                txtView1.style.display = "block";
            }
            else {
                alert("Invalid transactionID!");
                dataContainer.textContent = "INVALID TRANSACTION ID!";
                txtView1.style.display = "none";
            }
        });
    }
};

// Search transactionID link functionality
searchLink.addEventListener("click", function () {
    if(rootNodeInput.value.trim() == "") {
        alert('Please enter a MachineID first!');
        dataContainer.style.display = "none";
        txtView1.style.display = "none";
    }
    else {
        searchPopup.style.display = "block";
    }
});
// search transactionID popUp
function closesearchPopup() {
    searchPopup.style.display = "none";
}
// For close toggleViewButton in search popup
document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('close')) {
        closesearchPopup();
    }
});
window.addEventListener("click", function (event) {
    if (event.target == searchPopup) {
        closesearchPopup();
    }
});
searchBtn.addEventListener("click", function () {
    searchTransactionHistory();
    dataContainer.style.display = "block";
    closesearchPopup();
});

function displayMachineData(data, container) {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    if(data && typeof data === 'object') {
        for (const key in data) {
            const row = document.createElement('tr');
            const keyCell = document.createElement('td');
            keyCell.textContent = key;
            row.appendChild(keyCell);

            const valueCell = document.createElement('td');
            if (typeof data[key] === 'object') {
                displayMachineData(data[key], valueCell);
            } else {
                valueCell.textContent = data[key];
            }
            row.appendChild(valueCell);
            tbody.appendChild(row);
        }
        table.appendChild(tbody);
        container.innerHTML = '';
        container.appendChild(table);
    }
    else {
        const row = document.createElement('tr');
        const errorCell = document.createElement('td');
        errorCell.textContent = 'Error: Invalid MachineID';
        row.appendChild(errorCell);
        tbody.appendChild(row);
    }
}

function displayTransactionData(data, container) {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    if (data && typeof data === 'object') {
        const keys = Object.keys(data).sort((a, b) => b - a);
        const latestKeys = keys.slice(-5).reverse();

        for (const key of latestKeys) {
            const row = document.createElement('tr');
            const keyCell = document.createElement('td');
            keyCell.textContent = key;
            row.appendChild(keyCell);

            const valueCell = document.createElement('td');
            const value = data[key];

            if (typeof value === 'object') {
                displayTransactionData(value, valueCell);
            } else {
                valueCell.textContent = value;
            }
            row.appendChild(valueCell);
            tbody.appendChild(row);
        }
    }
    else {
        const row = document.createElement('tr');
        const errorCell = document.createElement('td');
        errorCell.textContent = 'Error: Invalid MachineID';
        row.appendChild(errorCell);
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    container.innerHTML = '';
    container.appendChild(table);
}

window.logout = function() {
    signOut(auth)
        .then(() => {
            // Sign-out successful.
        })
        .catch((error) => {
            console.error(`Logout failed: ${error.message}`);
        });
};
