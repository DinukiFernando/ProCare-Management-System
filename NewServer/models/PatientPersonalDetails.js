module.exports = (sequelize,DataTypes)=>{
const PatientPersonalDetails = sequelize.define("PatientPersonalDetails",{
  Patient_id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthday: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nic_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address_line1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address_line2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address_line3: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});


PatientPersonalDetails.beforeValidate(async (patient) => {
  if (!patient.Patient_id) {
    const maxPatientId = await PatientPersonalDetails.max("Patient_id");
    const currentNumber = maxPatientId ? parseInt(maxPatientId.substring(3)) : 0;
    const nextNumber = currentNumber + 1;
    const paddedNextNumber = String(nextNumber).padStart(3, "0");
    patient.Patient_id = `PAT${paddedNextNumber}`;
  }
});
  
return PatientPersonalDetails;
};