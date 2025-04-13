import { Link } from "react-router-dom";

export function Dashboard() {
  return (
    <div className="flex flex-col w-screen h-screen content-center items-center overflow-x-hidden px-4 pt-22 lg:pt-40 bg-zinc-100 min-h-screen pb-20 pt-10 md:px-6">
      {/* Header */}
      <div className="flex flex-col max-w-4xl items-start gap-4 w-full">
        <div className="flex flex-col lg:flex-row lg:justify-between w-full lg:items-center items-start">
          <h1 className="text-3xl font-bold text-zinc-800 pb-2">
            Hi, I'm Júlia 👋
          </h1>
          <Link to="/add-symptoms" className="hidden lg:flex">
            <button className="symptom-button">+ Add Symptom</button>
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md w-full">
          <p className="text-lg text-zinc-600">
            ⏳ Visit my{" "}
            <Link to="/timeline" className="text-link">
              Timeline
            </Link>{" "}
            to understand the development of my health journey.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md w-full">
          <p className="text-lg text-zinc-600">
            👀 The{" "}
            <Link to="/overview" className="text-link">
              Overview
            </Link>{" "}
            is for you to check information such as my general information,
            diagnosis, allergies, medications, supplements, current treatments,
            diet and my current doctors.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md w-full">
          <p className="text-lg text-zinc-600">
            🚨 In the{" "}
            <Link to="/symptoms" className="text-link">
              Symptoms
            </Link>{" "}
            page you can see the symtoms I have been logging in.
          </p>
        </div>

        <Link to="/add-symptoms" className="w-full lg:hidden">
          <button className="symptom-button w-full">+ Add Symptom</button>
        </Link>

        <div className="p-6 git aw-full">
          <p className="text-lg text-zinc-600">
            Thank you for being here and taking care of me.❤️
          </p>
        </div>
      </div>
    </div>
  );
}
