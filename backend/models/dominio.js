const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dominio', {
    iddominio: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    dominio: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "dominio_UNIQUE"
    }
  }, {
    sequelize,
    tableName: 'dominio',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "iddominio" },
        ]
      },
      {
        name: "iddominio_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "iddominio" },
        ]
      },
      {
        name: "dominio_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dominio" },
        ]
      },
    ]
  });
};
