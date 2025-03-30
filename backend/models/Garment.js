const mongoose = require("mongoose");

const garmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String }, // Store URL or path to uploaded image
    price: { type: Number, required: true }
});

module.exports = mongoose.model("Garment", garmentSchema);
