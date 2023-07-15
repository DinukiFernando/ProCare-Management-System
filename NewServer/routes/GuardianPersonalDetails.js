const express=require('express')
const router = express.Router()
const {GuardianPersonalDetails} = require('../models');


router.get('/',async(req,res)=>{
    const listOfGuardian=await GuardianPersonalDetails.findAll();
    res.json(listOfGuardian) 
});

router.post('/', async(req,res)=>{
    const guardianPersonalDetails = req.body;
    await GuardianPersonalDetails.create(guardianPersonalDetails);
    res.json(guardianPersonalDetails);
});
// router.post()

router.delete('/:guardian_id', async (req, res) => {
    const { guardian_id } = req.params;
  
    try {
      const numAffectedRows = await GuardianPersonalDetails.destroy({
        where: { guardian_id: guardian_id },
      });
  
      if (numAffectedRows === 0) {
        return res.status(404).json({ error: 'Guardian not found' });
      }
  
      res.status(200).json({ message: 'Guardian deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete Guardian. Please try again.' });
    }
  });

module.exports = router