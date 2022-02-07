const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('repique', {
    idrepique: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    microorganismo_idmicroorganismo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'microorganismo',
        key: 'idmicroorganismo'
      }
    },
    unidade_idunidade: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'unidade',
        key: 'idunidade'
      }
    },
    grupo_pesquisa_idgrupo_pesquisa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'grupo_pesquisa',
        key: 'idgrupo_pesquisa'
      }
    },
    comentarios: {
      type: DataTypes.STRING(145),
      allowNull: true
    },
    disponivel: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    posicao_idposicao: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'posicao',
        key: 'idposicao'
      }
    },
    data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'repique',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idrepique" },
        ]
      },
      {
        name: "idrepique_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idrepique" },
        ]
      },
      {
        name: "fk_repique_microorganismo1_idx",
        using: "BTREE",
        fields: [
          { name: "microorganismo_idmicroorganismo" },
        ]
      },
      {
        name: "fk_repique_unidade1_idx",
        using: "BTREE",
        fields: [
          { name: "unidade_idunidade" },
        ]
      },
      {
        name: "fk_repique_grupo_pesquisa1_idx",
        using: "BTREE",
        fields: [
          { name: "grupo_pesquisa_idgrupo_pesquisa" },
        ]
      },
      {
        name: "fk_repique_posicao1_idx",
        using: "BTREE",
        fields: [
          { name: "posicao_idposicao" },
        ]
      },
    ]
  });
};
