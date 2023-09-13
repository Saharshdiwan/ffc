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

    var firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

