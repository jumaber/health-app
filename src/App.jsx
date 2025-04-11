import './App.css'

import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { Sidebar } from './components/Sidebar'
import { Dashboard } from './pages/Dashboard'
import { Patient } from './pages/Patient';
import { SymptomsList } from './pages/SymptomsList';
import symptomsData from './symptoms.json'
import patientInfoData from './patientInfo.json'
import { AddSymptom } from './pages/AddSymptom';

function App() {

  const [symptoms, setSymptoms] = useState(symptomsData);
  const [patientInfo, setPatientInfo] = useState(patientInfoData);


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
          path="/addsymptoms"
          element={<AddSymptom symptoms={symptoms} setSymptoms={setSymptoms}/>}
        />
      </Routes>
    </>
  );
}

export default App
