const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('microorganismo_has_imagem_micro', {
    idmicroorganismo_has_imagem_micro: {
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
    imagem_idimagem: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'imagem',
        key: 'idimagem'
      }
    }
  }, {
    sequelize,
    tableName: 'microorganismo_has_imagem_micro',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idmicroorganismo_has_imagem_micro" },
          { name: "microorganismo_idmicroorganismo" },
          { name: "imagem_idimagem" },
        ]
      },
      {
        name: "fk_microorganismo_has_imagem_imagem2_idx",
        using: "BTREE",
        fields: [
          { name: "imagem_idimagem" },
        ]
      },
      {
        name: "fk_microorganismo_has_imagem_microorganismo2_idx",
        using: "BTREE",
        fields: [
          { name: "microorganismo_idmicroorganismo" },
        ]
      },
    ]
  });
};
