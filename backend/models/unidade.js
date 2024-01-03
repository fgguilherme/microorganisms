const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('unidade', {
    idunidade: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    unidade: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'unidade',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idunidade" },
        ]
      },
      {
        name: "idunidade_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idunidade" },
        ]
      },
    ]
  });
};
