const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hospedeiro', {
    idhospedeiro: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    hospedeiro: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    isAnimal: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'hospedeiro',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idhospedeiro" },
        ]
      },
      {
        name: "idhospedeiro_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idhospedeiro" },
        ]
      },
    ]
  });
};
