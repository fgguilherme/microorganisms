const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('especie', {
    idespecie: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    especie: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    autor: {
      type: DataTypes.STRING(145),
      allowNull: true
    },
    genero_idgenero: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'genero',
        key: 'idgenero'
      }
    }
  }, {
    sequelize,
    tableName: 'especie',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idespecie" },
        ]
      },
      {
        name: "idespecie_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idespecie" },
        ]
      },
      {
        name: "fk_especie_genero1_idx",
        using: "BTREE",
        fields: [
          { name: "genero_idgenero" },
        ]
      },
    ]
  });
};
