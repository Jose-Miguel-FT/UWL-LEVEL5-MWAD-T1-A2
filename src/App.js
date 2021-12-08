import React from 'react';
import './style.css';
import MedicalTreatment from './components/MedicalTreatment';

export default function App() {
  const medicalTreatment1 = {
    treatId: '001',
    treatCourseId: '010',
    type: 'Oncology',
    category: 'Nurse',
    name: 'John',
    startDate: new Date(2021, 10, 19).toLocaleDateString(),
  };
  return (
    <div>
      <h1>LH MEDICAL COMPANY</h1>
      <br />
      <MedicalTreatment medicalTreatment={medicalTreatment1} />
    </div>
  );
}
