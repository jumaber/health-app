import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export function Overview({ patientInfo }) {
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

  const sectionBorders = [
    "border-purple-200",
    "border-yellow-200",
    "border-indigo-200",
    "border-green-200",
    "border-pink-200",
    "border-blue-200",
    "border-zinc-200",
    "border-amber-200",
  ];

  const Section = ({ title, children, colorIndex }) => (
    <section
      className={`bg-white p-6 rounded-2xl shadow-sm space-y-4 border ${
        sectionBorders[colorIndex % sectionBorders.length]
      }`}
    >
      <h2 className="text-xl font-bold text-zinc-800 border-b border-zinc-300 pb-2">
        {title}
      </h2>
      {children}
    </section>
  );

  const Pill = ({ children, color = "bg-blue-100 text-zinc-800" }) => (
    <div className={`px-4 py-2 rounded-xl font-medium ${color}`}>
      {children}
    </div>
  );

  const Divider = () => <hr className="border-t border-zinc-300 my-4" />;

  return (
    <div className="flex flex-col w-screen h-screen overflow-x-hidden px-3 lg:px-30 pt-30 bg-zinc-100 min-h-screen pb-20 pt-10 md:px-6">
      <h1 className="text-4xl font-extrabold text-zinc-800 mb-6">
        👀 Overview
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Section title="👤 About Me" colorIndex={0}>
          <ul className="divide-y divide-zinc-300">
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

        <Section title="🩺 Current Diagnosis" colorIndex={1}>
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

        <Section title="🌿 Allergies" colorIndex={2}>
          <div className="flex flex-wrap gap-3">
            {allergies.map((item, i) => (
              <Pill key={i} color="bg-amber-100 text-amber-800">
                {item.name} – {item.severity}
              </Pill>
            ))}
          </div>
        </Section>

        <Section title="💊 Medication" colorIndex={3}>
          {currentMedication.map((med, i) => (
            <div
              key={i}
              className={`flex justify-between items-center py-2 ${
                i !== currentMedication.length - 1
                  ? "border-b border-zinc-300"
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
                <ExternalLink className="w-5 h-5 text-blue-600" />
              </Link>
            </div>
          ))}
        </Section>

        <Section title="🍀 Supplements" colorIndex={4}>
          {currentSupplements.map((supp, i) => (
            <div
              key={i}
              className={`flex justify-between items-center py-2 ${
                i !== currentSupplements.length - 1
                  ? "border-b border-zinc-300"
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
                <ExternalLink className="w-5 h-5 text-blue-600" />
              </Link>
            </div>
          ))}
        </Section>

        <Section title="🧘‍♀️ Current Treatments" colorIndex={5}>
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

        <Section title="🥗 Diet Adjustments" colorIndex={6}>
          <div className="flex flex-wrap gap-3">
            {currentDietAdjustments.map((diet, i) => (
              <Pill key={i} color="bg-blue-100 text-blue-700">
                {diet}
              </Pill>
            ))}
          </div>
        </Section>

        <Section title="👩‍⚕️ Current Doctors" colorIndex={7}>
          {currentDoctors.map((doc, i) => (
            <div
              key={i}
              className={`flex justify-between items-center py-2 ${
                i !== currentDoctors.length - 1
                  ? "border-b border-zinc-300"
                  : ""
              }`}
            >
              <div>
                <p className="font-semibold">{doc.name}</p>
                <p>{doc.specialty}</p>
              </div>
              <Link to={doc.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 text-blue-600" />
              </Link>
            </div>
          ))}
        </Section>
      </div>
    </div>
  );
}
