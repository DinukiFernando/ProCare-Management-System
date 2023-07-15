import React, { useState, useEffect } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
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

function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appointmentData, setAppointmentData] = useState({
    appointment_id: "",
    name: "",
    phone_number: "",
    doctor: "",
    date: "",
    Message: "",
    payment: ""
  });
  const [formErrors, setFormErrors] = useState({
    appointment_id: "",
    name: "",
    phone_number: "",
    doctor: "",
    date: "",
    Message: "",
    payment: ""
  });

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch("http://localhost:4000/appointments-details");
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!appointmentData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!appointmentData.phone_number.trim()) {
      errors.phone_number = "Phone Number is required";
      isValid = false;
    }

    if (!appointmentData.doctor.trim()) {
      errors.doctor = "Doctor is required";
      isValid = false;
    }

    if (!appointmentData.date) {
      errors.date = "Date is required";
      isValid = false;
    }

    if (!appointmentData.Message.trim()) {
      errors.Message = "Message is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleAddAppointment = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/appointments-details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });

      if (response.ok) {
        fetchAppointments();
        toggleModal();
        alert("Appointment added successfully!");
      } else {
        console.error("Failed to add appointment:", response.status);
      }
    } catch (error) {
      console.error("Error adding appointment:", error);
    }
  };

  const handleDeleteAppointment = async (appointment_id) => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      try {
        const response = await fetch(
          `http://localhost:4000/appointments-details/${appointment_id}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          fetchAppointments();
          alert("Appointment deleted successfully!");
        } else {
          console.error("Failed to delete appointment:", response.status);
        }
      } catch (error) {
        console.error("Error deleting appointment:", error);
      }
    }
  };


  const handleUpdatePayment = async (appointment_id) => {
    try {
      const response = await fetch(
        `http://localhost:4000/appointments-details/${appointment_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            payment: "paid",
          }),
        }
      );
  
      if (response.ok) {
        fetchAppointments();
        toggleModal();
        alert("Payment updated successfully!");
      } else {
        console.error("Failed to update payment:", response.status);
      }
    } catch (error) {
      console.error("Error updating payment:", error);
    }
  };
  

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          className="btn"
          color="primary"
          size="lg"
          onClick={toggleModal}
        >
          Add an Appointment
        </Button>
      </div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Appointments</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of Appointments
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Appointment ID</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Doctor</th>
                <th>Date</th>
                <th>Message</th>
                <th>Payment</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {appointments.map((appointment, index) => (
  <tr key={index} className="border-top">
    <td>{appointment.appointment_id}</td>
    <td>{appointment.name}</td>
    <td>{appointment.phone_number}</td>
    <td>{appointment.doctor}</td>
    <td>{appointment.date}</td>
    <td>{appointment.Message}</td>
    <td>{appointment.payment}</td>
    <td>
      {appointment.payment.toLowerCase() !== "paid" && (
        <Button
          className="btn"
          outline
          color="success"
          onClick={() => handleUpdatePayment(appointment.appointment_id)}
        >
          Mark as Paid
        </Button>
      )}


                    
                    <Button
                      className="btn"
                      outline
                      color="danger"
                      onClick={() =>
                        handleDeleteAppointment(appointment.appointment_id)
                      }
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
        <ModalHeader toggle={toggleModal}>Add an Appointment</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleAddAppointment}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={appointmentData.name}
                onChange={handleInputChange}
              />
              {formErrors.name && (
                <span className="text-danger">{formErrors.name}</span>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="phone_number">Phone Number</Label>
              <Input
                type="text"
                name="phone_number"
                id="phone_number"
                value={appointmentData.phone_number}
                onChange={handleInputChange}
              />
              {formErrors.phone_number && (
                <span className="text-danger">{formErrors.phone_number}</span>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="doctor">Doctor</Label>
              <Select
                name="doctor"
                fullWidth
                label="Select Doctor"
                required
                value={appointmentData.doctor}
                onChange={handleInputChange}
              >
                <MenuItem value="" disabled>
                  Select Doctor
                </MenuItem>
                <MenuItem value="Dr. Ranasinghe Perera">Dr. Ranasinghe Perera</MenuItem>
                <MenuItem value="Dr. Nimali Fernando">Dr. Nimali Fernando</MenuItem>
                <MenuItem value="Dr. Dilshan Silva">Dr. Dilshan Silva</MenuItem>
                <MenuItem value="Dr. Amara Bandara">Dr. Amara Bandara</MenuItem>
                <MenuItem value="Dr. Priya Rajapakse">Dr. Priya Rajapakse</MenuItem>
              </Select>
            </FormGroup>
            <FormGroup>
              <Label for="date">Date</Label>
              <Input
                type="date"
                name="date"
                id="date"
                value={appointmentData.date}
                onChange={handleInputChange}
              />
              {formErrors.date && (
                <span className="text-danger">{formErrors.date}</span>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="Message">Message</Label>
              <Input
                type="text"
                name="Message"
                id="Message"
                value={appointmentData.Message}
                onChange={handleInputChange}
              />
              {formErrors.Message && (
                <span className="text-danger">{formErrors.Message}</span>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="Payment">Payment</Label>
              <Select
                name="payment"
                fullWidth
                label="Payment"
                required
                value={appointmentData.payment}
                onChange={handleInputChange}
              >
                <MenuItem value="" disabled>
                  Payment
                </MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="paid">Paid</MenuItem>
              </Select>
            </FormGroup>
            <ModalFooter>
              <Button color="primary" type="submit">
                Add Appointment
              </Button>
              <Button color="secondary" onClick={toggleModal}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Appointments;
