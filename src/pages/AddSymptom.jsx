import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AddSymptom({ symptoms, setSymptoms }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [intensity, setIntensity] = useState("");
  const [day, setDay] = useState("");
  const [timeOfDay, setTimeOfDay] = useState([]);
  const [stressLevel, setStressLevel] = useState("");
  const [medication, setMedication] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSymptom = {
      title,
      description,
      type,
      intensity,
      stressLevel,
      medication,
      date: {
        day,
        timeOfDay,
      },
    };

    console.log("Submitting new symptom:", newSymptom); // 👈 Add this here

    fetch("https://julia-health-app.onrender.com/api/symptoms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSymptom),
    })
      .then((res) => res.json())
      .then((data) => {
        setSymptoms([data, ...symptoms]);
        navigate("/symptoms");
      })
      .catch((error) => {
        console.error("Error adding symptom:", error);
      });

    setTitle("");
    setDescription("");
    setType("");
    setIntensity("");
    setDay("");
    setTimeOfDay([]);
    setStressLevel("");
    setMedication("");
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
    setTimeOfDay(
      (prev) =>
        prev.includes(option)
          ? prev.filter((t) => t !== option) // remove if already selected
          : [...prev, option] // add if not selected
    );
  };


  return (
    <div className="flex w-screen overflow-x-hidden bg-zinc-100 min-h-screen px-3 pb-20 pt-10 md:px-6 lg:pl-82">
      <div className="bg-white w-full shadow-md rounded-xl p-6 max-w-2xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-zinc-800 lmb-4">
          Add a New Symptom
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
          <div>
            <label className="form-label">Type</label>
            {pillOptions(type, setType, ["Symptom", "Food", "Period"])}
          </div>

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

          <div>
            <label className="form-label">Describe what you experienced</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-textarea"
              required
            />
          </div>

          <div>
            <label className="form-label">How intense was the symptom?</label>
            {pillOptions(intensity, setIntensity, ["Low", "Medium", "High"])}
          </div>

          <div>
            <label className="form-label">Stress Level</label>
            {pillOptions(stressLevel, setStressLevel, [
              "Low",
              "Medium",
              "High",
            ])}
          </div>

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

          <div>
            <label className="form-label">Medication</label>
            <input
              type="text"
              placeholder="Medication Name or Notes"
              value={medication}
              onChange={(e) => setMedication(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="pt-4">
            <button type="submit" className="symptom-button">
              + Add New Symptom
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
