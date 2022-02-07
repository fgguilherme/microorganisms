const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('carac_micromorfologica', {
    idcarac_micromorfologica: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    carac_micromorfologica: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "carac_micromorfologica_UNIQUE"
    }
  }, {
    sequelize,
    tableName: 'carac_micromorfologica',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idcarac_micromorfologica" },
        ]
      },
      {
        name: "idcarac_micromorfologica_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idcarac_micromorfologica" },
        ]
      },
      {
        name: "carac_micromorfologica_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "carac_micromorfologica" },
        ]
      },
    ]
  });
};
