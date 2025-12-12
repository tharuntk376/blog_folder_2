const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const reviewsRoute = require('./routes/Reviews');
require("dotenv").config();


const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Serve uploaded images folder
app.use("/uploads", express.static("./uploads"));
// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch(err => {
    console.error("MongoDB connection error:", err);
});

// Routes
app.use('/api/reviews', reviewsRoute);
app.use("/api/gallery", require("./routes/galleryRoutes"));

// Start the server



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

