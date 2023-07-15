module.exports = (sequelize,DataTypes)=>{
const NewAppointments = sequelize.define("NewAppointments",{
  appointment_id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  doctor: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  Message: {
    type: DataTypes.STRING,
    allowNull: true
  },
  payment: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue:"Pending"
  }
});

NewAppointments.beforeValidate(async (appointment) => {
  if (!appointment.doctor_id) {
    const maxAppointmentId = await NewAppointments.max("appointment_id");
    const currentNumber = maxAppointmentId ? parseInt(maxAppointmentId.substring(3)) : 0;
    const nextNumber = currentNumber + 1;
    const paddedNextNumber = String(nextNumber).padStart(3, "0");
    appointment.appointment_id = `APP${paddedNextNumber}`;
  }
});
  
return NewAppointments;
};