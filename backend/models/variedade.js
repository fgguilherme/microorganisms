const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('variedade', {
    idvariedade: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    variedade: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "variedade_UNIQUE"
    },
    autor: {
      type: DataTypes.STRING(145),
      allowNull: true
    },
    sub_especie_idsub_especie: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'sub_especie',
        key: 'idsub_especie'
      }
    }
  }, {
    sequelize,
    tableName: 'variedade',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idvariedade" },
        ]
      },
      {
        name: "idvariedade_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idvariedade" },
        ]
      },
      {
        name: "variedade_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "variedade" },
        ]
      },
      {
        name: "fk_variedade_sub_especie1_idx",
        using: "BTREE",
        fields: [
          { name: "sub_especie_idsub_especie" },
        ]
      },
    ]
  });
};
