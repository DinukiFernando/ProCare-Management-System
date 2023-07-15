import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import axios from 'axios';

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone_number: '',
    doctor: '',
    date: '',
    Message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [warningMessage, setWarningMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone_number || !formData.doctor || !formData.date) {
      setWarningMessage('Please fill in all required fields.');
      return;
    }

    try {
      await axios.post('http://localhost:4000/appointments-details', formData);
      setSuccessMessage('Appointment submitted successfully!');
      setFormData({
        name: '',
        phone_number: '',
        doctor: '',
        date: '',
        Message: '',
      });
    } catch (error) {
      console.error('Error submitting appointment:', error);
      // Handle error or display error message
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section id="appointment" className="appointment section-bg">
      <div className="container" data-aos="fade-up">
        <Card>
          <CardContent>
            <Typography variant="h2" component="h2" align="center" gutterBottom>
              Make an Appointment
            </Typography>
            {successMessage && (
              <Typography variant="body1" color="primary" align="center">
                {successMessage}
              </Typography>
            )}
            {warningMessage && (
              <Typography variant="body1" color="error" align="center">
                {warningMessage}
              </Typography>
            )}
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    error={!formData.name && warningMessage}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Phone"
                    name="phone_number"
                    required
                    value={formData.phone_number}
                    onChange={handleInputChange}
                    error={!formData.phone_number && warningMessage}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Select
                    name="doctor"
                    fullWidth
                    label="Select Doctor"
                    required
                    value={formData.doctor}
                    onChange={handleInputChange}
                    displayEmpty
                    error={!formData.doctor && warningMessage}
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
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="date"
                    label="Date"
                    name="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                    error={!formData.date && warningMessage}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={5}
                    label="Message (Optional)"
                    name="Message"
                    value={formData.Message}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} align="center">
                  <Button variant="contained" color="primary" type="submit">
                    Make an Appointment
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AppointmentSection;
