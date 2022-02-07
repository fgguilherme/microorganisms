const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('classe', {
    idclasse: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    classe: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "classe_UNIQUE"
    },
    filo_idfilo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'filo',
        key: 'idfilo'
      }
    }
  }, {
    sequelize,
    tableName: 'classe',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idclasse" },
        ]
      },
      {
        name: "idclasse_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idclasse" },
        ]
      },
      {
        name: "classe_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "classe" },
        ]
      },
      {
        name: "fk_classe_filo1_idx",
        using: "BTREE",
        fields: [
          { name: "filo_idfilo" },
        ]
      },
    ]
  });
};
