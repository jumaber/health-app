const mongoose = require("mongoose");

const symptomSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: {
    day: String,
    timeOfDay: String,
  },
  intensity: String,
  type: String,
});

const Symptom = mongoose.model("Symptom", symptomSchema);

module.exports = Symptom;
