const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prateleira', {
    idprateleira: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    prateleira: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    armario_idarmario: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'armario',
        key: 'idarmario'
      }
    }
  }, {
    sequelize,
    tableName: 'prateleira',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idprateleira" },
        ]
      },
      {
        name: "idprateleira_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idprateleira" },
        ]
      },
      {
        name: "fk_prateleira_armario1_idx",
        using: "BTREE",
        fields: [
          { name: "armario_idarmario" },
        ]
      },
    ]
  });
};
