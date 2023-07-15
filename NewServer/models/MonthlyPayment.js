module.exports = (sequelize, DataTypes) => {
  const MonthlyPayment = sequelize.define("MonthlyPayment", {
    payment_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    patient_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return MonthlyPayment;
};
