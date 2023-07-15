import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, CardBody, CardTitle, CardSubtitle, Table, Modal } from 'reactstrap';
import NurseForm from './NurseForm';

const Nurse = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchNurses();
  }, []);

  const fetchNurses = async () => {
    try {
      const response = await axios.get('http://localhost:4000/nurse-personal-details');
      setFilteredData(response.data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  const handleDeleteNurse = async (nurse_Id) => {
    if (window.confirm("Are you sure you want to delete this nurse?")) {
      try {
        const response = await fetch(
          `http://localhost:4000/nurse-personal-details/${nurse_Id}`,
          {
            method: "DELETE",
          }
        );

        if (response.status === 200) {
          fetchNurses();
          alert("Nurse deleted successfully!");
        } else {
          console.error("Failed to delete nurse:", response.status);
        }
      } catch (error) {
        console.error("Error deleting nurse:", error);
      }
    }
  };

  const filterData = (searchTerm) => {
    const filtered = filteredData.filter((data) => {
      const id = data.nurse_id.toLowerCase();
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
          Add a Nurse
        </Button>
      </div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Nurses</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            View Nurses' details
          </CardSubtitle>

          <input
            type="text"
            placeholder="Search by ID..."
            onChange={handleIdSearch}
          />

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Nurse Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Area of Expertise</th>
                <th>NIC Number</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>{tdata.nurse_id}</td>
                  <td>{tdata.first_name}</td>
                  <td>{tdata.last_name}</td>
                  <td>{tdata.birthday}</td>
                  <td>{tdata.gender}</td>
                  <td>{tdata.email}</td>
                  <td>{tdata.phone_number}</td>
                  <td>{tdata.area_of_expertise}</td>
                  <td>{tdata.nic_number}</td>
                  <td>
                    {tdata.address_line1}
                    {tdata.address_line2}
                    {tdata.address_line3}
                  </td>
                  <td>
                    <Button className="btn" outline color="danger" onClick={() => handleDeleteNurse(tdata.nurse_id)}>
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
        <NurseForm fetchNurses={fetchNurses} toggleModal={toggleModal} />
      </Modal>
    </div>
  );
};

export default Nurse;
