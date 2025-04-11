import './App.css'

import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";

import { Sidebar } from './components/Sidebar'
import { Dashboard } from './pages/Dashboard'
import { Patient } from './pages/Patient';
import { SymptomsList } from './pages/SymptomsList';
import patientInfoData from './patientInfo.json'
import { AddSymptom } from "./pages/AddSymptom";
import { EditSymptom } from "./pages/EditSymptom";

function App() {

  const [symptoms, setSymptoms] = useState([]);
  const [patientInfo, setPatientInfo] = useState(patientInfoData);

  useEffect(() => {
    fetch("http://localhost:5050/api/symptoms")
      .then((res) => res.json())
      .then((data) => setSymptoms(data))
      .catch((err) => console.error("Error fetching symptoms:", err));
  }, []);

  return (
    <>
      <Sidebar />

      <Routes>
        <Route path="/" element={<Dashboard symptoms={symptoms} />} />
        <Route
          path="/patient"
          element={<Patient patientInfo={patientInfo} />}
        />
        <Route
          path="/symptoms"
          element={<SymptomsList symptoms={symptoms} />}
        />

        <Route
          path="/add-symptoms"
          element={<AddSymptom symptoms={symptoms} setSymptoms={setSymptoms} />}
        />
        <Route
          path="/edit-symptom/:id"
          element={
            <EditSymptom symptoms={symptoms} setSymptoms={setSymptoms} />
          }
        />
      </Routes>
    </>
  );
}

export default App
