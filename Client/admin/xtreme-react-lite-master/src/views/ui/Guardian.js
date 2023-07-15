import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, CardBody, CardTitle, CardSubtitle, Table, Modal } from 'reactstrap';
import GuardianForm from './GuardianForm';

const Guardian = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchGuardians();
  }, []);

  const fetchGuardians = async () => {
    try {
      const response = await axios.get('http://localhost:4000/guardian-personal-details');
      setFilteredData(response.data);
    } catch (error) {
      console.error('Error fetching Guardians:', error);
    }
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  const handleDeleteGuardian = async (guardian_id) => {
    if (window.confirm("Are you sure you want to delete this guardian?")) {
      try {
        const response = await fetch(
          `http://localhost:4000/guardian-personal-details/${guardian_id}`,
          {
            method: "DELETE",
          }
        );

        if (response.status === 200) {
          fetchGuardians();
          alert("Guardian deleted successfully!");
        } else {
          console.error("Failed to delete Guardian:", response.status);
        }
      } catch (error) {
        console.error("Error deleting Guardian:", error);
      }
    }
  };
  const filterData = (searchTerm) => {
    const filtered = filteredData.filter((data) => {
      const id = data.guardian_id.toLowerCase();
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
          Add a Guardian
        </Button>
      </div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Guardians</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            View Guardians' details
          </CardSubtitle>

          <input type="text" placeholder="Search by ID..." onChange={handleIdSearch} />

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Guardian Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Relationship</th>
                <th>NIC Number</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>{tdata.Guardian_id}</td>
                  <td>{tdata.first_name}</td>
                  <td>{tdata.last_name}</td>
                  <td>{tdata.birthday}</td>
                  <td>{tdata.gender}</td>
                  <td>{tdata.email}</td>
                  <td>{tdata.phone_number}</td>
                  <td>{tdata.relationship}</td>
                  <td>{tdata.nic_number}</td>
                  <td>
                    {tdata.address_line1}
                    {tdata.address_line2}
                    {tdata.address_line3}
                  </td>
                  <td>
                    <Button
                      className="btn"
                      outline
                      color="danger"
                      onClick={() => handleDeleteGuardian(tdata.Guardian_id)}
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
        <GuardianForm fetchGuardians={fetchGuardians} toggleModal={toggleModal} />
      </Modal>
    </div>
  );
};

export default Guardian;
