const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('microorganismo_has_carac_micromorfologica', {
    microorganismo_idmicroorganismo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'microorganismo',
        key: 'idmicroorganismo'
      }
    },
    carac_micromorfologica_idcarac_micromorfologica: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'carac_micromorfologica',
        key: 'idcarac_micromorfologica'
      }
    }
  }, {
    sequelize,
    tableName: 'microorganismo_has_carac_micromorfologica',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "microorganismo_idmicroorganismo" },
          { name: "carac_micromorfologica_idcarac_micromorfologica" },
        ]
      },
      {
        name: "fk_microorganismo_has_carac_micromorfologica_carac_micromor_idx",
        using: "BTREE",
        fields: [
          { name: "carac_micromorfologica_idcarac_micromorfologica" },
        ]
      },
      {
        name: "fk_microorganismo_has_carac_micromorfologica_microorganismo_idx",
        using: "BTREE",
        fields: [
          { name: "microorganismo_idmicroorganismo" },
        ]
      },
    ]
  });
};
