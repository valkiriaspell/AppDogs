const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight_min: {type: DataTypes.INTEGER,},
    weight_max: {type: DataTypes.INTEGER,},
    height_min: {type: DataTypes.INTEGER,},
    height_max: {type: DataTypes.INTEGER,},   
    life_span: {type: DataTypes.INTEGER,},
    reference_image_id: {type: DataTypes.TEXT,},

  });
};
