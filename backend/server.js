const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const reviewsRoute = require('./routes/Reviews');
const galleryRoute = require('./routes/galleryRoutes');
const authRoute = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json()); // replaces bodyParser.json()

// Serve uploaded images
app.use('/uploads', express.static('uploads'));

// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to MongoDB ✅'))
  .catch(err => console.error('MongoDB connection error ❌:', err));

// Routes
app.use('/api/reviews', reviewsRoute);
app.use('/api/gallery', galleryRoute);
app.use('/api/auth', authRoute); // Auth routes

// Root route
app.get('/', (req, res) => {
  res.send(`Server is running on http://localhost:${PORT}`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});






// const express = require('express');
// const mongoose = require('mongoose');

// const cors = require('cors');
// require('dotenv').config();

// const reviewsRoute = require('./routes/Reviews');
// const galleryRoute = require('./routes/galleryRoutes');
// const authRoute = require('./routes/auth');

// const app = express();
// const PORT = process.env.PORT || 8000;

// // Middleware
// app.use(cors());
// app.use(express.json()); // replaces bodyParser.json()

// // Serve uploaded images
// app.use('/uploads', express.static('uploads'));

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URL)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // Routes
// app.use('/api/reviews', reviewsRoute);
// app.use('/api/gallery', galleryRoute);
// app.use('/api/auth', authRoute); // updated route prefix

// // Root route
// app.get('/', (req, res) => {
//   res.send(`Server is running on http://localhost:${PORT}`);
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


