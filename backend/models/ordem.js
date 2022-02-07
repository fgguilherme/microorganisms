const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ordem', {
    idordem: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    ordem: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    classe_idclasse: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'classe',
        key: 'idclasse'
      }
    }
  }, {
    sequelize,
    tableName: 'ordem',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idordem" },
        ]
      },
      {
        name: "idordem_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idordem" },
        ]
      },
      {
        name: "fk_ordem_classe1_idx",
        using: "BTREE",
        fields: [
          { name: "classe_idclasse" },
        ]
      },
    ]
  });
};
