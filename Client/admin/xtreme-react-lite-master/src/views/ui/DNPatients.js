import React, { useState, useEffect } from "react";
import {

  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,

} from "reactstrap";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/patient-personal-details");
      const data = await response.json();
      setPatients(data);
      setFilteredPatients(data);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };



  

  const handleIdSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = patients.filter((patient) =>
      patient.patient_id.toLowerCase().includes(searchTerm)
    );
    setFilteredPatients(filtered);
  };

  return (
    <div>
      
      <Card>
        <CardBody>
          <CardTitle tag="h5">Patients</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the Personal details
          </CardSubtitle>

          <input type="text" placeholder="Search by ID..." onChange={handleIdSearch} />

          <Table className="no-wrap mt-4 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>Contact Number</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map((patient, index) => (
                <tr key={index} className="border-top">
                  <td>{patient.patient_id}</td>
                  <td>{patient.first_name}</td>
                  <td>{patient.last_name}</td>
                  <td>{patient.birthday}</td>
                  <td>{patient.gender}</td>
                  <td>{patient.phone_number}</td>
                  <td>{`${patient.address_line1} ${patient.address_line2} ${patient.address_line3}`}</td>
                 
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default Patients;
