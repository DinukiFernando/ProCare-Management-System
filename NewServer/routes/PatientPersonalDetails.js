const express=require('express')
const router = express.Router()
const {PatientPersonalDetails} = require('../models');
// const DoctorPersonalDetails = require('../models/DoctorPersonalDetails');

router.get('/',async(req,res)=>{
    const listOfStaff=await PatientPersonalDetails.findAll();
    res.json(listOfStaff) 
});

router.post('/', async(req,res)=>{
    const patientPersonalDetails = req.body;
    await PatientPersonalDetails.create(patientPersonalDetails);
    res.json(patientPersonalDetails);
});
// router.post()

router.delete('/:patient_id', async (req, res) => {
    const { patient_id } = req.params;
  
    try {
      const numAffectedRows = await PatientPersonalDetails.destroy({
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