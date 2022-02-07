const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('microorganismo_has_anexos', {
    microorganismo_idmicroorganismo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'microorganismo',
        key: 'idmicroorganismo'
      }
    },
    anexos_idanexos: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'anexos',
        key: 'idanexos'
      }
    }
  }, {
    sequelize,
    tableName: 'microorganismo_has_anexos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "microorganismo_idmicroorganismo" },
          { name: "anexos_idanexos" },
        ]
      },
      {
        name: "fk_microorganismo_has_anexos_anexos1_idx",
        using: "BTREE",
        fields: [
          { name: "anexos_idanexos" },
        ]
      },
      {
        name: "fk_microorganismo_has_anexos_microorganismo1_idx",
        using: "BTREE",
        fields: [
          { name: "microorganismo_idmicroorganismo" },
        ]
      },
    ]
  });
};
