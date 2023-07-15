const express = require('express');
const { Sequelize } = require('sequelize');
const DoctorPersonalDetails = require('../NewServer/models/DoctorPersonalDetails');

// Create a Sequelize instance
const sequelize = new Sequelize('nursinghomedb', 'root', 'DRFdrf2001*', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = {
  Sequelize,
  sequelize
};

const app = express();

// Create a route to add a doctor
app.post('/api/doctors', async (req, res) => {
  try {
    const {
      doctor_id,
      first_name,
      last_name,
      username,
      birthday,
      gender,
      email,
      phone_number,
      specialization,
      nic_number,
      license_number,
      address_line1,
      address_line2,
      address_line3,
      password,
    } = req.body;

    // Create a new doctor personal details record
    const doctor = await DoctorPersonalDetails.create({
      doctor_id,
      first_name,
      last_name,
      username,
      birthday,
      gender,
      email,
      phone_number,
      specialization,
      nic_number,
      license_number,
      address_line1,
      address_line2,
      address_line3,
      password,
    });

    res.status(201).json({ doctor });
  } catch (error) {
    console.error('Error adding doctor:', error);
    res.status(500).json({ error: 'Failed to add doctor' });
  }
});

// Start the server
app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
