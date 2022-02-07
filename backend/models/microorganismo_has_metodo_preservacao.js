const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('microorganismo_has_metodo_preservacao', {
    microorganismo_idmicroorganismo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'microorganismo',
        key: 'idmicroorganismo'
      }
    },
    metodo_preservacao_idmetodo_preservacao: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'metodo_preservacao',
        key: 'idmetodo_preservacao'
      }
    }
  }, {
    sequelize,
    tableName: 'microorganismo_has_metodo_preservacao',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "microorganismo_idmicroorganismo" },
          { name: "metodo_preservacao_idmetodo_preservacao" },
        ]
      },
      {
        name: "fk_microorganismo_has_metodo_preservacao_metodo_preservacao_idx",
        using: "BTREE",
        fields: [
          { name: "metodo_preservacao_idmetodo_preservacao" },
        ]
      },
      {
        name: "fk_microorganismo_has_metodo_preservacao_microorganismo1_idx",
        using: "BTREE",
        fields: [
          { name: "microorganismo_idmicroorganismo" },
        ]
      },
    ]
  });
};
