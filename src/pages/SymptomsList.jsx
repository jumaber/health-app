import { Link } from "react-router-dom";
import Symptom from "/src/components/Symptom";

export function SymptomsList({ symptoms }) {
  return (
    <div className="bg-zinc-100 h-full overflow-x-hidden px-3 pb-20 pt-10 md:px-6 md:pt-10 md:pb-3 lg:p-18 lg:ml-72">
      <div className="flex flex-row justify-between pb-6">
        <h1>Symptoms List</h1>
        <Link to="/addsymptoms">
          <button className="symptom-button">+ Add Symptom</button>
        </Link>
      </div>

      <div>
        <Symptom symptoms={symptoms} />
      </div>
    </div>
  );
}
