import { Link } from "react-router-dom";

export function Medication({ patientInfo }) {
  const { currentMedication } = patientInfo;

  return (
    <div className="patient-wrap">
    <h2 className="info-header">Medication</h2>
    <div className="info-box">
      {currentMedication.map((med, i) => (
        <div key={i} className="info-pill-link">

        <div>
          <span className="font-bold">{med.name}</span> – {med.amount} (
          {med.frequency}, {med.intakeTime})
        </div>

         <div>
            <Link
              to={med.link}
              className="info-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${med.name}`}
            >
              <img src="/src/assets/external-link.svg" alt={`External link to ${med.name}`} />
            </Link>
          </div>

        </div>
      ))}
    </div>
  </div>
  );
}
