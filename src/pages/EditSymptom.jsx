import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function EditSymptom({ symptoms, setSymptoms }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const existingSymptom = symptoms.find((s) => s._id === id);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [intensity, setIntensity] = useState("");
  const [day, setDay] = useState("");
  const [timeOfDay, setTimeOfDay] = useState([]);
  const [medication, setMedication] = useState("");
  const [hasMedication, setHasMedication] = useState(false);
  const [mood, setMood] = useState([]);

  useEffect(() => {
    if (existingSymptom) {
      setTitle(existingSymptom.title);
      setDescription(existingSymptom.description);
      setType(existingSymptom.type);
      setIntensity(existingSymptom.intensity);
      setMood(existingSymptom.mood || []);
      setMedication(existingSymptom.medication || "");
      setHasMedication(!!existingSymptom.medication);
      setDay(existingSymptom.date?.day || "");
      setTimeOfDay(existingSymptom.date?.timeOfDay || []);
    }
  }, [existingSymptom]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedSymptom = {
      title,
      description,
      type,
      intensity,
      mood,
      medication: hasMedication ? medication : null,
      date: {
        day,
        timeOfDay,
      },
    };

    fetch(`https://julia-health-app.onrender.com/api/symptoms/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedSymptom),
    })
      .then((res) => {
        console.log("PUT status:", res.status);
        return res.json();
      })
      .then((data) => {
        console.log("Updated symptom:", data);
        const updatedList = symptoms.map((s) => (s._id === id ? data : s));
        setSymptoms(updatedList);
        navigate("/symptoms");
      })
      .catch((error) => {
        console.error("Error updating symptom:", error);
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

  if (!existingSymptom) {
    return (
      <div className="p-10 text-xl text-red-600 font-semibold">
        Symptom not found.
      </div>
    );
  }

  return (
    <div className="flex w-screen overflow-x-hidden bg-zinc-100 min-h-screen px-3 pb-20 pt-22 lg:pt-30 md:px-6">
      <div className="bg-white w-full shadow-md rounded-xl p-6 max-w-2xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-zinc-800 mb-4">Edit Symptom</h1>

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
                    hasMedication ? "bg-green-500" : "bg-gray-300"
                  }`}
                  onClick={() => setHasMedication(!hasMedication)}
                >
                  <div
                    className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
                      hasMedication ? "translate-x-6" : "translate-x-0"
                    }`}
                  ></div>
                </div>
                <span className="text-sm text-zinc-700">
                  {hasMedication ? "Yes" : "No"}
                </span>
              </div>
            </div>

            {hasMedication && (
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
              Update Symptom
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
