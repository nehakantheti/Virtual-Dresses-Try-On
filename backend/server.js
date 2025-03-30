// require("dotenv").config();
// const express = require("express");
// const multer = require("multer")
// const mongoose = require("mongoose");
// const cors = require("cors");
// const itemRoutes = require("./routes/itemRoutes"); // Import routes

// const app = express();
// app.use(cors());
// app.use(express.json());


// mongoose.connect(process.env.MONGO_URI)
// .then(() => console.log("MongoDB connected"))
// .catch(err => console.log("MongoDB connection error:", err));

// // Use item routes
// app.use("/api/items", itemRoutes);

// app.get("/", (req, res) => {
//     res.send("API is running...");
// });

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => cb(null, "uploads/"),
//     filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
// });

// const upload = multer({ storage });


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


require("dotenv").config(); // Load environment variables

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const uploadRoutes = require("./routes/upload");
const garmentRoutes = require("./routes/garments");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // Serve uploaded files

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB connection error:", err));

app.use("/api/upload", uploadRoutes);
app.use("/api/garments", garmentRoutes);

app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
