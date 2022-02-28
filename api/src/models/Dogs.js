const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  // modelo tabla de dogs
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
    //haré q en formulario, ingresen min y max de estas 3
    weight: {type: DataTypes.STRING,},
    height: {type: DataTypes.STRING,},       
    life_span: {type: DataTypes.STRING,},
    // -

    image: {
    type: DataTypes.TEXT,    
  },
})
};
