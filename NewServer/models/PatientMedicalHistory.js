module.exports = (sequelize,DataTypes)=>{
const PatientMedicalHistory = sequelize.define("PatientMedicalHistory",{
  patient_id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  allergies: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  previous_surgeries: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  chronic_illnesses: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  current_medications: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  patient_type: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  }
});
  
return PatientMedicalHistory;
};