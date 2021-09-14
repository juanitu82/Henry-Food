const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('diet', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdInDB: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });
};
