import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
const firebaseConfig = {
    apiKey: "AIzaSyCUiVI-EXu6WziCCxiAqbiEOLq8pEUbZZo",
    authDomain: "chat-app-92d2f.firebaseapp.com",
    projectId: "chat-app-92d2f",
    storageBucket: "chat-app-92d2f.appspot.com",
    messagingSenderId: "220652473629",
    appId: "1:220652473629:web:ff7d49a3f8b8da823f25f4",
    measurementId: "G-XYZV8XZT5E"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Initialize the Realtime Database
  const database = firebase.database();
// Reference to a specific location in the database
const dbRef = database.ref("/users");

// Data to be written
const userData = {
  name: "Shahzainfarooqi",
  email: "shahzainfarooqi594@gmail.com"
};

// Push data to the database
const newUserRef = dbRef.push(userData);

// Get the unique ID generated for the new data
console.log("New user key:", newUserRef.key);
// Read data from the database
dbRef.on("value", (snapshot) => {
    const users = snapshot.val();
    console.log("Users:", users);
  });
    



