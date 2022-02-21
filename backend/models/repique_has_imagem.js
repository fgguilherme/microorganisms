const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('repique_has_imagem', {
    idrepique_has_imagem: {
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
    tableName: 'repique_has_imagem',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idrepique_has_imagem" },
          { name: "repique_idrepique" },
          { name: "imagem_idimagem" },
        ]
      },
      {
        name: "fk_repique_has_imagem_imagem1_idx",
        using: "BTREE",
        fields: [
          { name: "imagem_idimagem" },
        ]
      },
      {
        name: "fk_repique_has_imagem_repique1_idx",
        using: "BTREE",
        fields: [
          { name: "repique_idrepique" },
        ]
      },
    ]
  });
};
