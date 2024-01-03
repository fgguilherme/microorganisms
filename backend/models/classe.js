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
      allowNull: false
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
        name: "fk_classe_filo1_idx",
        using: "BTREE",
        fields: [
          { name: "filo_idfilo" },
        ]
      },
    ]
  });
};
