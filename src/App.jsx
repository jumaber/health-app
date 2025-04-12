import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import { TopMenu } from "./components/TopMenu";
import { Dashboard } from "./pages/Dashboard";
import { Patient } from "./pages/Patient";
import { SymptomsList } from "./pages/SymptomsList";
import patientInfoData from "./patientInfo.json";
import { AddSymptom } from "./pages/AddSymptom";
import { EditSymptom } from "./pages/EditSymptom";
import { Login } from "./pages/Login"; // Make sure Login is imported

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [symptoms, setSymptoms] = useState([]);
  const [patientInfo] = useState(patientInfoData); // Static patient data

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true); // Set authenticated state if token exists
    }
  }, []);

  // Fetch symptoms data on load
  useEffect(() => {
    if (isAuthenticated) {
      fetch("https://julia-health-app.onrender.com/api/symptoms")
        .then((res) => res.json())
        .then((data) => setSymptoms(data))
        .catch((err) => console.error("Error fetching symptoms:", err));
    }
  }, [isAuthenticated]);

  return (
    <>
      {isAuthenticated ? (
        <>
          <TopMenu />
          <Routes>
            <Route path="/" element={<Dashboard symptoms={symptoms} />} />
            <Route
              path="/patient"
              element={<Patient patientInfo={patientInfo} />}
            />
            <Route
              path="/symptoms"
              element={
                <SymptomsList symptoms={symptoms} setSymptoms={setSymptoms} />
              }
            />
            <Route
              path="/add-symptoms"
              element={
                <AddSymptom symptoms={symptoms} setSymptoms={setSymptoms} />
              }
            />
            <Route
              path="/edit-symptom/:id"
              element={
                <EditSymptom symptoms={symptoms} setSymptoms={setSymptoms} />
              }
            />
          </Routes>
        </>
      ) : (
        <Login setAuth={setIsAuthenticated} /> // Show login if not authenticated
      )}
    </>
  );
}

export default App;
