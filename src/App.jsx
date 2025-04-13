// App.jsx
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { TopMenu } from "./components/TopMenu";
import { Dashboard } from "./pages/Dashboard";
import { Patient } from "./pages/Patient";
import { SymptomsList } from "./pages/SymptomsList";
import { AddSymptom } from "./pages/AddSymptom";
import { EditSymptom } from "./pages/EditSymptom";
import { Login } from "./pages/Login"; 
import { Timeline } from "./pages/Timeline"; 
import patientInfoData from "./patientInfo.json"; 
import { auth } from "./firebase"; // Import the auth instance from firebase.js
import { onAuthStateChanged } from "firebase/auth";  // Import onAuthStateChanged

function App() {
  const [symptoms, setSymptoms] = useState([]);
 const [patientInfo, setPatientInfo] = useState(patientInfoData);  
 const [isAuthenticated, setIsAuthenticated] = useState(false); // Auth state

  useEffect(() => {
    fetchSymptoms();
  }, []);

  // Firebase authentication listener
 useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
     console.log("User:", user); // Add this log to check the user object
     if (user) {
       setIsAuthenticated(true);
     } else {
       setIsAuthenticated(false);
     }
   });
   return unsubscribe; // Cleanup listener on unmount
 }, []);


  // Fetch symptoms from the backend
  const fetchSymptoms = async () => {
    const res = await fetch(
      "https://julia-health-app.onrender.com/api/symptoms"
    );
    const data = await res.json();
    console.log("📦 fetched symptoms:", data);
    setSymptoms(data);
  };

  return (
    <>
      {isAuthenticated ? (
        <>
          <TopMenu />
          <Routes>
            <Route path="/" element={<Dashboard symptoms={symptoms} />} />
            <Route path="/timeline" element={<Timeline symptoms={symptoms} />} />
            <Route
              path="/patient"
              element={<Patient patientInfo={patientInfo} />}
            />
            <Route
              path="/symptoms"
              element={
                <SymptomsList
                  symptoms={symptoms}
                  setSymptoms={setSymptoms}
                  fetchSymptoms={fetchSymptoms}
                />
              }
            />
            <Route
              path="/add-symptoms"
              element={
                <AddSymptom
                  symptoms={symptoms}
                  setSymptoms={setSymptoms}
                  fetchSymptoms={fetchSymptoms}
                />
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
        <Login setAuth={setIsAuthenticated} /> // This will render the Login page if not authenticated
      )}
    </>
  );
}

export default App;
