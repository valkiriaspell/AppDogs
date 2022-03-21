const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('ratings', {    
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    votes: {
      type: DataTypes.INTEGER
    },
    totalVotes: {
      type: DataTypes.INTEGER
    }
  },{
      timestamps: false       
  });
};

