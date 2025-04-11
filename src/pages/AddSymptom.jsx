import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AddSymptom({ symptoms, setSymptoms }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [intensity, setIntensity] = useState("");
  const [day, setDay] = useState("");
  const [timeOfDay, setTimeOfDay] = useState("");

  const navigate = useNavigate();


  

  const newSymptom = {
    id: crypto.randomUUID(),
    title,
    description,
    type,
    intensity,
    date: {
      day,
      timeOfDay,
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  const updatedSymptomsList = [...symptoms, newSymptom];
      setSymptoms(updatedSymptomsList);
      setTitle("");
      setDescription("");
      setType("");
      setIntensity("");
      setDay("");
      setTimeOfDay("")

      navigate (`/symptoms/${newSymptom.id}`)
  };


  return (
    <div className="bg-zinc-100 h-full overflow-x-hidden px-3 pb-20 pt-10 md:px-6 md:pt-10 md:pb-3 lg:p-18 lg:ml-72">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="input-header">Type</label>
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="input-pill"
        />

        <label className="input-header">What did symptom occured?</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-style"
        />

        <label className="input-header">Describe what you experienced</label>
        <textarea
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input-style"
        />

        <label className="input-header">How intense was the symptom?</label>
        <input
          type="text"
          value={intensity}
          onChange={(e) => setIntensity(e.target.value)}
          className="input-style"
        />

        <label className="input-header">When did it happen?</label>
        <input
          type="date"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className="input-style"
        />

        <input
          type="time"
          value={timeOfDay}
          onChange={(e) => setTimeOfDay(e.target.value)}
          className="input-style"
        />

        <button type="submit" className="symptom-button">
          Submit Symptom
        </button>
      </form>
    </div>
  );
}
