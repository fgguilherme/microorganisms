const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('posicao', {
    idposicao: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    posicao: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    lote_idlote: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'lote',
        key: 'idlote'
      }
    }
  }, {
    sequelize,
    tableName: 'posicao',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idposicao" },
        ]
      },
      {
        name: "idposicao_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idposicao" },
        ]
      },
      {
        name: "fk_posicao_lote1_idx",
        using: "BTREE",
        fields: [
          { name: "lote_idlote" },
        ]
      },
    ]
  });
};
