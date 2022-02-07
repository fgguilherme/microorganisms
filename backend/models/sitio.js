const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sitio', {
    idsitio: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    sitio: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sitio',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idsitio" },
        ]
      },
      {
        name: "idsitio_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idsitio" },
        ]
      },
    ]
  });
};
