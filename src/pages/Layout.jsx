import { Outlet } from "react-router-dom"; // This is where the routed components will render
import { TopMenu } from "../components/TopMenu"; // Import the TopMenu component

export function Layout() {
  return (
    <div>
      <TopMenu />
      <main className="mt-20">
        {" "}
        {/* Adjusted margin to make room for the fixed header */}
        <Outlet />{" "}
        {/* This is where the routes like Dashboard, Symptoms, etc., will go */}
      </main>
    </div>
  );
}
