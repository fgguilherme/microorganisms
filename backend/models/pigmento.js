const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pigmento', {
    idpigmento: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    pigmento: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pigmento',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idpigmento" },
        ]
      },
      {
        name: "idpigmento_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idpigmento" },
        ]
      },
    ]
  });
};
