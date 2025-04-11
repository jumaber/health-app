export function Treatments({ patientInfo }) {
  const { currentTreatments } = patientInfo;

  return (
    <div className="patient-wrap">
      <div className="info-header">Current Treatments</div>
      <div className="info-box">
                {currentTreatments.map((item, i) => (
                  <div key={i} className="info-pill-large">
                    <p className="flex font-bold text-xl">{item.name}</p>
                    <p><span className="font-bold">Frequency: </span>{item.frequency}</p>
                    <p><span className="font-bold">Started on: </span>{item.treatmentBegin}</p>
                    <p><span className="font-bold">Treatement Length:  </span>{item.treatmentLength}</p>
                  </div>
                ))}
            </div>
    </div>
  );
}
