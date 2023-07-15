const express=require('express')
const router = express.Router()
const {PatientMedicalHistory} = require('../models');
// const DoctorPersonalDetails = require('../models/DoctorPersonalDetails');

router.get('/',async(req,res)=>{
    const listOfPatient=await PatientMedicalHistory.findAll();
    res.json(listOfPatient) 
});

router.post('/', async(req,res)=>{
    const patientMedicalHistory = req.body;
    await PatientMedicalHistory.create(patientMedicalHistory);
    res.json(patientMedicalHistory);
});
// router.post()

router.delete('/:patient_id', async (req, res) => {
    const { patient_id } = req.params;
  
    try {
      const numAffectedRows = await PatientMedicalHistory.destroy({
        where: { patient_id: patient_id },
      });
  
      if (numAffectedRows === 0) {
        return res.status(404).json({ error: 'Patient not found' });
      }
  
      res.status(200).json({ message: 'Patient deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete Patient. Please try again.' });
    }
  });

module.exports = router