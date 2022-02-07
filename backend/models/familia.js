const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('familia', {
    idfamilia: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    familia: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    ordem_idordem: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'ordem',
        key: 'idordem'
      }
    }
  }, {
    sequelize,
    tableName: 'familia',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idfamilia" },
        ]
      },
      {
        name: "idfamilia_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idfamilia" },
        ]
      },
      {
        name: "fk_familia_ordem1_idx",
        using: "BTREE",
        fields: [
          { name: "ordem_idordem" },
        ]
      },
    ]
  });
};
