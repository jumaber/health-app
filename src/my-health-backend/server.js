const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Basic test route
app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

// Load the model
const Symptom = require("./models/Symptom");

// GET all symptoms
app.get("/api/symptoms", async (req, res) => {
  try {
    const symptoms = await Symptom.find();
    res.json(symptoms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new symptom
app.post("/api/symptoms", async (req, res) => {
  console.log("🛬 Received req.body:");
  console.dir(req.body, { depth: null }); // Full object printout

  const newSymptom = new Symptom(req.body);

  try {
    const saved = await newSymptom.save();
    console.log("✅ Saved to MongoDB:");
    console.dir(saved, { depth: null }); // What actually saved
    res.status(201).json(saved);
  } catch (err) {
    console.error("❌ Error saving symptom:", err);
    res.status(400).json({ message: err.message });
  }
});


// PUT (update) an existing symptom
app.put("/api/symptoms/:id", async (req, res) => {
  try {
    const updatedSymptom = await Symptom.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedSymptom) {
      return res.status(404).json({ message: "Symptom not found" });
    }

    res.json(updatedSymptom);
  } catch (err) {
    console.error("❌ Update failed:", err);
    res.status(500).json({ message: "Failed to update symptom" });
  }
});

// DELETE a symptom by ID
app.delete("/api/symptoms/:id", async (req, res) => {
  try {
    const deletedSymptom = await Symptom.findByIdAndDelete(req.params.id);

    if (!deletedSymptom) {
      return res.status(404).json({ message: "Symptom not found" });
    }

    res.status(200).json({ message: "Symptom deleted successfully" });
  } catch (err) {
    console.error("❌ Delete failed:", err);
    res.status(500).json({ message: "Failed to delete symptom" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
