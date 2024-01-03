const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('metodo_preservacao', {
    idmetodo_preservacao: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    metodo: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'metodo_preservacao',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idmetodo_preservacao" },
        ]
      },
      {
        name: "idmetodo_preservacao_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idmetodo_preservacao" },
        ]
      },
    ]
  });
};
