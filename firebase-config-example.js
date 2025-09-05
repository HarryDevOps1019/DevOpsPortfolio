// Firebase configuration example
// Replace these values with your actual Firebase project config
// Get these values from Firebase Console > Project Settings > Web App

const firebaseConfig = {
    apiKey: "your-api-key-here",
    authDomain: "your-project-id.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
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