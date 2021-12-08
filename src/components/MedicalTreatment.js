import React from 'react';

function MedicalTreatment(props) {
  return (
    <div>
      {props.medicalTreatment.treatId}, {props.medicalTreatment.treatCourseId},{' '}
      {props.medicalTreatment.type}, {props.medicalTreatment.category},{' '}
      {props.medicalTreatment.name}, {props.medicalTreatment.startDate}
    </div>
  );
}

export default MedicalTreatment;
