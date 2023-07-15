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

const Payment = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [paymentData, setPaymentData] = useState({
    appointment_id: '',
    payment_date: '',
    amount: '',
  });

  useEffect(() => {
    fetch('http://localhost:4000/payment-appointments-details')
      .then(response => response.json())
      .then(data => setFilteredData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const filterData = (searchTerm) => {
    const filtered = filteredData.filter((data) => {
      const id = data.appointment_id.toLowerCase();
      return id.includes(searchTerm);
    });

    setFilteredData(filtered);
  };

  const handleIdSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    filterData(searchTerm);
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
      body: JSON.stringify(paymentData),
    };

    fetch('http://localhost:4000/payment-appointments-details', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log('Payment data successfully submitted:', data);
        setShowModal(false);
      })
      .catch(error => console.error('Error:', error));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPaymentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDeletePayment = (appointmentId) => {
    if (window.confirm('Are you sure you want to delete this payment?')) {
      fetch(`http://localhost:4000/payment-appointments-details/${appointmentId}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (response.ok) {
            // Refresh the list of payments
            fetch('http://localhost:4000/payment-appointments-details')
              .then(response => response.json())
              .then(data => setFilteredData(data))
              .catch(error => console.error('Error:', error));

            alert('Payment deleted successfully!');
          } else {
            console.error('Failed to delete payment:', response.status);
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
              <i className="bi bi-card-text me-2"></i>
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
                    <th>Appointment ID</th>
                    <th>Payment Date</th>
                    <th>Payment Amount</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((tdata) => (
                    <tr key={tdata.appointment_id} className="border-top">
                      <td>{tdata.appointment_id}</td>
                      <td>{tdata.payment_date}</td>
                      <td>{tdata.amount}</td>
                      <td>
                        <Button
                          className="btn"
                          outline
                          color="danger"
                          onClick={() => handleDeletePayment(tdata.appointment_id)}
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
              <Label for="appointment_id">Appointment ID</Label>
              <Input
                type="text"
                name="appointment_id"
                id="appointment_id"
                value={paymentData.appointment_id}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="date">Payment Date</Label>
              <Input
                type="date"
                name="payment_date" // Updated the name attribute
                id="date"
                value={paymentData.payment_date}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="amount">Payment Amount</Label>
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
            </Button>{" "}
            <Button color="secondary" onClick={handleModalClose}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

export default Payment;
