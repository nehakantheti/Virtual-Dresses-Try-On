const express = require("express");
const multer = require("multer");
const fs = require("fs");

const router = express.Router();

// Ensure "uploads/" folder exists
const uploadDir = "uploads/";
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Multer Storage Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({ storage });

// File upload endpoint
router.post("/", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }
    res.json({ 
        message: "File uploaded successfully", 
        fileUrl: `/uploads/${req.file.filename}` 
    });
});

module.exports = router;
