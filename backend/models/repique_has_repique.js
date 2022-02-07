const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('repique_has_repique', {
    repique_idrepique: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'repique',
        key: 'idrepique'
      }
    },
    repique_idrepique1: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'repique',
        key: 'idrepique'
      }
    }
  }, {
    sequelize,
    tableName: 'repique_has_repique',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "repique_idrepique" },
          { name: "repique_idrepique1" },
        ]
      },
      {
        name: "fk_repique_has_repique_repique2_idx",
        using: "BTREE",
        fields: [
          { name: "repique_idrepique1" },
        ]
      },
      {
        name: "fk_repique_has_repique_repique1_idx",
        using: "BTREE",
        fields: [
          { name: "repique_idrepique" },
        ]
      },
    ]
  });
};
