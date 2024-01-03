const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('habitat_veg', {
    idhabitat_veg: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    hospedeiro_idhospedeiro: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'hospedeiro',
        key: 'idhospedeiro'
      }
    },
    substrato_idsubstrato: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'substrato',
        key: 'idsubstrato'
      }
    },
    registro: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    codigo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    herbario: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'habitat_veg',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idhabitat_veg" },
        ]
      },
      {
        name: "idhabitat_veg_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idhabitat_veg" },
        ]
      },
      {
        name: "fk_habitat_veg_hospedeiro1_idx",
        using: "BTREE",
        fields: [
          { name: "hospedeiro_idhospedeiro" },
        ]
      },
      {
        name: "fk_habitat_veg_substrato1_idx",
        using: "BTREE",
        fields: [
          { name: "substrato_idsubstrato" },
        ]
      },
    ]
  });
};
