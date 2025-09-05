// Firebase configuration example
// Replace these values with your actual Firebase project config
// Get these values from Firebase Console > Project Settings > Web App
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTQLVgOYNg2Tn4SUXak4uWd66840OBcns",
  authDomain: "protfolio-6a58b.firebaseapp.com",
  projectId: "protfolio-6a58b",
  storageBucket: "protfolio-6a58b.appspot.com",
  messagingSenderId: "1033646093210",
  appId: "1:1033646093210:web:6814631b53443bae10c023",
  measurementId: "G-07D4NZ00P4"
};

// Instructions:
// 1. Create a new Firebase project at https://console.firebase.google.com
// 2. Enable Firestore Database in the Firebase Console
// 3. Create the following collections in Firestore:
//    - projects: for storing project information
//    - messages: for storing contact form submissions
// 4. Replace the config values above with your actual Firebase config
// 5. Update the firebaseConfig object in script.js with these values
// 6. Deploy to Firebase Hosting using `firebase deploy`

// Sample data structure for projects collection:
/*
{
    title: "Project Title",
    description: "Project description",
    tools: ["Tool1", "Tool2", "Tool3"],
    github: "https://github.com/username/repo",
    demo: "https://demo-url.com" // optional
}
*/

// Sample data structure for messages collection:
/*
{
    name: "Sender Name",
    email: "sender@email.com",
    message: "Message content",
    timestamp: Firebase serverTimestamp()
}
*/