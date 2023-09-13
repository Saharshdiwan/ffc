import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu9TrmL8ED1p7FWye70QPCpQ_PkC29qlY",
  authDomain: "funchick-c1ba8.firebaseapp.com",
  projectId: "funchick-c1ba8",
  storageBucket: "funchick-c1ba8.appspot.com",
  messagingSenderId: "326986025678",
  appId: "1:326986025678:web:ea32000e1cdcac3a631e9f",
  measurementId: "G-BMX079ZXF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

