const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('borda', {
    idborda: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    borda: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'borda',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idborda" },
        ]
      },
      {
        name: "idborda_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idborda" },
        ]
      },
    ]
  });
};
