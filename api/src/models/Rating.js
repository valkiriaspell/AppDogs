const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('rating', {    
    name: {
      type: DataTypes.STRING,
      primaryKey: true,
    }
  },{
      timestamps: false       
  });
};