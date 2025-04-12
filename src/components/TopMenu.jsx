import { NavLink } from "react-router-dom";
import { useState } from "react";

export function TopMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const navItemStyle =
    "block px-4 py-2 text-zinc-800 font-bold rounded hover:bg-blue-100";

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="w-full px-4 lg:px-12 py-4 flex justify-between items-center">
        {/* App Name */}
        <p className="text-xl font-bold text-zinc-700">Júlia's Health</p>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          <NavLink to="/" className={navItemStyle}>
            Dashboard
          </NavLink>
          <NavLink to="/patient" className={navItemStyle}>
            Information
          </NavLink>
          <NavLink to="/symptoms" className={navItemStyle}>
            Symptoms
          </NavLink>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-blue-700 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <nav className="md:hidden px-4 pb-4 space-y-2 bg-white border-t">
          <NavLink
            to="/"
            className={navItemStyle}
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/patient"
            className={navItemStyle}
            onClick={() => setIsOpen(false)}
          >
            Information
          </NavLink>
          <NavLink
            to="/symptoms"
            className={navItemStyle}
            onClick={() => setIsOpen(false)}
          >
            Symptoms
          </NavLink>
        </nav>
      )}
    </header>
  );
}
