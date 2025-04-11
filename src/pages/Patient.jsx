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

  const Section = ({ title, children }) => (
    <section className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
      <h2 className="text-xl font-bold text-blue-700 border-b pb-2">{title}</h2>
      {children}
    </section>
  );

  const Pill = ({ children }) => (
    <div className="bg-blue-100 text-zinc-800 px-4 py-2 rounded-xl font-medium">
      {children}
    </div>
  );

  const Divider = () => <hr className="border-t border-zinc-200 my-4" />;

  return (
    <div className="bg-zinc-100 min-h-screen px-3 pb-20 pt-10 md:px-6 lg:ml-72 space-y-8">
      <h1 className="text-3xl font-bold text-zinc-800 mb-6">
        Patient Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Section title="About Me">
          <ul className="divide-y divide-zinc-200">
            <li className="py-2">
              <strong>Name:</strong> {userInformation.name}
            </li>
            <li className="py-2">
              <strong>Last Name:</strong> {userInformation.lastName}
            </li>
            <li className="py-2">
              <strong>Birth Date:</strong> {userInformation.birthDate}
            </li>
            <li className="py-2">
              <strong>Gender:</strong> {userInformation.gender}
            </li>
            <li className="py-2">
              <strong>Blood Type:</strong> {userInformation.bloodType}
            </li>
            <li className="py-2">
              <strong>Children:</strong> {userInformation.children}
            </li>
            <li className="py-2">
              <strong>Status:</strong> {userInformation.status}
            </li>
            <li className="py-2">
              <strong>Origin:</strong> {userInformation.countryOfOrigin}
            </li>
            <li className="py-2">
              <strong>Residence:</strong> {userInformation.countryOfResidence}
            </li>
          </ul>
        </Section>

        <Section title="Current Diagnosis">
          {currentDiagnosis.map((item, i) => (
            <div key={i} className="space-y-1">
              <p className="text-lg font-semibold">{item.condition}</p>
              <p>
                <strong>Year:</strong> {item.diagnosisYear}
              </p>
              <p>
                <strong>Notes:</strong> {item.notes}
              </p>
              {i !== currentDiagnosis.length - 1 && <Divider />}
            </div>
          ))}
        </Section>

        <Section title="Allergies">
          <div className="flex flex-wrap gap-3">
            {allergies.map((item, i) => (
              <Pill key={i}>
                {item.name} – {item.severity}
              </Pill>
            ))}
          </div>
        </Section>

        <Section title="Medication">
          {currentMedication.map((med, i) => (
            <div
              key={i}
              className={`flex justify-between items-center py-2 ${
                i !== currentMedication.length - 1
                  ? "border-b border-zinc-200"
                  : ""
              }`}
            >
              <div>
                <p>
                  <strong>{med.name}</strong> – {med.amount} ({med.frequency},{" "}
                  {med.intakeTime})
                </p>
              </div>
              <Link to={med.link} target="_blank" rel="noopener noreferrer">
                <img
                  src="/src/assets/external-link.svg"
                  alt={med.name}
                  className="w-5 h-5"
                />
              </Link>
            </div>
          ))}
        </Section>

        <Section title="Supplements">
          {currentSupplements.map((supp, i) => (
            <div
              key={i}
              className={`flex justify-between items-center py-2 ${
                i !== currentSupplements.length - 1
                  ? "border-b border-zinc-200"
                  : ""
              }`}
            >
              <div>
                <p>
                  <strong>{supp.name}</strong>
                </p>
                <p>
                  {supp.amount} ({supp.frequency}, {supp.intakeTime})
                </p>
              </div>
              <Link to={supp.link} target="_blank" rel="noopener noreferrer">
                <img
                  src="/src/assets/external-link.svg"
                  alt={supp.name}
                  className="w-5 h-5"
                />
              </Link>
            </div>
          ))}
        </Section>

        <Section title="Current Treatments">
          {currentTreatments.map((item, i) => (
            <div key={i} className="space-y-1">
              <p className="text-lg font-semibold">{item.name}</p>
              <p>
                <strong>Frequency:</strong> {item.frequency}
              </p>
              <p>
                <strong>Started on:</strong> {item.treatmentBegin}
              </p>
              <p>
                <strong>Length:</strong> {item.treatmentLength}
              </p>
              {i !== currentTreatments.length - 1 && <Divider />}
            </div>
          ))}
        </Section>

        <Section title="Diet Adjustments">
          <div className="flex flex-wrap gap-3">
            {currentDietAdjustments.map((diet, i) => (
              <Pill key={i}>{diet}</Pill>
            ))}
          </div>
        </Section>

        <Section title="Current Doctors">
          {currentDoctors.map((doc, i) => (
            <div
              key={i}
              className={`flex justify-between items-center py-2 ${
                i !== currentDoctors.length - 1
                  ? "border-b border-zinc-200"
                  : ""
              }`}
            >
              <div>
                <p className="font-semibold">{doc.name}</p>
                <p>{doc.specialty}</p>
              </div>
              <Link to={doc.link} target="_blank" rel="noopener noreferrer">
                <img
                  src="/src/assets/external-link.svg"
                  alt={doc.name}
                  className="w-5 h-5"
                />
              </Link>
            </div>
          ))}
        </Section>
      </div>
    </div>
  );
}
