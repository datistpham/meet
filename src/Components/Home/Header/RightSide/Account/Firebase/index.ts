import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { FirebaseConfig } from "../../../../../../docs/type/firebase_config"


const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyCWLnFbRFdhXbdzVVVVdAS-YVvHefPjY08",
  authDomain: "meet-df496.firebaseapp.com",
  projectId: "meet-df496",
  storageBucket: "meet-df496.appspot.com",
  messagingSenderId: "325114582078",
  appId: "1:325114582078:web:5c6fec07ea5a8a31882d6f",
  measurementId: "G-M0HGTEXTFS"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export { app, analytics }

