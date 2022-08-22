const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('autenticacao', {
    idAutenticacao: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idRepique: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idPesquisador: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    data_autenticacao: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'autenticacao',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idAutenticacao" },
        ]
      },
    ]
  });
};
