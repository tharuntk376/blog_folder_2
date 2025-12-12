const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
    image_url: { type: String, required: true },
    title: { type: String },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Gallery", gallerySchema);
