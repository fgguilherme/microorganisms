const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cor', {
    idcor: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    cor: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "cor_UNIQUE"
    }
  }, {
    sequelize,
    tableName: 'cor',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idcor" },
        ]
      },
      {
        name: "idcor_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idcor" },
        ]
      },
      {
        name: "cor_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cor" },
        ]
      },
    ]
  });
};
