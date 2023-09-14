// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDaolVTt9Yxz_C1EH3DYTT2z-2o1HeL5Tc",
  authDomain: "starreviewffc.firebaseapp.com",
  databaseURL:
    "https://starreviewffc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "starreviewffc",
  storageBucket: "starreviewffc.appspot.com",
  messagingSenderId: "868968318839",
  appId: "1:868968318839:web:2f7d5218e3a4f79e518372",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//referance databse
var ReviewFormDb = firebase.database().ref("reviewform");

document.getElementById("reviewform").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var full_name = getElementVal("full_name");
  var email = getElementVal("email");
  //var full_name = getElementVal("full_name");
  var message = getElementVal("message");

  console.log(full_name, email, message);
  saveMessage(full_name, email, message);
}

const saveMessage = (full_name, email, message) => {
  var newreviewform = ReviewFormDb.push();
  newreviewform.set({
    full_name: full_name,
    email: email,
    message: message,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
