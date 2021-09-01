const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('diet', {
    id:{
      type:DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: UUIDV4,
      validate: {
        isUUID: true
      }
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });
};
