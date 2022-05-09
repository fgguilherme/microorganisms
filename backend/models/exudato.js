const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('exudato', {
    idexudato: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    exudato: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'exudato',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idexudato" },
        ]
      },
      {
        name: "idexudato_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idexudato" },
        ]
      },
    ]
  });
};
