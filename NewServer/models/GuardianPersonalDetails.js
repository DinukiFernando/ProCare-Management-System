module.exports = (sequelize,DataTypes)=>{
const GuardianPersonalDetails = sequelize.define("GuardianPersonalDetails",{
  Guardian_id: {
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
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

GuardianPersonalDetails.beforeValidate(async (guardian) => {
  if (!guardian.Guardian_id) {
    const maxGuardianId = await GuardianPersonalDetails.max("Guardian_id");
    const currentNumber = maxGuardianId ? parseInt(maxGuardianId.substring(3)) : 0;
    const nextNumber = currentNumber + 1;
    const paddedNextNumber = String(nextNumber).padStart(3, "0");
    guardian.Guardian_id = `GUA${paddedNextNumber}`;
  }
});
  
return GuardianPersonalDetails;
};