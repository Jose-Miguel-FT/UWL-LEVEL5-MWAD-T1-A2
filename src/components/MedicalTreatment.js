import React from 'react';

{
  /*
  React component MedicalTreatment containing the attributes passed through props.
  This component's function is to print in a list all the attributes from props.
  */
}

function MedicalTreatment() {
  return (
    <div>
      <ul>
        <li>{props.treatId}</li>
        <li>{props.treatCourseId}</li>
        <li>{props.type}</li>
        <li>{props.category}</li>
        <li>{props.name}</li>
        <li>{props.StartDate}</li>
      </ul>
    </div>
  );
}

export default MedicalTreatment;
