const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('microorganismo', {
    idmicroorganismo: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    variedade_idvariedade: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'variedade',
        key: 'idvariedade'
      }
    },
    status: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    referencia_taxa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'referencia',
        key: 'idreferencia'
      }
    },
    data_reg_col_orig: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cod_orig: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    hist_orig: {
      type: DataTypes.STRING(145),
      allowNull: true
    },
    pesquisador_coleta: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'pesquisador',
        key: 'idpesquisador'
      }
    },
    origem_geo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    lat: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    lon: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    datum: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    precisao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    coment_orig: {
      type: DataTypes.STRING(245),
      allowNull: true
    },
    data_isol: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    pesquisador_isolamento: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'pesquisador',
        key: 'idpesquisador'
      }
    },
    info_isolamento: {
      type: DataTypes.STRING(145),
      allowNull: true
    },
    data_ident: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    pesquisador_ident: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'pesquisador',
        key: 'idpesquisador'
      }
    },
    data_preserv: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    pesquisador_preserv: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'pesquisador',
        key: 'idpesquisador'
      }
    },
    coment_isolamento: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    cor_colonia: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'cor',
        key: 'idcor'
      }
    },
    textura_idtextura: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'textura',
        key: 'idtextura'
      }
    },
    borda_idborda: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'borda',
        key: 'idborda'
      }
    },
    relevo_idrelevo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'relevo',
        key: 'idrelevo'
      }
    },
    exudato_idexudato: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'exudato',
        key: 'idexudato'
      }
    },
    cor_exudato: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'cor',
        key: 'idcor'
      }
    },
    pigmento_idpigmento: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'pigmento',
        key: 'idpigmento'
      }
    },
    cor_pigmento: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'cor',
        key: 'idcor'
      }
    },
    temp_crescimento: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    referencia_temp: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'referencia',
        key: 'idreferencia'
      }
    },
    laboratorio_mol: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'laboratorio',
        key: 'idlaboratorio'
      }
    },
    data_mol: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cod_mol: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    sequencia_mol: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    meta_mol: {
      type: DataTypes.STRING(145),
      allowNull: true
    },
    habitat_idhabitat: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'habitat',
        key: 'idhabitat'
      }
    }
  }, {
    sequelize,
    tableName: 'microorganismo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idmicroorganismo" },
        ]
      },
      {
        name: "idmicroorganismo_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idmicroorganismo" },
        ]
      },
      {
        name: "fk_microorganismo_variedade1_idx",
        using: "BTREE",
        fields: [
          { name: "variedade_idvariedade" },
        ]
      },
      {
        name: "fk_microorganismo_referencia1_idx",
        using: "BTREE",
        fields: [
          { name: "referencia_taxa" },
        ]
      },
      {
        name: "fk_microorganismo_pesquisador1_idx",
        using: "BTREE",
        fields: [
          { name: "pesquisador_coleta" },
        ]
      },
      {
        name: "fk_microorganismo_pesquisador2_idx",
        using: "BTREE",
        fields: [
          { name: "pesquisador_isolamento" },
        ]
      },
      {
        name: "fk_microorganismo_pesquisador3_idx",
        using: "BTREE",
        fields: [
          { name: "pesquisador_ident" },
        ]
      },
      {
        name: "fk_microorganismo_pesquisador4_idx",
        using: "BTREE",
        fields: [
          { name: "pesquisador_preserv" },
        ]
      },
      {
        name: "fk_microorganismo_cor1_idx",
        using: "BTREE",
        fields: [
          { name: "cor_colonia" },
        ]
      },
      {
        name: "fk_microorganismo_textura1_idx",
        using: "BTREE",
        fields: [
          { name: "textura_idtextura" },
        ]
      },
      {
        name: "fk_microorganismo_borda1_idx",
        using: "BTREE",
        fields: [
          { name: "borda_idborda" },
        ]
      },
      {
        name: "fk_microorganismo_relevo1_idx",
        using: "BTREE",
        fields: [
          { name: "relevo_idrelevo" },
        ]
      },
      {
        name: "fk_microorganismo_exudato1_idx",
        using: "BTREE",
        fields: [
          { name: "exudato_idexudato" },
        ]
      },
      {
        name: "fk_microorganismo_cor2_idx",
        using: "BTREE",
        fields: [
          { name: "cor_exudato" },
        ]
      },
      {
        name: "fk_microorganismo_pigmento1_idx",
        using: "BTREE",
        fields: [
          { name: "pigmento_idpigmento" },
        ]
      },
      {
        name: "fk_microorganismo_cor3_idx",
        using: "BTREE",
        fields: [
          { name: "cor_pigmento" },
        ]
      },
      {
        name: "fk_microorganismo_referencia2_idx",
        using: "BTREE",
        fields: [
          { name: "referencia_temp" },
        ]
      },
      {
        name: "fk_microorganismo_laboratorio1_idx",
        using: "BTREE",
        fields: [
          { name: "laboratorio_mol" },
        ]
      },
      {
        name: "fk_microorganismo_habitat1_idx",
        using: "BTREE",
        fields: [
          { name: "habitat_idhabitat" },
        ]
      },
    ]
  });
};
