const express=require('express')
const router = express.Router()
const {PaymentAppointments} = require('../models');
// const DoctorPersonalDetails = require('../models/DoctorPersonalDetails');

router.get('/',async(req,res)=>{
    const listOfPayments=await PaymentAppointments.findAll();
    res.json(listOfPayments) 
});

router.post('/', async(req,res)=>{
    const payments = req.body;
    await PaymentAppointments.create(payments);
    res.json(payments);
});
// router.post()

router.delete('/:appointment_id', async (req, res) => {
    const { appointment_id } = req.params;
  
    try {
      const numAffectedRows = await PaymentAppointments.destroy({
        where: { appointment_id: appointment_id },
      });
  
      if (numAffectedRows === 0) {
        return res.status(404).json({ error: 'Payment appointment not found' });
      }
  
      res.status(200).json({ message: 'Payment appointment  deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete Payment appointment . Please try again.' });
    }
  });

module.exports = router