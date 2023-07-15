const express=require('express')
const router = express.Router()
const {MonthlyPayment} = require('../models');
// const DoctorPersonalDetails = require('../models/DoctorPersonalDetails');

router.get('/',async(req,res)=>{
    const listOfPayments=await MonthlyPayment.findAll();
    res.json(listOfPayments) 
});

router.post('/', async(req,res)=>{
    const payments = req.body;
    await MonthlyPayment.create(payments);
    res.json(payments);
});
// router.post()

router.delete('/:payment_id', async (req, res) => {
    const { payment_id } = req.params;
  
    try {
      const numAffectedRows = await MonthlyPayment.destroy({
        where: { payment_id: payment_id },
      });
  
      if (numAffectedRows === 0) {
        return res.status(404).json({ error: 'Payment not found' });
      }
  
      res.status(200).json({ message: 'Payment deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete Payment. Please try again.' });
    }
  });

module.exports = router