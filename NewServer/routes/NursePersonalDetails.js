const express=require('express')
const router = express.Router()
const {NursePersonalDetails} = require('../models');
// const DoctorPersonalDetails = require('../models/DoctorPersonalDetails');

router.get('/',async(req,res)=>{
    const listOfNurse=await NursePersonalDetails.findAll();
    res.json(listOfNurse) 
});

router.post('/', async(req,res)=>{
    const nursePersonalDetails = req.body;
    await NursePersonalDetails.create(nursePersonalDetails);
    res.json(nursePersonalDetails);
});
// router.post()

router.delete('/:nurse_id', async (req, res) => {
    const { nurse_id } = req.params;
  
    try {
      const numAffectedRows = await NursePersonalDetails.destroy({
        where: { nurse_id: nurse_id },
      });
  
      if (numAffectedRows === 0) {
        return res.status(404).json({ error: 'Nurse not found' });
      }
  
      res.status(200).json({ message: 'Nurse deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete Nurse. Please try again.' });
    }
  });


module.exports = router