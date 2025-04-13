import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AddSymptom({ symptoms, setSymptoms, fetchSymptoms }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [intensity, setIntensity] = useState("");
  const [day, setDay] = useState("");
  const [timeOfDay, setTimeOfDay] = useState([]);
  const [medication, setMedication] = useState("");
  const [mood, setMood] = useState([]);

  const navigate = useNavigate();

  const moodOptions = [
    { label: "Happy", emoji: "😊" },
    { label: "Calm", emoji: "😌" },
    { label: "Ok", emoji: "😐" },
    { label: "Tired", emoji: "😴" },
    { label: "Overwhelmed", emoji: "😰" },
    { label: "Stressed", emoji: "😣" },
    { label: "Sad", emoji: "😢" },
    { label: "Angry", emoji: "😠" },
    { label: "Unwell", emoji: "🤒" },
    { label: "Excited", emoji: "🤩" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSymptom = {
      title,
      description,
      type,
      intensity,
      mood,
      medication: medication.trim() || null,
      date: {
        day,
        timeOfDay,
      },
    };

    setTitle("");
    setDescription("");
    setType("");
    setIntensity("");
    setDay("");
    setTimeOfDay([]);
    setMood([]);
    setMedication("");

    fetch("https://julia-health-app.onrender.com/api/symptoms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSymptom),
    })
      .then((res) => res.json())
      .then((data) => {
        fetchSymptoms(); // ← refresh with full server list
        navigate("/symptoms");
      })

      .catch((error) => {
        console.error("Error adding symptom:", error);
      });
  };

  const pillOptions = (state, setState, options) => (
    <div className="flex gap-2 flex-wrap">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setState(option)}
          className={`pill-button ${
            state === option ? "pill-button-active" : "pill-button-inactive"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );

  const toggleTimeOfDay = (option) => {
    setTimeOfDay((prev) =>
      prev.includes(option)
        ? prev.filter((t) => t !== option)
        : [...prev, option]
    );
  };

  const isMedicationOn = medication !== "";

  return (
    <div className="flex w-screen overflow-x-hidden bg-zinc-100 min-h-screen px-3 pb-20 pt-22 lg:pt-30 md:px-6">
      <div className="bg-white w-full shadow-md rounded-xl p-6 max-w-2xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-zinc-800 mb-4">
          Add a New Symptom
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
          {/* Type */}
          <div>
            <label className="form-label">Type</label>
            {pillOptions(type, setType, ["Symptom", "Food", "Period"])}
          </div>

          {/* Title */}
          <div>
            <label className="form-label">What did symptom occur?</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-input"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="form-label">Describe what you experienced</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-textarea"
              required
            />
          </div>

          {/* Intensity */}
          <div>
            <label className="form-label">How intense was the symptom?</label>
            {pillOptions(intensity, setIntensity, ["Low", "Medium", "High"])}
          </div>

          {/* Mood */}
          <div>
            <label className="form-label">How is your mood?</label>
            <div className="flex gap-2 flex-wrap">
              {moodOptions.map(({ label, emoji }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() =>
                    setMood((prev) =>
                      prev.includes(label)
                        ? prev.filter((m) => m !== label)
                        : [...prev, label]
                    )
                  }
                  className={`pill-button ${
                    mood.includes(label)
                      ? "pill-button-active"
                      : "pill-button-inactive"
                  }`}
                >
                  {emoji} {label}
                </button>
              ))}
            </div>
          </div>

          {/* Date */}
          <div className="flex-1">
            <label className="form-label">Day</label>
            <input
              type="date"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="form-input"
              required
            />
          </div>

          {/* Time of Day */}
          <div>
            <label className="form-label">Time of Day</label>
            <div className="flex gap-2 flex-wrap">
              {["Morning", "Noon", "Afternoon", "Evening", "Night"].map(
                (option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => toggleTimeOfDay(option)}
                    className={`pill-button ${
                      timeOfDay.includes(option)
                        ? "pill-button-active"
                        : "pill-button-inactive"
                    }`}
                  >
                    {option}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Medication */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="form-label">Medication or Treatment</label>
              <div className="flex items-center gap-3">
                <div
                  className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition ${
                    isMedicationOn ? "bg-green-500" : "bg-gray-300"
                  }`}
                  onClick={() =>
                    setMedication((prev) => (prev === "" ? " " : ""))
                  }
                >
                  <div
                    className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
                      isMedicationOn ? "translate-x-6" : "translate-x-0"
                    }`}
                  ></div>
                </div>
                <span className="text-sm text-zinc-700">
                  {isMedicationOn ? "Yes" : "No"}
                </span>
              </div>
            </div>

            {isMedicationOn && (
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Medication Name or Notes"
                  value={medication}
                  onChange={(e) => setMedication(e.target.value)}
                  className="form-input"
                />
              </div>
            )}
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button type="submit" className="symptom-button-lg">
              + Add New Symptom
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
