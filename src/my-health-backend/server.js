// server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://jumaber:K0ktVbUTSwQBCUJj@myhealthapp.umwqmav.mongodb.net/?retryWrites=true&w=majority&appName=MyHealthApp";
mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Define Symptom schema and model
const symptomSchema = new mongoose.Schema({
  title: String,
  description: String,
  type: String,
  intensity: String,
  mood: [String],
  medication: String,
  date: {
    day: String,
    timeOfDay: [String],
  },
});

const Symptom = mongoose.model("Symptom", symptomSchema);

// Routes

app.get("/api/ping", (req, res) => {
  res.json({ message: "✅ You’re hitting the backend!" });
});

// GET a single symptom by ID (for testing or debugging)
// GET all symptoms
app.get("/api/symptoms", async (req, res) => {
  try {
    const symptoms = await Symptom.find();
    res.json(symptoms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT (update) a symptom by ID
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

// Post Symptom
app.post("/api/symptoms", async (req, res) => {
  try {
    const newSymptom = new Symptom(req.body);
    const savedSymptom = await newSymptom.save();
    res.status(201).json(savedSymptom);
  } catch (error) {
    res.status(400).json({ message: "Error saving symptom", error });
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
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
