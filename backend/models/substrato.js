const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('substrato', {
    idsubstrato: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    substrato: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'substrato',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idsubstrato" },
        ]
      },
      {
        name: "idsubstrato_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idsubstrato" },
        ]
      },
    ]
  });
};
