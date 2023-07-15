module.exports = (sequelize,DataTypes)=>{
const PatientEmergencyContact = sequelize.define("PatientEmergencyContact",{
  emergency_contact_id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  patient_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone_number: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  relationship: {
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
  }
});
  
return PatientEmergencyContact;
};