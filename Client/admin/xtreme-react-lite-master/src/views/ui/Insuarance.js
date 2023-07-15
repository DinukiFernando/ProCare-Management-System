import React, { useState } from "react";
import { Button, Card, CardBody, CardTitle, CardSubtitle, Table, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from "reactstrap";



import user1 from "../../assets/images/users/user1.jpg";

const tableData = [
  {
    id: "PCDT01",
    avatar: user1,
    name: "John Doe",
    gender: "Male",
    age: 25,
    phone: "1234567890",
    address: "123, Street Name, City",
  },
  // Add more table data as needed
];

const Insuarance = () => {
  const [filteredData, setFilteredData] = useState(tableData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filterData = (searchTerm) => {
    const filtered = tableData.filter((data) => {
      const id = data.id.toLowerCase();
      return id.includes(searchTerm);
    });

    setFilteredData(filtered);
  };

  const handleIdSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    filterData(searchTerm);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleAddPatient = () => {
    // Add logic to handle adding a patient here
    toggleModal(); // Close the modal after adding a patient
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
            Overview of the Medical Information
          </CardSubtitle>

          <input type="text" placeholder="Search by ID..." onChange={handleIdSearch} />

          <Table className="no-wrap mt-4 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Patient Id</th>
                <th>Insurance Company</th>
                <th>Policy Number</th>
                <th>Policy Holder</th>
                <th>Policy Type</th>
                <th>Coverage Start</th>
                <th>Coverage End</th>
                <th>Contact Number</th>
                <th>Email</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>{tdata.id}</td>
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img src={tdata.avatar} className="rounded-circle" alt="avatar" width="45" height="45" />
                    </div>
                  </td>
                  <td>{tdata.name}</td>
                  <td>{tdata.gender}</td>
                  <td>{tdata.age}</td>
                  <td></td>
                  <td></td>
                  <td>{tdata.phone}</td>
                  <td>{tdata.address}</td>
                  <td>
                    <Button className="btn" outline color="warning">
                      Edit
                    </Button>
                    <Button className="btn" outline color="danger">
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
          <Form>
            <FormGroup>
              <Label for="patientId">Patient ID</Label>
              <Input type="text" name="patientId" id="patientId" />
            </FormGroup>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input type="text" name="firstName" id="firstName" />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input type="text" name="lastName" id="lastName" />
            </FormGroup>
            <FormGroup>
              <Label for="gender">Gender</Label>
              <Input type="select" name="gender" id="gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="dateOfBirth">Date of Birth</Label>
              <Input type="date" name="dateOfBirth" id="dateOfBirth" />
            </FormGroup>
            <FormGroup>
              <Label for="guardian">Guardian</Label>
              <Input type="text" name="guardian" id="guardian" />
            </FormGroup>
            <FormGroup>
              <Label for="contactNumber">Contact Number</Label>
              <Input type="text" name="contactNumber" id="contactNumber" />
            </FormGroup>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input type="textarea" name="address" id="address" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleAddPatient}>
            Add
          </Button>{" "}
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default Insuarance;
