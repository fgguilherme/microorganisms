const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('filo', {
    idfilo: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    filo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    reino_idreino: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'reino',
        key: 'idreino'
      }
    }
  }, {
    sequelize,
    tableName: 'filo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idfilo" },
        ]
      },
      {
        name: "idfilo_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idfilo" },
        ]
      },
      {
        name: "fk_filo_reino1_idx",
        using: "BTREE",
        fields: [
          { name: "reino_idreino" },
        ]
      },
    ]
  });
};
