import { NavLink } from "react-router-dom";
import { useState } from "react";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle (now on top-right) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded bg-blue-600 text-zinc-700 shadow-md"
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Sidebar for large screens */}
      <div className="hidden lg:flex flex-col fixed top-0 left-0 h-screen w-72 px-6 py-12 bg-white shadow-lg z-40">

        <nav className="mt-10 space-y-4">
          <NavLink to="/" className="nav-item">
            Dashboard
          </NavLink>
          <NavLink to="/patient" className="nav-item">
            Information
          </NavLink>
          <NavLink to="/symptoms" className="nav-item">
            Symptoms
          </NavLink>
        </nav>
      </div>

      {/* Mobile sidebar on the right */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg px-6 py-12 transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <h1 className="text-lg font-bold text-zinc-700 mb-8">
          Júlia’s Health
        </h1>

        <nav className="space-y-4">
          <NavLink to="/" className="nav-item" onClick={() => setIsOpen(false)}>
            Dashboard
          </NavLink>
          <NavLink
            to="/patient"
            className="nav-item"
            onClick={() => setIsOpen(false)}
          >
            Information
          </NavLink>
          <NavLink
            to="/symptoms"
            className="nav-item"
            onClick={() => setIsOpen(false)}
          >
            Symptoms
          </NavLink>
        </nav>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-zinc-100 opacity-90 z-40 lg:hidden"
        />
      )}
    </>
  );
}
