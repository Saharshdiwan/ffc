// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 5500; // Change this to your desired port
// const mongoURI = 'mongodb://localhost:27017'; // Change to your MongoDB URI
// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// // Define a schema for your reviews
// const reviewSchema = new mongoose.Schema({
//     full_name: String,
//     email_address: String,
//     rating: Number,
//     message: String,
// });

// const Review = mongoose.model('Review', reviewSchema);

// app.use(bodyParser.urlencoded({ extended: true }));

// app.post('/submit', async (req, res) => {
//     // Get data from the form
//     const { full_name, email_address, rating, message } = req.body;

//     // Create a new review document
//     const newReview = new Review({
//         full_name,
//         email_address,
//         rating,
//         message,
//     });

//     try {
//         // Save the review to the MongoDB database
//         await newReview.save();
//         res.send('Review added successfully.');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error adding review.');
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

    // var firebaseConfig = {
    //     apiKey: "AIzaSyBu9TrmL8ED1p7FWye70QPCpQ_PkC29qlY",
    //     authDomain: "YOUR_AUTH_DOMAIN",
    //     projectId: "funchick-c1ba8",
    //     storageBucket: "gs://funchick-c1ba8.appspot.com",
    //     messagingSenderId: "326986025678",
    //     appId: "YOUR_APP_ID"
    // };

    // // Initialize Firebase
    // firebase.initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
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

/*  

    // Initialize a variable to store the user's selected rating
    
        var fullName = document.getElementById('full_name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        if (selectedRating !== null) {
            // Rating is selected; you can now use 'selectedRating' to store it in Firebase
            console.log('Selected Rating:', selectedRating);
            
            // Your Firebase code to store the review data here
        } else {
            console.error('Please select a rating.');
        }
    });*/