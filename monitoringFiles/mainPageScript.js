import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import { getDatabase, ref, onValue } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js';
const firebaseConfig = {
    apiKey: "AIzaSyDxeU-bMAf-O0HYhz6X8yhsNPpqe19ld_8",
    authDomain: "apsc-database.firebaseapp.com",
    databaseURL: "https://apsc-database-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "apsc-database",
    storageBucket: "apsc-database.appspot.com",
    messagingSenderId: "848325536482",
    appId: "1:848325536482:web:efe7c6b0cd442eff6c0cbb"
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

onAuthStateChanged(auth, (user) => {
    const authenticatedContent = document.getElementById('authenticatedContent');
    if (user) {
        authenticatedContent.style.display = 'block';
        //viewMachineInfo();
        console.log("Logged in with " + user.email);
    } else {
        window.location.href = "loginPage";
    }
});

let isTransactionHistoryView = false;

window.toggleView = function() {
const button = document.getElementById('toggleButton');
const txtView = document.getElementById('textView');
const txtView2 = document.getElementById('textView2');
const dataContainer = document.getElementById('dataContainer');

if (isTransactionHistoryView) {
    button.textContent = 'View Machine Data';
    txtView.textContent = 'TRANSACTION HISTORY';
    txtView2.textContent = 'TYPE ============= TRANSACTION ID ======================= TRANSACTION DETAILS';
    viewTransactionHistory();
    console.log("Viewing Transaction History.");
} else {
    button.textContent = 'View Transaction History';
    txtView.textContent = 'MACHINE DATA';
    txtView2.textContent = 'PARAMETERS ========================================================== VALUE';
    viewMachineInfo();
    console.log("Viewing Machine Data.");
}
isTransactionHistoryView = !isTransactionHistoryView;
};

window.viewMachineInfo = function() {
    const dataContainer = document.getElementById('dataContainer');
    const rootNodeInput = document.getElementById('rootNodeInput');
    const rootNode = rootNodeInput.value.trim(); // Get the value and remove leading/trailing spaces
    const databaseRef = ref(database, rootNode + '/Machine Information');

    onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        displayData(data, dataContainer);
    });
    console.log(rootNode);
};

window.viewTransactionHistory = function() {
    const dataContainer = document.getElementById('dataContainer');
    const rootNodeInput = document.getElementById('rootNodeInput');
    const rootNode = rootNodeInput.value.trim(); // Get the value and remove leading/trailing spaces
    const databaseRef = ref(database, rootNode + '/transactionHistory');

    onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        displayData(data, dataContainer);
    });
    console.log(rootNode);
};

window.logout = function() {
    signOut(auth)
        .then(() => {
            // Sign-out successful.
        })
        .catch((error) => {
            console.error(`Logout failed: ${error.message}`);
        });
};

function displayData(data, container) {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    // Get keys from data object
    const keys = Object.keys(data).sort((a, b) => a - b);

    // Latest 5 entries
    const latestKeys = keys.slice(-5); // Select the last 5 keys

    for (const key of latestKeys) {
        const row = document.createElement('tr');

        const keyCell = document.createElement('td');
        keyCell.textContent = key;
        row.appendChild(keyCell);

        const valueCell = document.createElement('td');
        const value = data[key];

        if (typeof value === 'object') {
            displayData(value, valueCell);
        } else {
            valueCell.textContent = value;
        }

        row.appendChild(valueCell);
        tbody.appendChild(row);
    }

    table.appendChild(tbody);
    container.innerHTML = '';
    container.appendChild(table);
}
