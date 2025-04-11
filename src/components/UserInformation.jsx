export function UserInformation({ patientInfo }) {
  const { userInformation } = patientInfo;

  return (
    <div className="patient-wrap">
      <h2 className="info-header ">About Me</h2>

      <div className="info-box-col">
        {/* Identity Section */}
        <div className="info-pill-large">
          <p className="text-zinc-400 text-xs uppercase">Identity</p>
          <p>
            <span className="font-bold">Name:</span> {userInformation.name}
          </p>
          <p>
            <span className="font-bold">Last Name:</span>{" "}
            {userInformation.lastName}
          </p>
          <p>
            <span className="font-bold">Birth Date:</span>{" "}
            {userInformation.birthDate}
          </p>
        </div>

        {/* Biological Info */}
        <div className="info-pill-large">
          <p className="text-zinc-400 text-xs uppercase">Biological Info</p>
          <p>
            <span className="font-bold">Gender:</span> {userInformation.gender}
          </p>
          <p>
            <span className="font-bold">Blood Type:</span>{" "}
            {userInformation.bloodType}
          </p>
        </div>

        {/* Life Context */}
        <div className="info-pill-large">
          <p className="text-zinc-400 text-xs uppercase">Life Context</p>
          <p>
            <span className="font-bold">Children:</span>{" "}
            {userInformation.children}
          </p>
          <p>
            <span className="font-bold">Marital Status:</span>{" "}
            {userInformation.status}
          </p>
          <p>
            <span className="font-bold">Country of Origin:</span>{" "}
            {userInformation.countryOfOrigin}
          </p>
          <p>
            <span className="font-bold">Country of Residence:</span>{" "}
            {userInformation.countryOfResidence}
          </p>
        </div>
      </div>
    </div>
  );
}
