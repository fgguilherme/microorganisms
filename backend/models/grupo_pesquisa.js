const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupo_pesquisa', {
    idgrupo_pesquisa: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    grupo: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'grupo_pesquisa',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idgrupo_pesquisa" },
        ]
      },
      {
        name: "idgrupo_pesquisa_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idgrupo_pesquisa" },
        ]
      },
    ]
  });
};
