const { DataTypes } = require('sequelize');
//Modelo tabla de temperamentos
module.exports = (sequelize) => {
  
  sequelize.define('temperaments', {    
    name: {
      type: DataTypes.STRING,      
    }
  },{
      timestamps: false       
  });
};