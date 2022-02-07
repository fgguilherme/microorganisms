const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('textura', {
    idtextura: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    textura: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "textura_UNIQUE"
    }
  }, {
    sequelize,
    tableName: 'textura',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idtextura" },
        ]
      },
      {
        name: "idtextura_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idtextura" },
        ]
      },
      {
        name: "textura_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "textura" },
        ]
      },
    ]
  });
};
