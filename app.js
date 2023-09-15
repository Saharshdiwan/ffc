require('dotenv').config(); // Load environment variables from .env file

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("reviewform");

document.getElementById("reviewform").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var full_name = getElementVal("full_name");
  var email = getElementVal("email");
  var message = getElementVal("message");
  var rating = getSelectedRating(); // Get the selected rating

  //console.log(full_name, email, message, rating); // for testing
  saveMessages(full_name, email, message, rating);

  //   reset the form
  document.getElementById("reviewform").reset();
}

const saveMessages = (full_name, email, message, rating) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    full_name: full_name,
    email: email,
    message: message,
    rating: rating,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

// Function to get the selected rating
const getSelectedRating = () => {
  const stars = document.querySelectorAll(".star1");
  let rating = 0;

  stars.forEach((star) => {
    if (star.classList.contains("selected")) {
      rating = star.getAttribute("data-rating");
    }
  });

  return rating;
};

// Add click event listeners to the stars for rating selection
const stars = document.querySelectorAll(".star1");
stars.forEach((star) => {
  star.addEventListener("click", () => {
    stars.forEach((s) => s.classList.remove("selected"));
    star.classList.add("selected");
  });
});
