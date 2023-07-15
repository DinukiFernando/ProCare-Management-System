import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, CardBody, CardTitle, CardSubtitle, Table, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PatientForm from './PatientForm';

const Patients = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState('');

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await axios.get('http://localhost:4000/patient-personal-details');
      setFilteredData(response.data);
    } catch (error) {
      console.error('Error fetching Patients:', error);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setSaveError('');
  };

  const handleDeletePatient = async (patientId) => {
    if (window.confirm("Are you sure you want to delete this patient?")) {
      try {
        const response = await fetch(`http://localhost:4000/patient-personal-details/${patientId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          // Patient deleted successfully, fetch updated patient data
          fetchPatients();
          alert("Patient deleted successfully!");
        } else {
          console.error("Failed to delete patient:", response.status);
        }
      } catch (error) {
        console.error("Error deleting patient:", error);
      }
    }
  };

  const filterData = (searchTerm) => {
    const filtered = filteredData.filter((data) => {
      const id = data.patient_id.toLowerCase();
      return id.includes(searchTerm);
    });
    setFilteredData(filtered);
  };

  const handleIdSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    filterData(searchTerm);
  };

  const handleSavePatient = async (formData) => {
    try {
      setIsSaving(true);
      const response = await axios.post('http://localhost:4000/patient-personal-details', formData);
      if (response.status === 200) {
        setIsModalOpen(false);
        fetchPatients();
        alert("Patient added successfully!");
      } else {
        setSaveError('Failed to save patient.');
      }
    } catch (error) {
      console.error('Error saving patient:', error);
      setSaveError('Failed to save patient.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button className="btn" color="primary" size="lg" onClick={toggleModal}>
          Add a Patient
        </Button>
      </div>
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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((patient, index) => (
                <tr key={index} className="border-top">
                  <td>{patient.Patient_id}</td>
                  <td>{patient.first_name}</td>
                  <td>{patient.last_name}</td>
                  <td>{patient.birthday}</td>
                  <td>{patient.gender}</td>
                  <td>{patient.phone_number}</td>
                  <td>{`${patient.address_line1} ${patient.address_line2} ${patient.address_line3}`}</td>
                  <td>
                    <Button className="btn" outline color="danger" onClick={() => handleDeletePatient(patient.Patient_id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>

      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Add a Patient</ModalHeader>
        <ModalBody>
          <PatientForm onSavePatient={handleSavePatient} isSaving={isSaving} />
          {saveError && <div className="text-danger">{saveError}</div>}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Patients;
