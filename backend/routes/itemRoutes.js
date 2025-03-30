// const express = require("express");
// const Item = require("../models/Item"); // Import Model

// const router = express.Router();

// // ➤ Create Item (POST)
// router.post("/", async (req, res) => {
//     try {
//         const newItem = new Item(req.body);
//         await newItem.save();
//         res.status(201).json(newItem);
//     } catch (err) {
//         res.status(500).json({ message: "Error creating item", error: err });
//     }
// });

// // ➤ Read All Items (GET)
// router.get("/", async (req, res) => {
//     try {
//         const items = await Item.find();
//         res.json(items);
//     } catch (err) {
//         res.status(500).json({ message: "Error fetching items", error: err });
//     }
// });

// // ➤ Read Single Item by ID (GET)
// router.get("/:id", async (req, res) => {
//     try {
//         const item = await Item.findById(req.params.id);
//         if (!item) return res.status(404).json({ message: "Item not found" });
//         res.json(item);
//     } catch (err) {
//         res.status(500).json({ message: "Error fetching item", error: err });
//     }
// });

// // ➤ Update Item (PUT)
// router.put("/:id", async (req, res) => {
//     try {
//         const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!updatedItem) return res.status(404).json({ message: "Item not found" });
//         res.json(updatedItem);
//     } catch (err) {
//         res.status(500).json({ message: "Error updating item", error: err });
//     }
// });

// // ➤ Delete Item (DELETE)
// router.delete("/:id", async (req, res) => {
//     try {
//         const deletedItem = await Item.findByIdAndDelete(req.params.id);
//         if (!deletedItem) return res.status(404).json({ message: "Item not found" });
//         res.json({ message: "Item deleted successfully" });
//     } catch (err) {
//         res.status(500).json({ message: "Error deleting item", error: err });
//     }
// });

// module.exports = router;

const express = require("express");
const multer = require("multer");
const Item = require("../models/Item");

const router = express.Router();

// Configure Multer Storage (Save Locally)
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"), // Folder where images are stored
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage });

// ➤ Upload Image & Create Item (POST)
router.post("/upload", upload.single("image"), async (req, res) => {
    try {
        const newItem = new Item({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            imageUrl: `/uploads/${req.file.filename}` // Store file path in MongoDB
        });

        await newItem.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(500).json({ message: "Error uploading image", error: err });
    }
});

// ➤ Fetch All Items
router.get("/", async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: "Error fetching items", error: err });
    }
});

module.exports = router;
