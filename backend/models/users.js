const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    iduser: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(35),
      allowNull: false,
      unique: "email"
    },
    passwd: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    isMaster: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    instituicao: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "iduser" },
        ]
      },
      {
        name: "email",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
};
