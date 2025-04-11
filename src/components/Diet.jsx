export function Diet({ patientInfo }) {
  const { currentDietAdjustments } = patientInfo;

  return (
    <div className="patient-wrap">
      <div className="info-header">Diet Adjustments</div>
      <div className="info-box">
        {currentDietAdjustments.map((diet, i) => (
          <div key={i} className="info-pill font-bold">
            {diet}
          </div>
        ))}
      </div>
    </div>
  );
}
