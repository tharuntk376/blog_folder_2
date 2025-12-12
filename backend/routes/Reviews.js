const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Create a new review
//Get all reviews
router.get('/', async (req, res) => {
    try {
     const reviews = await Review.find().sort({ created_at: -1 });
     res.json(reviews);
    } catch (error) {

        res.status(500).json({ message: 'Server Error' });
    }
});


// Create a new review
// get single review by ID
router.get('/:id', async (req, res) => {
    try {   
        const review = await Review.findById(req.params.id);
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.json(review);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
}); 

// Create a new review
router.post('/', async (req, res) => {
    const { name, message, profile_image } = req.body;
    try {   
        const newReview = new Review({ name, message, profile_image });
        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// Update a review by ID
router.put('/:id', async (req, res) => {
    const { name, message, profile_image } = req.body;
    try {
        const updatedReview = await Review.findByIdAndUpdate(
            req.params.id,
            { name, message, profile_image, updated_at: Date.now() },
            { new: true }
        );
        if (!updatedReview) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.json(updatedReview);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
}); 

// Delete a review by ID
router.delete('/:id', async (req, res) => {
    try {       
        const deletedReview = await Review.findByIdAndDelete(req.params.id);
        if (!deletedReview) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.json({ message: 'Review deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;