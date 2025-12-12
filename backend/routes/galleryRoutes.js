const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const Gallery = require("../models/Gallery");

// Add image to gallery
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    const imageUrl = `http://localhost:8000/uploads/${req.file.filename}`;

    const newImage = new Gallery({
      title: req.body.title,
      image_url: imageUrl
    });

    await newImage.save();

    return res.json({ success: true, imageUrl });

  } catch (error) {
    console.error("Upload error:", error);
    return res.status(500).json({ success: false, message: "Upload failed", error });
  }
});



// Get all gallery images
router.get("/", async (req, res) => {
    try {
        const images = await Gallery.find().sort({ created_at: -1 });
        res.json(images);
    } catch (error) {
        res.status(500).json({ error: "Error fetching images" });
    }
});

module.exports = router;
