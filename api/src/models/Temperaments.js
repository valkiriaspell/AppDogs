const { DataTypes } = require('sequelize');
//Modelo tabla de temperamentos
module.exports = (sequelize) => {
  
  sequelize.define('temperaments', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};