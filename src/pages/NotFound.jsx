// NotFound.jsx
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-100 text-center px-4">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <p className="text-xl text-zinc-700 mb-6">Oops! Page not found.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
      >
        Go back home
      </Link>
    </div>
  );
}
