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
const MONGO_URI = process.env.MONGO_URI || "your-default-mongo-uri";
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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
app.get("/api/symptoms", async (req, res) => {
  try {
    const symptoms = await Symptom.find();
    res.json(symptoms);
  } catch (error) {
    res.status(500).json({ message: "Error fetching symptoms", error });
  }
});

app.post("/api/symptoms", async (req, res) => {
  try {
    const newSymptom = new Symptom(req.body);
    const savedSymptom = await newSymptom.save();
    res.status(201).json(savedSymptom);
  } catch (error) {
    res.status(400).json({ message: "Error saving symptom", error });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
