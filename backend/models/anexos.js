const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('anexos', {
    idanexos: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    link: {
      type: DataTypes.STRING(145),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'anexos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idanexos" },
        ]
      },
      {
        name: "idanexos_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idanexos" },
        ]
      },
    ]
  });
};
