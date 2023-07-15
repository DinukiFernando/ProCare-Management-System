import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,

} from "reactstrap";

function Appointments() {
  const [appointments, setAppointments] = useState([]);



  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/appointments");
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

 
  

  

  return (
    <div>
    
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
                  <td>{appointment.message}</td>
                  <td>{appointment.payment}</td>
                  
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>

      
    </div>
  );
}

export default Appointments;
