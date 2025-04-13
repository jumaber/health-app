import { Link } from "react-router-dom";
import Symptom from "/src/components/Symptom";

export function SymptomsList({ symptoms, setSymptoms, fetchSymptoms }) {
   console.log("SymptomsList is rendering", symptoms);
  return (
    <div className="flex w-screen h-screen overflow-x-hidden px-3 lg:px-30 pt-30 bg-zinc-100 min-h-screen pb-20 pt-10 md:px-6">
      <div className="w-full pr-3 mx-auto space-y-6">
        {/* Your page content */}
        <div className="flex lg:flex-row flex-col gap-10 justify-between w-full">
          <h1 className="font-bold">Symptoms List</h1>
          <Link to="/add-symptoms">
            <button className="symptom-button">+ Add Symptom</button>
          </Link>
        </div>

        <div>
          <Symptom
            symptoms={symptoms}
            setSymptoms={setSymptoms}
            fetchSymptoms={fetchSymptoms}
          />
        </div>
      </div>
    </div>
  );
}
