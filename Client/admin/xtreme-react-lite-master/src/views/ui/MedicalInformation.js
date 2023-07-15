import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const MedicalHistory = () => {
  const [medicalHistory, setMedicalHistory] = useState([]);
  const [patientIDs, setPatientIDs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    patient_id: "",
    allergies: "",
    previous_surgeries: "",
    chronic_illnesses: "",
    current_medications: "",
    patient_type: "",
  });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    fetchMedicalHistory();
    fetchPatientIDs();
  }, []);

  const fetchMedicalHistory = async () => {
    try {
      const response = await fetch("http://localhost:4000/patient-medical-history");
      const data = await response.json();
      setMedicalHistory(data);
    } catch (error) {
      console.error("Error fetching medical history:", error);
    }
  };


  const fetchPatientIDs = async () => {
    try {
      const response = await fetch("http://localhost:4000/patient-personal-details");
      const data = await response.json();
      const ids = data.map((item) => item.Patient_id);
      console.log(ids); // Log the patient IDs in the console
      setPatientIDs(ids);
    } catch (error) {
      console.error("Error fetching patient IDs:", error);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    resetForm();
    fetchPatientIDs();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!formData.patient_id) {
      errors.patient_id = "Patient ID is required";
      isValid = false;
    }

    if (!formData.allergies) {
      errors.allergies = "Allergies are required";
      isValid = false;
    }

    if (!formData.previous_surgeries) {
      errors.previous_surgeries = "Previous surgeries are required";
      isValid = false;
    }

    if (!formData.chronic_illnesses) {
      errors.chronic_illnesses = "Chronic illnesses are required";
      isValid = false;
    }

    if (!formData.current_medications) {
      errors.current_medications = "Current medications are required";
      isValid = false;
    }

    if (!formData.patient_type) {
      errors.patient_type = "Patient type is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const resetForm = () => {
    setFormData({
      patient_id: "",
      allergies: "",
      previous_surgeries: "",
      chronic_illnesses: "",
      current_medications: "",
      patient_type: "",
    });
    setFormErrors({});
  };

  const handleAddMedicalHistory = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/patient-medical-history", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        fetchMedicalHistory();
        toggleModal();
        alert("Medical history added successfully!");
      } else {
        console.error("Failed to add medical history:", response.status);
      }
    } catch (error) {
      console.error("Error adding medical history:", error);
    }
  };

  const handleDeleteMedicalHistory = async (patient_Id) => {
    if (window.confirm("Are you sure you want to delete this medical history?")) {
      try {
        const response = await fetch(`http://localhost:4000/patient-medical-history/${patient_Id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          fetchMedicalHistory();
          alert("Medical history deleted successfully!");
        } else {
          console.error("Failed to delete medical history:", response.status);
        }
      } catch (error) {
        console.error("Error deleting medical history:", error);
      }
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button className="btn" color="primary" size="lg" onClick={toggleModal}>
          Add Medical History
        </Button>
      </div>
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
                <th>Actions</th>
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
                  <td>
                    <Button
                      className="btn"
                      outline
                      color="danger"
                      onClick={() => handleDeleteMedicalHistory(history.patient_id)}
                    >
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
        <ModalHeader toggle={toggleModal}>Add Medical History</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleAddMedicalHistory}>
          <FormGroup>
    <Label for="patient_id">Patient ID</Label>
    <Input
      type="select"
      name="patient_id"
      id="patient_id"
      value={formData.patient_id}
      onChange={handleInputChange}
      required
      style={{ color: "black" }}
    >
      <option value="">Select Patient ID</option>
      {patientIDs.map((id) => (
        <option key={id} value={id}>
          {id}
        </option>
      ))}
    </Input>
    {formErrors.patient_id && <span className="text-danger">{formErrors.patient_id}</span>}
  </FormGroup>
            <FormGroup>
              <Label for="allergies">Allergies</Label>
              <Input
                type="text"
                name="allergies"
                id="allergies"
                value={formData.allergies}
                onChange={handleInputChange}
                required
              />
              {formErrors.allergies && <span className="text-danger">{formErrors.allergies}</span>}
            </FormGroup>
            <FormGroup>
              <Label for="previous_surgeries">Previous Surgeries</Label>
              <Input
                type="text"
                name="previous_surgeries"
                id="previous_surgeries"
                value={formData.previous_surgeries}
                onChange={handleInputChange}
                required
              />
              {formErrors.previous_surgeries && <span className="text-danger">{formErrors.previous_surgeries}</span>}
            </FormGroup>
            <FormGroup>
              <Label for="chronic_illnesses">Chronic Illnesses</Label>
              <Input
                type="text"
                name="chronic_illnesses"
                id="chronic_illnesses"
                value={formData.chronic_illnesses}
                onChange={handleInputChange}
                required
              />
              {formErrors.chronic_illnesses && <span className="text-danger">{formErrors.chronic_illnesses}</span>}
            </FormGroup>
            <FormGroup>
              <Label for="current_medications">Current Medications</Label>
              <Input
                type="text"
                name="current_medications"
                id="current_medications"
                value={formData.current_medications}
                onChange={handleInputChange}
                required
              />
              {formErrors.current_medications && <span className="text-danger">{formErrors.current_medications}</span>}
            </FormGroup>
            <FormGroup>
              <Label for="patient_type">Patient Type</Label>
              <Input
                type="text"
                name="patient_type"
                id="patient_type"
                value={formData.patient_type}
                onChange={handleInputChange}
                required
              />
              {formErrors.patient_type && <span className="text-danger">{formErrors.patient_type}</span>}
            </FormGroup>
            <Button color="primary" type="submit">
              Add
            </Button>{" "}
            <Button color="secondary" onClick={toggleModal}>
              Cancel
            </Button>
          </Form>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
};

export default MedicalHistory;

