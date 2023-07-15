import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, CardBody, CardTitle, CardSubtitle, Table, Modal } from 'reactstrap';
import AdminForm from './AdminForm';

const Staff = () => {
const [filteredData, setFilteredData] = useState([]);
const [isModalOpen, setIsModalOpen] = useState(false);

useEffect(() => {
  fetchStaff();
}, []);

const fetchStaff = async () => {
  try {
    const response = await axios.get('http://localhost:4000/staff-personal-details');
    setFilteredData(response.data);
  } catch (error) {
    console.error('Error fetching Guardians:', error);
  }
};
const toggleModal = () => {
  setIsModalOpen(!isModalOpen);
};


const handleDeleteStaff = async (staff_id) => {
  if (window.confirm("Are you sure you want to delete this staff?")) {
    try {
      const response = await fetch(
        `http://localhost:4000/staff-personal-details/${staff_id}`,
        {
          method: "DELETE",
        }
      );

      if (response.status === 200) {
        fetchStaff();
        alert("Staff deleted successfully!");
      } else {
        console.error("Failed to delete Staff:", response.status);
      }
    } catch (error) {
      console.error("Error deleting staff:", error);
    }
  }
};

const filterData = (searchTerm) => {
  const filtered = filteredData.filter((data) => {
    const id = data.staff_id.toLowerCase();
    return id.includes(searchTerm);
  });
  setFilteredData(filtered);
};

const handleIdSearch = (event) => {
  const searchTerm = event.target.value.toLowerCase();
  filterData(searchTerm);
};

  
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button className="btn" color="primary" size="lg" onClick={toggleModal}>
          Add a staff
        </Button>
      </div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Nurses</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            View Staffs' details
          </CardSubtitle>

          <input type="text" placeholder="Search by ID..." onChange={handleIdSearch} />

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Staff Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>NIC Number</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>{tdata.staff_id}</td>
                  <td>{tdata.first_name}</td>
                  <td>{tdata.last_name}</td>
                  <td>{tdata.birthday}</td>
                  <td>{tdata.gender}</td>
                  <td>{tdata.email}</td>
                  <td>{tdata.phone_number}</td>
                  <td>{tdata.nic_number}</td>
                  <td>{tdata.address_line1}{tdata.address_line2}{tdata.address_line3}</td>
                  <td>
                    <Button
                      className="btn"
                      outline
                      color="danger"
                      onClick={() => handleDeleteStaff(tdata.staff_id)}
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
        <AdminForm fetchStaff={fetchStaff} toggleModal={toggleModal} />
      </Modal>
    </div>
  );
};

export default Staff;
