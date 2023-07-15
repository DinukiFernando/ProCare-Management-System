const express=require('express')
const router = express.Router()
const {PatientEmergencyContact} = require('../models');
// const DoctorPersonalDetails = require('../models/DoctorPersonalDetails');

router.get('/',async(req,res)=>{
    const listOfEmergencyContact=await PatientEmergencyContact.findAll();
    res.json(listOfEmergencyContact) 
});

router.post('/', async(req,res)=>{
    const patientEmergencyContact = req.body;
    await PatientEmergencyContact.create(patientEmergencyContact);
    res.json(patientEmergencyContact);
});
// router.post()

router.delete('/:emergency_contact_id', async (req, res) => {
    const { emergency_contact_id } = req.params;
  
    try {
      const numAffectedRows = await PatientEmergencyContact.destroy({
        where: { emergency_contact_id: emergency_contact_id },
      });
  
      if (numAffectedRows === 0) {
        return res.status(404).json({ error: 'Emergency Contact not found' });
      }
  
      res.status(200).json({ message: 'Emergency Contact deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete Emergency Contact. Please try again.' });
    }
  });

module.exports = router