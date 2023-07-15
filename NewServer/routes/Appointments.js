const express=require('express')
const router = express.Router()
const {NewAppointments} = require('../models');
// const DoctorPersonalDetails = require('../models/DoctorPersonalDetails');

router.get('/',async(req,res)=>{
    const listOfAppointments=await NewAppointments.findAll();
    res.json(listOfAppointments) 
});

router.post('/', async(req,res)=>{
    const appointments = req.body;
    await NewAppointments.create(appointments);
    res.json(appointments);
});
// router.post()

// DELETE /appointments-details/:appointment_id
router.delete('/:appointment_id', async (req, res) => {
    const { appointment_id } = req.params;
  
    try {
      const numAffectedRows = await NewAppointments.destroy({
        where: { appointment_id: appointment_id },
      });
  
      if (numAffectedRows === 0) {
        return res.status(404).json({ error: 'Appointment not found' });
      }
  
      res.status(200).json({ message: 'Appointment deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete appointment. Please try again.' });
    }
  });

module.exports = router