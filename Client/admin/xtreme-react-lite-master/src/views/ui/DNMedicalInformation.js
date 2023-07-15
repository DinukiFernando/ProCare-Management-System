import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
} from "reactstrap";

const MedicalHistory = () => {
  const [medicalHistory, setMedicalHistory] = useState([]);

  useEffect(() => {
    fetchMedicalHistory();
  }, []);

  const fetchMedicalHistory = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/patient-medical-history");
      const data = await response.json();
      setMedicalHistory(data);
    } catch (error) {
      console.error("Error fetching medical history:", error);
    }
  };

 


  return (
    <div>
  
      <Card>
        <CardBody>
          <CardTitle tag="h5">Medical History</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of Patient Medical History
          </CardSubtitle>

          <Table className="no-wrap mt-4 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Allergies</th>
                <th>Previous Surgeries</th>
                <th>Chronic Illnesses</th>
                <th>Current Medications</th>
                <th>Patient Type</th>

              </tr>
            </thead>
            <tbody>
              {medicalHistory.map((history, index) => (
                <tr key={index} className="border-top">
                  <td>{history.patient_id}</td>
                  <td>{history.allergies}</td>
                  <td>{history.previous_surgeries}</td>
                  <td>{history.chronic_illnesses}</td>
                  <td>{history.current_medications}</td>
                  <td>{history.patient_type}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>

      
    </div>
  );
};

export default MedicalHistory;
