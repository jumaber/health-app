import { Link } from "react-router-dom";
export function Supplements({ patientInfo }) {
  const { currentSupplements } = patientInfo;

  return (
    <div className="patient-wrap">
    <h2 className="info-header">Supplements</h2>
    <div className="info-box">
      {currentSupplements.map((supp, i) => (
        <div key={i} className="info-pill-link">

          <div className="flex flex-col">
            <span className="font-bold">{supp.name}</span>
            <p>{supp.amount} 
            ({supp.frequency}, {supp.intakeTime})
            </p>
          </div>

          <div>
            <Link
              to={supp.link}
              className="info-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${supp.name}`}
            >
              <img src="/src/assets/external-link.svg" alt={`External link to ${supp.name}`} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>

  );
}
