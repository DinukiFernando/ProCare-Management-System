// import cors from "cors";
const express=require("express");
const app = express();

const cors = require("cors");
app.use(express.json());
app.use(cors());
const db = require("./models");
 

//Routers
const doctorPersonalDetailsRouter = require('./routes/DoctorPersonalDetails')
app.use("/doctor-personal-details",doctorPersonalDetailsRouter);

const nursePersonalDetailsRouter = require('./routes/NursePersonalDetails')
app.use("/nurse-personal-details",nursePersonalDetailsRouter);

const staffPersonalDetailsRouter = require('./routes/StaffPersonalDetails')
app.use("/staff-personal-details",staffPersonalDetailsRouter);

const guardianPersonalDetailsRouter = require('./routes/GuardianPersonalDetails')
app.use("/guardian-personal-details",guardianPersonalDetailsRouter);

const patientPersonalDetailsRouter = require('./routes/PatientPersonalDetails')
app.use("/patient-personal-details",patientPersonalDetailsRouter);

const patientMedicalHistoryRouter = require('./routes/PatientMedicalHistory')
app.use("/patient-medical-history",patientMedicalHistoryRouter);

const patientEmergencyContact = require('./routes/PatientEmergencyContact')
app.use("/patient-emergency-contact",patientEmergencyContact);

const appointments = require('./routes/Appointments')
app.use("/appointments-details",appointments);

const paymentAppointments = require('./routes/PaymentAppointments')
app.use("/c",paymentAppointments);

const rooms = require('./routes/Rooms')
app.use("/room-details",rooms);

const monthlyPayment = require('./routes/MonthlyPayment')
app.use("/monthly-payment-details",monthlyPayment);




app.put('/room-details/:room_id', async (req, res) => {
    const { room_id } = req.params;
    const { OccupantInfo, roomStatus } = req.body;
  
    try {
      const [numAffectedRows] = await db.Rooms.update(
        { OccupantInfo, roomStatus },
        { where: { room_id: room_id } }
      );
  
      if (numAffectedRows === 0) {
        return res.status(404).json({ error: 'Room not found' });
      }
  
      res.status(200).json({ message: 'Room updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update room. Please try again.' });
    }
  });

  app.put('/appointments-details/:appointment_id', async (req, res) => {
    const { appointment_id } = req.params;
    const { payment } = req.body;
  
    try {
      const [numAffectedRows] = await db.NewAppointments.update(
        { payment },
        { where: { appointment_id: appointment_id } }
      );
  
      if (numAffectedRows === 0) {
        return res.status(404).json({ error: 'Appointment not found' });
      }
  
      res.status(200).json({ message: 'Appointment updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update appointment. Please try again.' });
    }
  });
  

db.sequelize.sync().then(()=>{
    app.listen(4000,()=>{
        console.log("Server running")
    });
});