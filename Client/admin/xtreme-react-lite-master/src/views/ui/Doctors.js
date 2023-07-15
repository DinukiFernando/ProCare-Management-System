import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, CardBody, CardTitle, CardSubtitle, Table, Modal } from 'reactstrap';
import DoctorForm from './DoctorForm';

function Doctor() {
  const [filteredData, setFilteredData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:4000/doctor-personal-details');
      setFilteredData(response.data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDeleteDoctor = async (doctor_id) => {
    if (window.confirm('Are you sure you want to delete this doctor?')) {
      try {
        const response = await axios.delete(
          `http://localhost:4000/doctor-personal-details/${doctor_id}`
        );

        if (response.status === 200) {
          fetchDoctors();
          alert('Doctor deleted successfully!'); // Display success alert
        } else {
          console.error('Failed to delete doctor:', response.status);
          // Handle the error case
        }
      } catch (error) {
        console.error('Error deleting doctor:', error);
        // Handle the error case
      }
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button className="btn" color="primary" size="lg" onClick={toggleModal}>
          Add a Doctor
        </Button>
      </div>
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
                <th>Username</th>
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Specialization</th>
                <th>NIC Number</th>
                <th>License Number</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((doctor) => (
                <tr key={doctor.doctor_id}>
                  <td>{doctor.doctor_id}</td>
                  <td>{doctor.first_name}</td>
                  <td>{doctor.last_name}</td>
                  <td>{doctor.username}</td>
                  <td>{doctor.birthday}</td>
                  <td>{doctor.gender}</td>
                  <td>{doctor.email}</td>
                  <td>{doctor.phone_number}</td>
                  <td>{doctor.specialization}</td>
                  <td>{doctor.nic_number}</td>
                  <td>{doctor.license_number}</td>
                  <td>
                    {doctor.address_line1}
                    {doctor.address_line2 && `, ${doctor.address_line2}`}
                    {doctor.address_line3 && `, ${doctor.address_line3}`}
                  </td>
                  <td>
                    <Button
                      className="btn"
                      outline
                      color="danger"
                      onClick={() => handleDeleteDoctor(doctor.doctor_id)}
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
        <DoctorForm fetchDoctors={fetchDoctors} toggleModal={toggleModal} />
      </Modal>
    </div>
  );
}

export default Doctor;
