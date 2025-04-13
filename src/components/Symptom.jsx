import { useNavigate } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react"; // optional icon package


const moodEmojis = {
  Happy: "😊",
  Calm: "😌",
  Ok: "😐",
  Tired: "😴",
  Overwhelmed: "😰",
  Stressed: "😣",
  Sad: "😢",
  Angry: "😠",
  Unwell: "🤒",
  Excited: "🤩",
};


export default function Symptom({ symptoms, fetchSymptoms, setSymptoms }) {
  const navigate = useNavigate();

  const getTypeClass = (type) => {
    switch (type) {
      case "Symptom":
        return "pill pill-symptom";
      case "Food":
        return "pill pill-food";
      case "Period":
        return "pill pill-period";
      default:
        return "pill";
    }
  };

  const getIntensityClass = (level) => {
    switch (level) {
      case "Low":
        return "pill pill-low";
      case "Medium":
        return "pill pill-medium";
      case "High":
        return "pill pill-high";
      default:
        return "pill";
    }
  };

  const getTimeClass = () => "pill pill-time";
  const getDateClass = () => "pill pill-date";

  const formatDate = (dateString) => {
    if (!dateString) return "—";
    const [year, month, day] = dateString.split("-");
    if (!day) return dateString;
    return `${day}/${month}/${year}`;
  };

  const handleDelete = async (id) => {
    console.log("Deleting symptom with ID:", id);

    try {
      const res = await fetch(
        `https://julia-health-app.onrender.com/api/symptoms/${id}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        setSymptoms((prev) => prev.filter((s) => s._id !== id));
      }
    } catch (err) {
      console.error("Failed to delete:", err);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-symptom/${id}`);
  };

  return (
    <div className="flex flex-col gap-4 py-5 w-full">
      {/* Header Row */}
      <div className="bg-white hidden lg:flex flex-row lg:gap-4 gap-2 p-4 font-bold text-lg text-zinc-500 rounded-lg w-full">
        <div className="w-24">Type</div>
        <div className="flex-1">Title</div>
        <div className="flex-[2]">Description</div>
        <div className="w-28">Intensity</div>
        <div className="w-36">Mood</div>
        <div className="w-32">Date & Time</div>
        <div className="flex-1">Medication</div>
        <div className="w-20">Actions</div>
      </div>

      {/* Data Rows */}
      {symptoms.map((symptom) => {
        console.log("Symptom:", symptom); // 🔍 Check if medication field is coming through

        return (
          <div
            key={symptom._id}
            className="flex flex-col lg:flex-row gap-3 p-4 bg-blue-50 hover:bg-blue-100 transition rounded-xl w-full border border-blue-200"
          >
            <div className="lg:w-24">
              <span className={getTypeClass(symptom.type)}>{symptom.type}</span>
            </div>

            <div className="flex-1 text-xl pb-0 font-bold">{symptom.title}</div>

            <div className="flex-[2] text-zinc-700">{symptom.description}</div>

            <div className="flex flex-col gap-1 lg:w-28 content-center">
              <span className="font-bold text-zinc-500 text-xs lg:hidden">
                Intensity
              </span>
              <span className={getIntensityClass(symptom.intensity)}>
                {symptom.intensity}
              </span>
            </div>

            <div className="lg:w-36 flex flex-col flex-wrap justify-start  gap-1">
              <span className="font-bold text-zinc-500 text-xs lg:hidden">
                Mood
              </span>
              <div className="flex flex-row lg:flex-col gap-1">
                {(symptom.mood || []).map((m, i) => (
                  <span key={i} className="pill pill-time min-w-max">
                    {moodEmojis[m] || ""} {m}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:w-36 flex flex-col text-left gap-2">
              {/* Mobile: stacked label + date */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-2">
                {/* Mobile label + date inline */}
                <div className="flex flex-col lg:hidden gap-2">
                  <span className="font-bold text-zinc-600 text-xs">
                    Date & Time
                  </span>
                  <span className={getDateClass()}>
                    {formatDate(symptom.date?.day)}
                  </span>
                </div>

                {/* Desktop: date pill only (label already in header row) */}
                <span className={`hidden lg:inline ${getDateClass()}`}>
                  {formatDate(symptom.date?.day)}
                </span>
              </div>

              {/* Time pills row (always shown) */}
              <div className="flex flex-wrap gap-1">
                {(Array.isArray(symptom.date?.timeOfDay)
                  ? symptom.date.timeOfDay
                  : [symptom.date?.timeOfDay]
                ).map((time, idx) => (
                  <span key={idx} className={getTimeClass()}>
                    {time}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-1 text-sm text-zinc-700 content-center">
              <span className="font-bold text-zinc-600 text-xs lg:hidden">
                Medication or Treatment{" "}
              </span>
              {symptom.medication || <span className="text-zinc-400">—</span>}
            </div>

            <div className="flex lg:w-20 gap-2 lg:items-center items-end justify-end">
              <button
                onClick={() => handleEdit(symptom._id)}
                className="p-2 rounded-full bg-white hover:bg-blue-300"
                aria-label="Edit"
              >
                <Pencil size={16} />
              </button>
              <button
                onClick={() => handleDelete(symptom._id)}
                className="p-2 rounded-full bg-red-300 hover:bg-blue-00"
                aria-label="Delete"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
