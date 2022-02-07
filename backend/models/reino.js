const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reino', {
    idreino: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    reino: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "reino_UNIQUE"
    },
    dominio_iddominio: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'dominio',
        key: 'iddominio'
      }
    }
  }, {
    sequelize,
    tableName: 'reino',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idreino" },
        ]
      },
      {
        name: "idreino_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idreino" },
        ]
      },
      {
        name: "reino_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "reino" },
        ]
      },
      {
        name: "fk_reino_dominio_idx",
        using: "BTREE",
        fields: [
          { name: "dominio_iddominio" },
        ]
      },
    ]
  });
};
