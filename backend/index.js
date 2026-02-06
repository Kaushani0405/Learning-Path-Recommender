const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const recommendRoute = require("./routes/recommend");

const app = express();

app.use(cors());
app.use(express.json());

// DEBUG: check env
console.log("Mongo URI exists:", !!process.env.MONGO_URI);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err.message));

app.use("/api/recommend", recommendRoute);

app.get("/", (req, res) => {
  res.send("Backend running with MongoDB");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
