export function Diagnosis({ patientInfo }) {
  const { currentDiagnosis } = patientInfo;

  return (
    <div className="patient-wrap">
      <div className="info-header">Current Diagnosis</div>    
        <div className="info-box-col">
            {currentDiagnosis.map((item, i) => (
              <div
                key={i}
                className="info-pill-large"
              >
                <p className="flex font-bold text-xl">{item.condition}</p>
                <p>
                  <span className="font-bold">Diagnosis Year: </span>
                  {item.diagnosisYear}
                </p>
                <p>
                  <span className="font-bold">Notes: </span>
                  {item.notes}
                </p>
              </div>
            ))}
      </div>
    </div>

  );
}
