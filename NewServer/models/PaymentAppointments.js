module.exports = (sequelize,DataTypes)=>{
const PaymentAppointments = sequelize.define("PaymentAppointments",{
  appointment_id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  payment_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  amount: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

  
return PaymentAppointments;
};