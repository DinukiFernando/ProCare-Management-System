import React, { useState, useEffect } from "react";
import axios from 'axios';
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

const EmergencyContact = () => {
  const [emergencyContact, setEmergencyContact] = useState([]);
  const [patientIDs, setPatientIDs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    emergency_contact_id: "",
    patient_id: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    gender: "",
    email: "",
    relationship: "",
    nic_number: "",
    address_line1: "",
    address_line2: "",
    address_line3: "",
  });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    fetchEmergencyContact();
    fetchPatientIDs();
  }, []);

  const fetchEmergencyContact = async () => {
    try {
      const response = await fetch("http://localhost:4000/patient-emergency-contact");
      const data = await response.json();
      setEmergencyContact(data);
    } catch (error) {
      console.error("Error fetching emergency contact:", error);
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

    // Form validation
    const errors = {};
    const nameRegex = /^[a-zA-Z\s]*$/;
    const phoneNumberRegex = /^\d{10}$/;
    const nicNumberRegex = /^\d{12}$/;

    if (!formData.emergency_contact_id) {
      errors.emergency_contact_id = "Emergency Contact ID is required";
      isValid = false;
    }
    if (!formData.patient_id) {
      errors.patient_id = "Patient ID is required";
      isValid = false;
    }

    if (!formData.first_name || !nameRegex.test(formData.first_name)) {
      errors.first_name = 'Please enter a valid first name';
    }
    if (!formData.last_name || !nameRegex.test(formData.last_name)) {
      errors.last_name = 'Please enter a valid last name';
    }
    if (!formData.birthday) {
      errors.birthday = 'Please enter a valid birthday';
    }
    if (!formData.gender) {
      errors.gender = 'Please select a gender';
    }

    if (!formData.phone_number || !phoneNumberRegex.test(formData.phone_number)) {
      errors.phone_number = 'Please enter a valid phone number';
    }
    if (!formData.relationship) {
      errors.relationship = 'Please enter a relationship';
    }
    if (!formData.nic_number || !nicNumberRegex.test(formData.nic_number)) {
      errors.nic_number = 'Please enter a valid NIC number';
    }
    if (!formData.address_line1) {
      errors.address_line1 = 'Please enter address line 1';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return false;
    }

    return true;
  }

  const resetForm = () => {
    setFormData({
      emergency_contact_id: "",
      patient_id: "",
      first_name: "",
      last_name: "",
      phone_number: "",
      gender: "",
      email: "",
      relationship: "",
      nic_number: "",
      address_line1: "",
      address_line2: "",
      address_line3: "",
    });
    setFormErrors({});
  };

  const handleAddEmergencyContact = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/patient-emergency-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        fetchEmergencyContact();
        toggleModal();
        alert("Emergency Contact added successfully!");
      } else {
        console.error("Failed to add emergency contact:", response.status);
      }
    } catch (error) {
      console.error("Error adding emergency contact:", error);
    }
  };


  const handleDeleteEmergencyContact = async (emergency_contact_id) => {
    if (window.confirm("Are you sure you want to delete this emergency contact?")) {
      try {
        const response = await fetch(`http://localhost:4000/patient-emergency-contact/${emergency_contact_id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          fetchEmergencyContact();
          alert("emergency Contact deleted successfully!");
        } else {
          console.error("Failed to delete emergency contact:", response.status);
        }
      } catch (error) {
        console.error("Error deleting emergency contact:", error);
      }
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button className="btn" color="primary" size="lg" onClick={toggleModal}>
          Add Emergency Contact
        </Button>
      </div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Patient Emergency Contact</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of Patient Emergency Contact
          </CardSubtitle>

          <Table className="no-wrap mt-4 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Emergency Contact Id</th>
                <th>Patient Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>Contact Number</th>
                <th>Relationship</th>
                <th>NIC Number</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {emergencyContact.map((history, index) => (
                <tr key={index} className="border-top">
                  <td>{history.emergency_contact_id}</td>
                  <td>{history.patient_id}</td>
                  <td>{history.first_name}</td>
                  <td>{history.last_name}</td>
                  <td>{history.phone_number}</td>
                  <td>{history.gender}</td>
                  <td>{history.email}</td>
                  <td>{history.relationship}</td>
                  <td>{history.nic_number}</td>
                  <td>{history.address_line1}{history.address_line2}{history.address_line3}</td>
                  <td>
                  <Button
  className="btn"
  outline
  color="danger"
  onClick={() => handleDeleteEmergencyContact(history.emergency_contact_id)}
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
        <ModalHeader toggle={toggleModal}>Add Emergency Contact</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleAddEmergencyContact}>
            <FormGroup>
              <Label for="emergency_contact_id">Emergency Contact ID</Label>
              <Input
                type="text"
                name="emergency_contact_id"
                id="emergency_contact_id"
                value={formData.emergency_contact_id}
                onChange={handleInputChange}
                required
              />
              {formErrors.emergency_contact_id && <span className="text-danger">{formErrors.emergency_contact_id}</span>}
            </FormGroup>
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
              <label htmlFor='first_name' className='form-label'>
                First Name
              </label>
              <input
                type='text'
                id='first_name'
                className={`form-control ${errors.first_name ? 'is-invalid' : ''}`}
                value={formData.first_name}
                onChange={handleInputChange}
                name="first_name"
              />
              {errors.first_name && <div className='invalid-feedback'>{errors.first_name}</div>}
            </FormGroup>
            <FormGroup>
              <label htmlFor='last_name' className='form-label'>
                Last Name
              </label>
              <input
                type='text'
                id='last_name'
                className={`form-control ${errors.last_name ? 'is-invalid' : ''}`}
                value={formData.last_name}
                onChange={handleInputChange}
                name="last_name"
              />
              {errors.last_name && <div className='invalid-feedback'>{errors.last_name}</div>}
            </FormGroup>
            <FormGroup>
              <label htmlFor='birthday' className='form-label'>
                Birthday
              </label>
              <input
                type='date'
                id='birthday'
                className={`form-control ${errors.birthday ? 'is-invalid' : ''}`}
                value={formData.birthday}
                onChange={handleInputChange}
                name="birthday"
              />
              {errors.birthday && <div className='invalid-feedback'>{errors.birthday}</div>}
            </FormGroup>
            <FormGroup>
              <label className='form-label'>Gender</label>
              <div className='form-check'>
                <input
                  type='radio'
                  className={`form-check-input ${errors.gender ? 'is-invalid' : ''}`}
                  id='male'
                  name='gender'
                  value='male'
                  checked={formData.gender === 'male'}
                  onChange={handleInputChange}
                />
                <label htmlFor='male' className='form-check-label'>
                  Male
                </label>
              </div>
              <div className='form-check'>
                <input
                  type='radio'
                  className={`form-check-input ${errors.gender ? 'is-invalid' : ''}`}
                  id='female'
                  name='gender'
                  value='female'
                  checked={formData.gender === 'female'}
                  onChange={handleInputChange}
                />
                <label htmlFor='female' className='form-check-label'>
                  Female
                </label>
              </div>
              <div className='form-check'>
                <input
                  type='radio'
                  className={`form-check-input ${errors.gender ? 'is-invalid' : ''}`}
                  id='other'
                  name='gender'
                  value='other'
                  checked={formData.gender === 'other'}
                  onChange={handleInputChange}
                />
                <label htmlFor='other' className='form-check-label'>
                  Other
                </label>
              </div>
              {errors.gender && <div className='invalid-feedback'>{errors.gender}</div>}
            </FormGroup>
            <FormGroup>
              <label htmlFor='email' className='form-label'>
                Email
              </label>
              <input
                type='email'
                id='email'
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                value={formData.email}
                onChange={handleInputChange}
                name="email"
              />
              {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
            </FormGroup>
            <FormGroup>
              <label htmlFor='phone_number' className='form-label'>
                Phone Number
              </label>
              <input
                type='tel'
                id='phone_number'
                className={`form-control ${errors.phone_number ? 'is-invalid' : ''}`}
                value={formData.phone_number}
                onChange={handleInputChange}
                name="phone_number"
              />
              {errors.phone_number && <div className='invalid-feedback'>{errors.phone_number}</div>}
            </FormGroup>
            <FormGroup>
              <label htmlFor='relationship' className='form-label'>
                Relationship
              </label>
              <input
                type='text'
                id='relationship'
                className={`form-control ${errors.relationship ? 'is-invalid' : ''}`}
                value={formData.relationship}
                onChange={handleInputChange}
                name="relationship"
              />
              {errors.relationship && <div className='invalid-feedback'>{errors.relationship}</div>}
            </FormGroup>
            <FormGroup>
              <label htmlFor='nic_number' className='form-label'>
                NIC Number
              </label>
              <input
                type='text'
                id='nic_number'
                className={`form-control ${errors.nic_number ? 'is-invalid' : ''}`}
                value={formData.nic_number}
                onChange={handleInputChange}
                name="nic_number"
              />
              {errors.nic_number && <div className='invalid-feedback'>{errors.nic_number}</div>}
            </FormGroup>
            <FormGroup>
              <label htmlFor='address_line1' className='form-label'>
                Address Line 1
              </label>
              <input
                type='text'
                id='address_line1'
                className={`form-control ${errors.address_line1 ? 'is-invalid' : ''}`}
                value={formData.address_line1}
                onChange={handleInputChange}
                name="address_line1"
              />
              {errors.address_line1 && <div className='invalid-feedback'>{errors.address_line1}</div>}
            </FormGroup>
            <FormGroup>
              <label htmlFor='address_line2' className='form-label'>
                Address Line 2
              </label>
              <input
                type='text'
                id='address_line2'
                className='form-control'
                value={formData.address_line2}
                onChange={handleInputChange}
                name="address_line2"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor='address_line3' className='form-label'>
                Address Line 3
              </label>
              <input
                type='text'
                id='address_line3'
                className='form-control'
                value={formData.address_line3}
                onChange={handleInputChange}
                name="address_line3"
              />
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

export default EmergencyContact;
