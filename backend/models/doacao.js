const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doacao', {
    idDoacao: {
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
    data_doacao: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    destinatario: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'doacao',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idDoacao" },
        ]
      },
    ]
  });
};
