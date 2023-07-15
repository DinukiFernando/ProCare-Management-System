import React, { useState, useEffect } from 'react';
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
} from 'reactstrap';

function Doctor() {
  const [filteredData, setFilteredData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [doctorData, setDoctorData] = useState({
    doctor_id: '',
    first_name: '',
    last_name: '',
    birthday: '',
    gender: '',
    email: '',
    phone_number: '',
    address_line1: '',
    address_line2: '',
    address_line3: '',
    specialty: '',
    password: '',
    nic_number: '',
    doctor_register_number: '',
  });
  const [formErrors, setFormErrors] = useState({
    doctor_id: '',
    first_name: '',
    last_name: '',
    birthday: '',
    gender: '',
    email: '',
    phone_number: '',
    address_line1: '',
    address_line2: '',
    address_line3: '',
    specialty: '',
    password: '',
    nic_number: '',
    doctor_register_number: '',
  });

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/doctorDetails');
      setFilteredData(response.data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctorData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    // Validation code here

    setFormErrors(errors);
    return isValid;
  };

  const handleAddDoctor = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await axios.post('/api/doctorDetails', doctorData);
      fetchDoctors();
      toggleModal();
      alert('Doctor added successfully!');
    } catch (error) {
      console.error('Error adding doctor:', error);
    }
  };

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Doctors</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            View Doctors' details
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Doctor Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Address 1</th>
                <th>Address 2</th>
                <th>Address 3</th>
                <th>Specialty</th>
                <th>Password</th>
                <th>NIC Number</th>
                <th>Doctor Registration Number</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((doctor, index) => (
                <tr key={index}>
                  <td>{doctor.doctor_id}</td>
                  <td>{doctor.first_name}</td>
                  <td>{doctor.last_name}</td>
                  <td>{doctor.birthday}</td>
                  <td>{doctor.gender}</td>
                  <td>{doctor.email}</td>
                  <td>{doctor.phone_number}</td>
                  <td>{doctor.address_line1}</td>
                  <td>{doctor.address_line2}</td>
                  <td>{doctor.address_line3}</td>
                  <td>{doctor.specialty}</td>
                  <td>{doctor.password}</td>
                  <td>{doctor.nic_number}</td>
                  <td>{doctor.doctor_register_number}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>

      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Add a Doctor</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleAddDoctor}>
            {/* Form inputs here */}
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit" onClick={handleAddDoctor}>
            Add
          </Button>{' '}
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Doctor;
