const { DataTypes } = require('sequelize');
//Modelo tabla de temperamentos
module.exports = (sequelize) => {
  
  sequelize.define('temperaments', {
    id: {
      type: DataTypes.INTEGER,
      defaultValue: DataTypes.UUIDV1,            
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,      
    }
  },{
      timestamps: false       
  });
};