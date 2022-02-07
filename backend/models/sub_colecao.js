const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sub_colecao', {
    idsub_colecao: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    sub_colecao: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "sub_colecao_UNIQUE"
    }
  }, {
    sequelize,
    tableName: 'sub_colecao',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idsub_colecao" },
        ]
      },
      {
        name: "idsub_colecao_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idsub_colecao" },
        ]
      },
      {
        name: "sub_colecao_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sub_colecao" },
        ]
      },
    ]
  });
};
