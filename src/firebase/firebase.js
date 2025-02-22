import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDifnvaNk4ad1kf8kGt374V6hcxJYL4L5Y",
  authDomain: "placementprep-e65cb.firebaseapp.com",
  projectId: "placementprep-e65cb",
  storageBucket: "placementprep-e65cb.firebasestorage.app",
  messagingSenderId: "727506527228",
  appId: "1:727506527228:web:bbe79cf7be7aeb956a0879",
  measurementId: "G-GMLJVYB67D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);