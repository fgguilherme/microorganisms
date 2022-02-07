const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('genero', {
    idgenero: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    genero: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    familia_idfamilia: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'familia',
        key: 'idfamilia'
      }
    }
  }, {
    sequelize,
    tableName: 'genero',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idgenero" },
        ]
      },
      {
        name: "idgenero_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idgenero" },
        ]
      },
      {
        name: "fk_genero_familia1_idx",
        using: "BTREE",
        fields: [
          { name: "familia_idfamilia" },
        ]
      },
    ]
  });
};
