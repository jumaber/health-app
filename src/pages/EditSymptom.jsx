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
  const [stressLevel, setStressLevel] = useState("");
  const [hasMedication, setHasMedication] = useState(false);
  const [medication, setMedication] = useState("");

  useEffect(() => {
    if (existingSymptom) {
      setTitle(existingSymptom.title);
      setDescription(existingSymptom.description);
      setType(existingSymptom.type);
      setIntensity(existingSymptom.intensity);
      setStressLevel(existingSymptom.stressLevel);
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
      stressLevel,
      medication: hasMedication ? medication : null,
      date: {
        day,
        timeOfDay,
      },
    };

    console.log("Updating symptom:", updatedSymptom);


    fetch(`http://localhost:5050/api/symptoms/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedSymptom),
    })
      .then((res) => res.json())
      .then((data) => {
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

  if (!existingSymptom) {
    return (
      <div className="p-10 text-xl text-red-600 font-semibold">
        Symptom not found.
      </div>
    );
  }

  return (
    <div className="flex w-screen overflow-x-hidden bg-zinc-100 min-h-screen px-3 pb-20 pt-10 md:px-6 lg:pl-82">
      <div className="bg-white w-full shadow-md rounded-xl p-6 max-w-2xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-zinc-800 mb-4">Edit Symptom</h1>

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
            />
          </div>

          <div>
            <label className="form-label">Describe what you experienced</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-textarea"
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
            {/* Label + Toggle + Yes/No in one row */}
            <div className="flex items-center justify-between mb-2">
              <label className="form-label">Medication Taken?</label>

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

            {/* Conditional input below */}
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

          <div className="pt-4">
            <button type="submit" className="symptom-button">
              Update Symptom
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
