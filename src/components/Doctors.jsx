import { Link } from "react-router-dom";

export function Doctors({ patientInfo }) {
  const { currentDoctors } = patientInfo;

  return (
    <div className="patient-wrap">
      <div className="info-header">Current Doctors</div>
        <div className="info-box">
            {currentDoctors.map((doc, i) => (
              <div key={i} className="info-pill-link">
                
                <div className="flex flex-col">
                  <p className="font-bold">{doc.name}</p>
                  <p>{doc.specialty}</p>
                </div>
                
                <div>
                  <Link
                    to={doc.link}
                    className="info-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${doc.name}`}
                  >
                    <img src="/src/assets/external-link.svg" alt={`External link to ${doc.name}`} />
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
