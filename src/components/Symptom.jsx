export default function Symptom({ symptoms }) {
  return (
    <div className="flex flex-col gap-4 py-5">
      {/* Header Row */}
      <div className="sticky top-0 z-10 bg-white flex flex-row gap-4 p-4 font-bold text-lg text-zinc-500 rounded-lg">
        <div className="flex-1">Title</div>
        <div className="flex-[2]">Description</div>
        <div className="w-24">Date</div>
        <div className="w-20">Time</div>
      </div>

      {/* Data Rows */}
      {symptoms.map((symptom, index) => (
        <div key={index} className="flex flex-row gap-4 px-4 py-8 bg-blue-100 rounded-lg">
          <div className="flex-1 font-bold">{symptom.title}</div>
          <div className="flex-[2]">{symptom.description}</div>
          <div className="w-24">{symptom.date.day}</div>
          <div className="w-20">{symptom.date.timeOfDay}</div>
        </div>
      ))}
    </div>
  );
}
