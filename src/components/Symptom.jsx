import { useNavigate } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react"; // optional icon package

export default function Symptom({ symptoms, fetchSymptoms }) {
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
    try {
      const res = await fetch(
        `https://julia-health-app.onrender.com/api/symptoms/${id}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        fetchSymptoms(); // 🔁 Refresh data from backend
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
      <div className="bg-white hidden lg:flex flex-row gap-4 p-4 font-bold text-lg text-zinc-500 rounded-lg w-full">
        <div className="w-24">Type</div>
        <div className="flex-1">Title</div>
        <div className="flex-[2]">Description</div>
        <div className="w-28">Intensity</div>
        <div className="w-28">Stress</div>
        <div className="w-24">Date</div>
        <div className="w-32">Time</div>
        <div className="flex-1">Medication</div>
        <div className="w-20">Actions</div>
      </div>

      {/* Data Rows */}
      {symptoms.map((symptom) => {
        console.log("Symptom:", symptom); // 🔍 Check if medication field is coming through

        return (
          <div
            key={symptom._id}
            className="flex flex-col lg:flex-row gap-4 px-4 py-6 bg-blue-50 hover:bg-blue-100 transition rounded-xl w-full border border-blue-200"
          >
            <div className="w-24">
              <span className={getTypeClass(symptom.type)}>{symptom.type}</span>
            </div>

            <div className="flex-1 font-bold">{symptom.title}</div>

            <div className="flex-[2] text-zinc-700">{symptom.description}</div>

            <div className="w-28">
              <span className={getIntensityClass(symptom.intensity)}>
                {symptom.intensity}
              </span>
            </div>

            <div className="w-28">
              <span className={getIntensityClass(symptom.stressLevel)}>
                {symptom.stressLevel}
              </span>
            </div>

            <div className="w-24">
              <span className={getDateClass()}>
                {formatDate(symptom.date?.day)}
              </span>
            </div>

            <div className="w-32 flex flex-wrap gap-1">
              {(Array.isArray(symptom.date?.timeOfDay)
                ? symptom.date.timeOfDay
                : [symptom.date?.timeOfDay]
              ).map((time, idx) => (
                <span key={idx} className={getTimeClass()}>
                  {time}
                </span>
              ))}
            </div>

            <div className="flex-1 italic text-sm text-zinc-700">
              {symptom.medication || <span className="text-zinc-400">—</span>}
            </div>

            <div className="flex gap-2 items-center justify-end">
              <button
                onClick={() => handleEdit(symptom._id)}
                className="p-2 rounded-full bg-yellow-100 hover:bg-yellow-200"
                aria-label="Edit"
              >
                <Pencil size={16} />
              </button>
              <button
                onClick={() => handleDelete(symptom._id)}
                className="p-2 rounded-full bg-red-100 hover:bg-red-200"
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
