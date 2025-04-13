import { Link, NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";

export function TopMenu() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("authToken");
      navigate("/");
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  const linkStyle = ({ isActive }) =>
    `px-4 py-2 font-bold rounded ${
      isActive ? "text-blue-700 bg-blue-100" : "text-zinc-800 hover:bg-blue-50"
    }`;

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="w-full px-4 lg:px-12 py-4 flex justify-between items-center">
        {/* App title */}
        <Link
          to="/"
          className="text-xl font-bold text-zinc-700 hover:text-blue-700 transition-colors"
        >
          Júlia's Health
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <NavLink to="/timeline" className={linkStyle}>
            Timeline
          </NavLink>
          <NavLink to="/overview" className={linkStyle}>
            Overview
          </NavLink>
          <NavLink to="/symptoms" className={linkStyle}>
            Symptoms
          </NavLink>
          <button
            onClick={handleSignOut}
            className="text-zinc-600 font-semibold px-4 py-2 rounded hover:bg-zinc-100"
          >
            Sign Out
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-blue-700 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <nav className="flex flex-col items-end rounded-b-xl  md:hidden px-4 py-4 gap-2 bg-white border-t border-zinc-100 ">
          <NavLink
            to="/timeline"
            className={linkStyle}
            onClick={() => setIsOpen(false)}
          >
            Timeline
          </NavLink>
          <NavLink
            to="/overview"
            className={linkStyle}
            onClick={() => setIsOpen(false)}
          >
            Overview
          </NavLink>
          <NavLink
            to="/symptoms"
            className={linkStyle}
            onClick={() => setIsOpen(false)}
          >
            Symptoms
          </NavLink>
          <button
            onClick={() => {
              handleSignOut();
              setIsOpen(false);
            }}
            className="text-zinc-600 font-semibold px-4 py-2 rounded hover:bg-zinc-100"
          >
            Sign Out
          </button>
        </nav>
      )}
    </header>
  );
}
