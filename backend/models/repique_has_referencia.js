const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('repique_has_referencia', {
    idrepique_has_referencia: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    repique_idrepique: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'repique',
        key: 'idrepique'
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
    tableName: 'repique_has_referencia',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idrepique_has_referencia" },
          { name: "repique_idrepique" },
          { name: "referencia_idreferencia" },
        ]
      },
      {
        name: "fk_repique_has_referencia_referencia1_idx",
        using: "BTREE",
        fields: [
          { name: "referencia_idreferencia" },
        ]
      },
      {
        name: "fk_repique_has_referencia_repique1_idx",
        using: "BTREE",
        fields: [
          { name: "repique_idrepique" },
        ]
      },
    ]
  });
};
