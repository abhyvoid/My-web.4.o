// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBjSQoODv0AoPsExhsbLrYTyP90LOJX_9Y",
  authDomain: "my-web4o.firebaseapp.com",
  projectId: "my-web4o",
  storageBucket: "my-web4o.firebasestorage.app",
  messagingSenderId: "226593866449",
  appId: "1:226593866449:web:425d6df4eef46bbfd9fbf0"
};

// Initialize once, export the shared auth instance
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
