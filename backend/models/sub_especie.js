const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sub_especie', {
    idsub_especie: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    sub_especie: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    autor: {
      type: DataTypes.STRING(145),
      allowNull: true
    },
    especie_idespecie: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'especie',
        key: 'idespecie'
      }
    }
  }, {
    sequelize,
    tableName: 'sub_especie',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idsub_especie" },
        ]
      },
      {
        name: "idsub_especie_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idsub_especie" },
        ]
      },
      {
        name: "fk_sub_especie_especie1_idx",
        using: "BTREE",
        fields: [
          { name: "especie_idespecie" },
        ]
      },
    ]
  });
};
