const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('habitat_ani', {
    idhabitat_ani: {
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
    sitio_idsitio: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'sitio',
        key: 'idsitio'
      }
    }
  }, {
    sequelize,
    tableName: 'habitat_ani',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idhabitat_ani" },
        ]
      },
      {
        name: "idhabitat_ani_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idhabitat_ani" },
        ]
      },
      {
        name: "fk_habitat_ani_hospedeiro1_idx",
        using: "BTREE",
        fields: [
          { name: "hospedeiro_idhospedeiro" },
        ]
      },
      {
        name: "fk_habitat_ani_sitio1_idx",
        using: "BTREE",
        fields: [
          { name: "sitio_idsitio" },
        ]
      },
    ]
  });
};
