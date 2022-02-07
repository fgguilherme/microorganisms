const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('relevo', {
    idrelevo: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    relevo: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "relevo_UNIQUE"
    }
  }, {
    sequelize,
    tableName: 'relevo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idrelevo" },
        ]
      },
      {
        name: "idrelevo_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idrelevo" },
        ]
      },
      {
        name: "relevo_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "relevo" },
        ]
      },
    ]
  });
};
