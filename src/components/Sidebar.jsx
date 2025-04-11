import { NavLink } from "react-router-dom";

export function Sidebar(){
  return (
    <div className="flex flex-col bg-white fixed top-0 left-0 h-screen w-72 px-6 py-12 h-full hidden lg:flex">
      <div>
        <h1 >
          🩺
          <br />
          My Health Tracker
        </h1>
      </div>

      <div className="mt-10">
        <NavLink to="/" className="nav-item">
          <h2>Dashboard</h2>
        </NavLink>

        <NavLink to="/patient" className="nav-item">
          <h2>Information</h2>
        </NavLink>

        <NavLink to="/symptoms" className="nav-item">
          <h2>Symptoms</h2>
        </NavLink>
      </div>
    </div>
  );
}
