const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('habitat', {
    idhabitat: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    habitat: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    habitat_veg_idhabitat_veg: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'habitat_veg',
        key: 'idhabitat_veg'
      }
    },
    habitat_ani_idhabitat_ani: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'habitat_ani',
        key: 'idhabitat_ani'
      }
    },
    info: {
      type: DataTypes.STRING(144),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'habitat',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idhabitat" },
        ]
      },
      {
        name: "idsubstrato_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idhabitat" },
        ]
      },
      {
        name: "fk_habitat_habitat_veg1_idx",
        using: "BTREE",
        fields: [
          { name: "habitat_veg_idhabitat_veg" },
        ]
      },
      {
        name: "fk_habitat_habitat_ani1_idx",
        using: "BTREE",
        fields: [
          { name: "habitat_ani_idhabitat_ani" },
        ]
      },
    ]
  });
};
