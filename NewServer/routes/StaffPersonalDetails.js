const express=require('express')
const router = express.Router()
const {StaffPersonalDetails} = require('../models');
// const DoctorPersonalDetails = require('../models/DoctorPersonalDetails');

router.get('/',async(req,res)=>{
    const listOfStaff=await StaffPersonalDetails.findAll();
    res.json(listOfStaff) 
});

router.post('/', async(req,res)=>{
    const staffPersonalDetails = req.body;
    await StaffPersonalDetails.create(staffPersonalDetails);
    res.json(staffPersonalDetails);
});
// router.post()

router.delete('/:staff_id', async (req, res) => {
    const { staff_id } = req.params;
  
    try {
      const numAffectedRows = await StaffPersonalDetails.destroy({
        where: { staff_id: staff_id },
      });
  
      if (numAffectedRows === 0) {
        return res.status(404).json({ error: 'Staff not found' });
      }
  
      res.status(200).json({ message: 'Staff deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete Staff . Please try again.' });
    }
  });

module.exports = router