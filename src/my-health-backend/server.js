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
const User = require("./models/User");
const bcrypt = require("bcrypt");


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

//Register User

app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: "Username already exists" });
    }

    // Hash the password
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // Save the user
    const newUser = new User({ username, passwordHash });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("❌ Registration error:", err);
    res.status(500).json({ message: "Server error" });
  }
});


// Login User
const jwt = require("jsonwebtoken");

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // 1. Find user
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 2. Compare password
    const passwordValid = await bcrypt.compare(password, user.passwordHash);
    if (!passwordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 3. Create JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({ token });
  } catch (err) {
    console.error("❌ Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
