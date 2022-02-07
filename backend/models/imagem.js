const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('imagem', {
    idimagem: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    imagem: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'imagem',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idimagem" },
        ]
      },
      {
        name: "idimagem_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idimagem" },
        ]
      },
    ]
  });
};
