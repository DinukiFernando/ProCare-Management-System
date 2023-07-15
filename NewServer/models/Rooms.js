module.exports = (sequelize,DataTypes)=>{
const Rooms = sequelize.define("Rooms",{
  room_id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  roomType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  roomStatus: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  floor: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,
  },
  OccupantInfo: {
    type: DataTypes.STRING,
    allowNull: true,
  }
});


  
return Rooms;
};