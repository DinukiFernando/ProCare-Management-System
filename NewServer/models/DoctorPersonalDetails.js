// module.exports = (sequelize,DataTypes)=>{
// const DoctorPersonalDetails  = sequelize.define("DoctorPersonalDetails",{
//   doctor_id: {
//     type: DataTypes.STRING,
//     primaryKey: true,
//     allowNull: false,
//   },
//   first_name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   last_name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   birthday: {
//     type: DataTypes.DATEONLY,
//     allowNull: false,
//   },
//   gender: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   phone_number: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   specialization: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   nic_number: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   license_number: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   address_line1: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   address_line2: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   address_line3: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });

// DoctorPersonalDetails.beforeCreate(async (doctor) => {
//   const maxDoctorId = await DoctorPersonalDetails.max('doctor_id');
//   const currentNumber = maxDoctorId ? parseInt(maxDoctorId.substring(3)) : 0;
//   const nextNumber = currentNumber + 1;
//   const paddedNextNumber = String(nextNumber).padStart(3, '0');
//   doctor.doctor_id = `DOC${paddedNextNumber}`;
// });
  
// return DoctorPersonalDetails ;
// };


module.exports = (sequelize, DataTypes) => {
  const DoctorPersonalDetails = sequelize.define("DoctorPersonalDetails", {
    doctor_id: {
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
    specialization: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nic_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    license_number: {
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

  DoctorPersonalDetails.beforeValidate(async (doctor) => {
    if (!doctor.doctor_id) {
      const maxDoctorId = await DoctorPersonalDetails.max("doctor_id");
      const currentNumber = maxDoctorId ? parseInt(maxDoctorId.substring(3)) : 0;
      const nextNumber = currentNumber + 1;
      const paddedNextNumber = String(nextNumber).padStart(3, "0");
      doctor.doctor_id = `DOC${paddedNextNumber}`;
    }
  });

  return DoctorPersonalDetails;
};
