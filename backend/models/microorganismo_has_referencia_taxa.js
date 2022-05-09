const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('microorganismo_has_referencia_taxa', {
    idmicroorganismo_has_referencia_taxa: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    microorganismo_idmicroorganismo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'microorganismo',
        key: 'idmicroorganismo'
      }
    },
    referencia_idreferencia: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'referencia',
        key: 'idreferencia'
      }
    }
  }, {
    sequelize,
    tableName: 'microorganismo_has_referencia_taxa',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idmicroorganismo_has_referencia_taxa" },
          { name: "microorganismo_idmicroorganismo" },
          { name: "referencia_idreferencia" },
        ]
      },
      {
        name: "fk_microorganismo_has_referencia_referencia1_idx",
        using: "BTREE",
        fields: [
          { name: "referencia_idreferencia" },
        ]
      },
      {
        name: "fk_microorganismo_has_referencia_microorganismo1_idx",
        using: "BTREE",
        fields: [
          { name: "microorganismo_idmicroorganismo" },
        ]
      },
    ]
  });
};
