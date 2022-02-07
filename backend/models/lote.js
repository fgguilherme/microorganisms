const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lote', {
    idlote: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    lote: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    prateleira_idprateleira: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'prateleira',
        key: 'idprateleira'
      }
    }
  }, {
    sequelize,
    tableName: 'lote',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idlote" },
        ]
      },
      {
        name: "idlote_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idlote" },
        ]
      },
      {
        name: "fk_lote_prateleira1_idx",
        using: "BTREE",
        fields: [
          { name: "prateleira_idprateleira" },
        ]
      },
    ]
  });
};
