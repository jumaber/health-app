import { Link } from "react-router-dom";
import Symptom from "/src/components/Symptom";

export function SymptomsList({ symptoms }) {
  return (
    <div className="flex w-screen overflow-x-hidden px-3 py-6 bg-zinc-100 min-h-screen pb-20 pt-10 md:px-6 lg:pl-82">
      <div className="w-full pr-3 mx-auto space-y-6">
        {/* Your page content */}
        <div className="flex lg:flex-row flex-col gap-10 justify-between w-full">
          <h1 className="font-bold">Symptoms List</h1>
          <Link to="/addsymptoms">
            <button className="symptom-button">+ Add Symptom</button>
          </Link>
        </div>

        <div>
          <Symptom symptoms={symptoms} />
        </div>
      </div>
    </div>
  );
}
