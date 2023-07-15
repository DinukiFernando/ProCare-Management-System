import React, { useState, useEffect } from 'react';
import {
  Button,
  Row,
  Col,
  Table,
  Card,
  CardTitle,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

const MonthlyPayment = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [patients, setPatients] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [paymentData, setPaymentData] = useState({
    patient_id: '',
    date: '',
    amount: '',
  });

  useEffect(() => {
    fetch('http://localhost:4000/monthly-payment-details')
      .then(response => response.json())
      .then(data => {
        setFilteredData(data);
      })
      .catch(error => console.error('Error:', error));

    fetch('http://localhost:4000/patient-personal-details')
      .then(response => response.json())
      .then(data => {
        setPatients(data.map(item => item.Patient_id));
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const handleIdSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = filteredData.filter((data) => {
      const id = data.patientId.toLowerCase();
      return id.includes(searchTerm);
    });
    setFilteredData(filtered);
  };

  const handleAddPayment = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(paymentData)
    };
    fetch('http://localhost:4000/monthly-payment-details', requestOptions)
      .then(response => response.json())
      .then(data => {
        // Handle the response or perform any necessary actions
        console.log('Payment data successfully submitted:', data);
        setShowModal(false);
      })
      .catch(error => console.error('Error:', error));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPaymentData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDeletePayment = (payment_id) => {
    if (window.confirm("Are you sure you want to delete this payment?")) {
      fetch(`http://localhost:4000/monthly-payment-details/${payment_id}`, {
        method: 'DELETE'
      })
        .then(response => {
          if (response.status === 200) {
            // Refresh the list of payments
            fetch('http://localhost:4000/monthly-payment-details')
              .then(response => response.json())
              .then(data => {
                setFilteredData(data);
              })
              .catch(error => console.error('Error:', error));
  
            alert("Payment deleted successfully!");
          } else {
            alert("Failed to delete payment. Please try again.");
          }
        })
        .catch(error => console.error('Error:', error));
    }
  };
  
  

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button className="btn" color="primary" size="lg" onClick={handleAddPayment}>
          Add a Payment
        </Button>
      </div>
      <Row>
        <Col lg="12">
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-card-text me-2"> </i>
              Payment Management
            </CardTitle>
            <CardBody>
              <input
                type="text"
                placeholder="Search by ID..."
                onChange={handleIdSearch}
              />

              <Table bordered hover>
                <thead>
                  <tr>
                    <th>Patient ID</th>
                    <th>Date</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((tdata) => (
                    <tr key={tdata.payment_id} className="border-top">
                      <td>{tdata.patient_id}</td>
                      <td>{tdata.date}</td>
                      <td>{tdata.amount}</td>
                      <td>
                      <Button
                        className="btn"
                        outline
                        color="danger"
                        onClick={() => handleDeletePayment(tdata.payment_id)}
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
        </Col>
      </Row>

      <Modal isOpen={showModal} toggle={handleModalClose}>
        <ModalHeader toggle={handleModalClose}>Add a Payment</ModalHeader>
        <Form onSubmit={handleFormSubmit}>
          <ModalBody>
            <FormGroup>
              <Label for="patient_id">Patient ID</Label>
              <Input
                type="select"
                name="patient_id"
                id="patient_id"
                value={paymentData.patient_id}
                onChange={handleInputChange}
              >
                <option value="">Select Patient</option>
                {patients.map((patient_id) => (
                  <option key={patient_id} value={patient_id}>
                    {patient_id}
                  </option>
                ))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="date">Date</Label>
              <Input
                type="date"
                name="date"
                id="date"
                value={paymentData.date}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="amount">Amount</Label>
              <Input
                type="text"
                name="amount"
                id="amount"
                value={paymentData.amount}
                onChange={handleInputChange}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary">
              Add Payment
            </Button>{' '}
            <Button color="secondary" onClick={handleModalClose}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

export default MonthlyPayment;
