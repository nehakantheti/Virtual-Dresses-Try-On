// const mongoose = require("mongoose");

// const ItemSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     description: { type: String },
//     price: { type: Number, required: true },
//     createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model("Item", ItemSchema);


const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    imageUrl: { type: String }, // Store image path or URL
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Item", ItemSchema);
