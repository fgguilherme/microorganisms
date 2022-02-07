const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('laboratorio', {
    idlaboratorio: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    laboratorio: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "laboratorio_UNIQUE"
    }
  }, {
    sequelize,
    tableName: 'laboratorio',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idlaboratorio" },
        ]
      },
      {
        name: "idlaboratorio_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idlaboratorio" },
        ]
      },
      {
        name: "laboratorio_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "laboratorio" },
        ]
      },
    ]
  });
};
