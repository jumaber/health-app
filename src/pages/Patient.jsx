import { Link } from "react-router-dom";

export function Patient({ patientInfo }) {
  const {
    userInformation,
    currentDiagnosis,
    allergies,
    currentMedication,
    currentSupplements,
    currentTreatments,
    currentDietAdjustments,
    currentDoctors,
  } = patientInfo;

  return (
    <div className="bg-zinc-100 h-full overflow-x-hidden px-3 pb-20 pt-10 md:px-6 md:pt-10 md:pb-3 lg:p-18 lg:ml-72">
      <h1 className="mb-10">Patient Info</h1>
      <div className="flex flex-col gap-10 w-full max-w-full">
        {/* User Information */}
        <div className="patient-wrap">
          <h2 className="info-header">About Me</h2>
          <div className="info-box">
            <div className="flex flex-col gap-6 min-w-sm">
              <p className="info-pill-link">
                Name <span className="font-bold">{userInformation.name}</span>
              </p>
              <p className="info-pill-link">
                Last Name{" "}
                <span className="font-bold">{userInformation.lastName}</span>
              </p>
              <p className="info-pill-link">
                Birth Date{" "}
                <span className="font-bold">{userInformation.birthDate}</span>
              </p>
              <p className="info-pill-link">
                Gender{" "}
                <span className="font-bold">{userInformation.gender}</span>
              </p>
              <p className="info-pill-link">
                Blood Type{" "}
                <span className="font-bold">{userInformation.bloodType}</span>
              </p>
            </div>
            <div className="flex flex-col gap-6 min-w-sm">
              <p className="info-pill-link">
                Children{" "}
                <span className="font-bold">{userInformation.children}</span>
              </p>
              <p className="info-pill-link">
                Status{" "}
                <span className="font-bold">{userInformation.status}</span>
              </p>
              <p className="info-pill-link">
                Originally from{" "}
                <span className="font-bold">
                  {userInformation.countryOfOrigin}
                </span>
              </p>
              <p className="info-pill-link">
                Residing in{" "}
                <span className="font-bold">
                  {userInformation.countryOfResidence}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Diagnosis */}
        <div className="patient-wrap">
          <div className="info-header">Current Diagnosis</div>
          <div className="info-box-col">
            {currentDiagnosis.map((item, i) => (
              <div key={i} className="info-pill-large">
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

        {/* Allergies */}
        <div className="patient-wrap">
          <h2 className="info-header">Allergies</h2>
          <div className="info-box">
            {allergies.map((item, i) => (
              <div key={i} className="info-pill">
                <p>
                  <span className="font-bold">{item.name}</span> -{" "}
                  {item.severity}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Medication */}
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
                    <img
                      src="/src/assets/external-link.svg"
                      alt={`External link to ${med.name}`}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supplements */}
        <div className="patient-wrap">
          <h2 className="info-header">Supplements</h2>
          <div className="info-box">
            {currentSupplements.map((supp, i) => (
              <div key={i} className="info-pill-link">
                <div className="flex flex-col">
                  <span className="font-bold">{supp.name}</span>
                  <p>
                    {supp.amount} ({supp.frequency}, {supp.intakeTime})
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
                    <img
                      src="/src/assets/external-link.svg"
                      alt={`External link to ${supp.name}`}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Treatments */}
        <div className="patient-wrap">
          <div className="info-header">Current Treatments</div>
          <div className="info-box">
            {currentTreatments.map((item, i) => (
              <div key={i} className="info-pill-large">
                <p className="flex font-bold text-xl">{item.name}</p>
                <p>
                  <span className="font-bold">Frequency: </span>
                  {item.frequency}
                </p>
                <p>
                  <span className="font-bold">Started on: </span>
                  {item.treatmentBegin}
                </p>
                <p>
                  <span className="font-bold">Treatement Length: </span>
                  {item.treatmentLength}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Diet */}
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

        {/* Doctors */}
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
                    <img
                      src="/src/assets/external-link.svg"
                      alt={`External link to ${doc.name}`}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
