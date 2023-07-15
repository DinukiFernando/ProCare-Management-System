module.exports = (sequelize,DataTypes)=>{
const NursePersonalDetails = sequelize.define("NursePersonalDetails",{
  nurse_id: {
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
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  birthday: {
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
  area_of_expertise: {
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
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

NursePersonalDetails.beforeValidate(async (nurse) => {
  if (!nurse.nurse_id) {
    const maxNurseId = await NursePersonalDetails.max("nurse_id");
    const currentNumber = maxNurseId ? parseInt(maxNurseId.substring(3)) : 0;
    const nextNumber = currentNumber + 1;
    const paddedNextNumber = String(nextNumber).padStart(3, "0");
    nurse.nurse_id = `NUR${paddedNextNumber}`;
  }
});

  
return NursePersonalDetails;
};