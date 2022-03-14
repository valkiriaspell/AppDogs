const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  
  sequelize.define('dogs', {
    id: {
      type: DataTypes.UUID,      
      allowNull: false,
      primaryKey: true,
    },    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    weight: {type: DataTypes.STRING,},
    height: {type: DataTypes.STRING,},       
    life_span: {type: DataTypes.STRING,},
    

    image: {
    type: DataTypes.TEXT,    
  } 
}, {
    timestamps: false
});
};
