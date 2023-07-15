const express=require('express')
const router = express.Router()
const {DoctorPersonalDetails} = require('../models');
// const DoctorPersonalDetails = require('../models/DoctorPersonalDetails');

router.get('/',async(req,res)=>{
    const listOfDoctors=await DoctorPersonalDetails.findAll();
    res.json(listOfDoctors) 
});

router.post('/', async(req,res)=>{
    const doctorPersonalDetails = req.body;
    await DoctorPersonalDetails.create(doctorPersonalDetails);
    res.json(doctorPersonalDetails);
});
// router.post()


router.delete('/:doctor_id', async (req, res) => {
    const { doctor_id } = req.params;
  
    try {
      const numAffectedRows = await DoctorPersonalDetails.destroy({
        where: { doctor_id: doctor_id },
      });
  
      if (numAffectedRows === 0) {
        return res.status(404).json({ error: 'Doctor not found' });
      }
  
      res.status(200).json({ message: 'Doctor deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete Doctor. Please try again.' });
    }
  });

module.exports = router