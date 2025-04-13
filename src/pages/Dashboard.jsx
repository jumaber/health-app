import { Link } from "react-router-dom";

export function Dashboard() {
  return (
    <div className="flex flex-col w-screen h-screen items-center overflow-x-hidden px-3 pt-30 bg-zinc-100 min-h-screen pb-20 pt-10 md:px-6">
      {/* Header */}
      <div className="flex flex-col max-w-4xl items-start gap-2">
        <div className="flex flex-col lg:flex-row justify-between w-full items-center">
          <h1 className="text-3xl font-bold text-zinc-800">Hi, I'm Júlia 👋</h1>
          <Link to="/add-symptoms" className="hidden lg:flex">
            <button className="symptom-button">+ Add Symptom</button>
          </Link>

          <Link to="/add-symptoms" className="pt-6  lg:hidden">
            <button className="symptom-button">+ Add Symptom</button>
          </Link>
        </div>
        <p className="text-lg text-zinc-600 mt-4 mb-4">
          This is a glimpse into my health journey — I’ve been struggling for
          years, and my quality of life has steadily declined. I'm doing
          everything I can to feel healthy and whole again, and I appreciate any
          support or guidance along the way.
        </p>
        <p className="text-lg text-zinc-600">
          ⏳ On my{" "}
          <Link to="/timeline" className="text-link">
            Timeline
          </Link>{" "}
          to understand the development of my health journey.
        </p>
        <p className="text-lg text-zinc-600 mt-4 mb-4">
          👀 The{" "}
          <Link to="/patient" className="text-link">
            Overview
          </Link>{" "}
          is for you to check information such as my general information,
          diagnosis, allergies, medications, supplements, current treatments,
          diet and my current doctors.{" "}
        </p>
        <p className="text-lg text-zinc-600 mt-4 mb-4">
          🚨 In the{" "}
          <Link to="/symptoms" className="text-link">
            Symptoms
          </Link>{" "}
          page you can see the symtoms I have been logging in.
        </p>

        <p className="text-lg text-zinc-600 mt-4 mb-4">
          Thank you for being here and taking care of me.❤️
        </p>
      </div>
    </div>
  );
}
