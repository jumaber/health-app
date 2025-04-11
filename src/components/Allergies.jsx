export function Allergies({ patientInfo }) {
  const { allergies } = patientInfo;

  return (
    <div className="patient-wrap">
      <h2 className="info-header">Allergies</h2>
    <div className="info-box">
        {allergies.map((item, i) => (
          <div
            key={i}
            className="info-pill"
          >
            <p><span className="font-bold">{item.name}</span> - {item.severity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
