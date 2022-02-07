const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('armario', {
    idarmario: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    armario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    sub_colecao_idsub_colecao: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'sub_colecao',
        key: 'idsub_colecao'
      }
    }
  }, {
    sequelize,
    tableName: 'armario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idarmario" },
        ]
      },
      {
        name: "idarmario_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idarmario" },
        ]
      },
      {
        name: "fk_armario_sub_colecao1_idx",
        using: "BTREE",
        fields: [
          { name: "sub_colecao_idsub_colecao" },
        ]
      },
    ]
  });
};
