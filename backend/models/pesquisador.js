const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pesquisador', {
    idpesquisador: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(145),
      allowNull: true
    },
    instituicao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pesquisador',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idpesquisador" },
        ]
      },
      {
        name: "idpesquisador_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idpesquisador" },
        ]
      },
    ]
  });
};
