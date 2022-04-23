const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('repique_has_metodo_preservacao', {
    idrepique_has_metodo_preservacao: {
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
    tableName: 'repique_has_metodo_preservacao',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idrepique_has_metodo_preservacao" },
          { name: "metodo_preservacao_idmetodo_preservacao" },
          { name: "repique_idrepique" },
        ]
      },
      {
        name: "fk_repique_has_metodo_preservacao_metodo_preservacao1_idx",
        using: "BTREE",
        fields: [
          { name: "metodo_preservacao_idmetodo_preservacao" },
        ]
      },
      {
        name: "fk_repique_has_metodo_preservacao_repique1_idx",
        using: "BTREE",
        fields: [
          { name: "repique_idrepique" },
        ]
      },
    ]
  });
};
