const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('referencia', {
    idreferencia: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    referencia: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'referencia',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idreferencia" },
        ]
      },
      {
        name: "idreferencia_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idreferencia" },
        ]
      },
    ]
  });
};
