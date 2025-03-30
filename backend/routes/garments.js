const express = require("express");
const Garment = require("../models/Garment");

const router = express.Router();

// CREATE Garment
router.post("/", async (req, res) => {
    try {
        const garment = new Garment(req.body);
        await garment.save();
        res.status(201).json(garment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// READ All Garments
router.get("/", async (req, res) => {
    try {
        const garments = await Garment.find();
        res.json(garments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// READ Single Garment
router.get("/:id", async (req, res) => {
    try {
        const garment = await Garment.findById(req.params.id);
        if (!garment) return res.status(404).json({ message: "Garment not found" });
        res.json(garment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// UPDATE Garment
router.put("/:id", async (req, res) => {
    try {
        const updatedGarment = await Garment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedGarment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE Garment
router.delete("/:id", async (req, res) => {
    try {
        await Garment.findByIdAndDelete(req.params.id);
        res.json({ message: "Garment deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
