const { DataTypes, INTEGER, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    
    id:{
      type:DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: UUIDV4,
      validate: {
        isUUID: 4
      }
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resumen: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    puntuacion: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true
      }
    },
    salud: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true
      }
    },
    pasos: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    tipo: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    imagen: {
      type: DataTypes.TEXT,
      validate: {
        isUrl: true
      }
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
