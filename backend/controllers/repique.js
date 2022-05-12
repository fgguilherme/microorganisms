const db = require("../models");
const Element = db.models.repique;
const models = db.models
const ElementreRerencia = db.models.referencia;
const ElementreHasRerencia = db.models.repique_has_referencia;
const ElementreImagem = db.models.imagem;
const ElementreHasImagem = db.models.repique_has_imagem;
const Op = db.Sequelize.Op;
// Create and Save a new Element
exports.create = async (req, res) => {
  // Validate request
  if (
    !req.body.microorganismo_idmicroorganismo ||
    !req.body.unidade_idunidade ||
    !req.body.grupo_pesquisa_idgrupo_pesquisa ||
    !req.body.comentarios ||
    !req.body.disponivel ||
    !req.body.posicao_idposicao ||
    !req.body.data_issue ||
    !req.body.referencia_idreferencia ||
    !req.body.metodo_preservacao_idmetodo_preservacao ||
    !req.body.pesquisador_preserv ||
    !req.body.imagem_idimagem
  ) {
    res.status(400).send({
      message: "Content missing mandatory data!",
    });
    return;
  }
  if (req.body.idreferencia) {
    const id = req.body.idreferencia;
    console.log(id);
    const referencia = await ElementreRerencia.findByPk(id);
    console.log(referencia);
    if (referencia == null) {
      res.status(400).send({
        message: "invalid Reference!",
      });
      return;
    }
  }
  if (req.body.idimagem) {
    const id = req.body.idimagem;

    const imagem = await ElementreImagem.findByPk(id);

    if (imagem == null) {
      res.status(400).send({
        message: "invalid Imagem!",
      });
      return;
    }
  }
  // Create a Element
  const element = req.body;
  var needWait = 0;
  console.log(req.body);

  // Save Element in the database
  Element.create(element)
    .then((data) => {
      console.log("*********");
      console.log(data.dataValues);
      console.log("*********");

      if (req.body.idreferencia) {
        console.log("has_referencia");
        needWait++;
        var elementreHasRerencia = {
          "idreferencia": req.body.idreferencia,
          "repique_idrepique": data.dataValues.idrepique,
        };
        ElementreHasRerencia.create(elementreHasRerencia)
          .then((d) => {
            console.log("done_referencia");
            needWait--;
            if (needWait == 0) {
              res.send(data);
            }
          })
          .catch((err) => {
            res.status(500).send({
              message: err.message || "err001",
            });
          });
      }
      if (req.body.idimagem) {
        console.log("has_imagem");
        needWait++;
        var elementreHasImagem = {
         "idimagem": req.body.idimagem,
          "repique_idrepique": data.dataValues.idrepique
        };
        ElementreHasImagem.create(elementreHasImagem)
          .then((d) => {
            console.log("done_imagem");
            needWait--;
            if (needWait == 0) {
              res.send(data);
            }
          })
          .catch((err) => {
            res.status(500).send({
              message: err.message || "err002",
            });
          });
      }
      if (needWait == 0) {
        res.send(data);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Element.",
      });
    });
};

// Retrieve all Elements from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
  Element.findAll({ where: condition, include: [
    { model: models.posicao, as: "posicao_idposicao_posicao",  include: { 
      model: models.lote, as: "lote_idlote_lote", include:{
        model: models.prateleira, as: "prateleira_idprateleira_prateleira", include: {
          model: models.armario, as: "armario_idarmario_armario", include: {
            model: models.sub_colecao, as: "sub_colecao_idsub_colecao_sub_colecao"
          }
        }
      }
    }
    },
    {model:  models.unidade, as:"unidade_idunidade_unidade"},
    {model:  models.pesquisador, as:"pesquisador_preserv_pesquisador"},
    {model:  models.grupo_pesquisa, as:"grupo_pesquisa_idgrupo_pesquisa_grupo_pesquisa"},
    { model: models.microorganismo, as: "microorganismo_idmicroorganismo_microorganismo",  include: [
      {model:  models.pesquisador, as:"pesquisador_coleta_pesquisador"},
      {model:  models.pesquisador, as:"pesquisador_isolamento_pesquisador"},
      {model:  models.pesquisador, as:"pesquisador_ident_pesquisador"},
      {model:  models.cor, as:"cor_colonia_cor"},
      {model:  models.cor, as:"cor_exudato_cor"},
      {model:  models.cor, as:"cor_pigmento_cor"},
      {model:  models.borda, as:"borda_idborda_borda"},
      {model:  models.textura, as:"textura_idtextura_textura"},
      {model:  models.relevo, as:"relevo_idrelevo_relevo"},
      {model:  models.exudato, as:"exudato_idexudato_exudato"},
      {model:  models.pigmento, as:"pigmento_idpigmento_pigmento"},
      {model:  models.laboratorio, as:"laboratorio_mol_laboratorio"},
      {model:  models.habitat, as:"habitat_idhabitat_habitat",  include: [
        {model:  models.habitat_veg, as:"habitat_veg_idhabitat_veg_habitat_veg",  include: [
          {model:  models.hospedeiro, as:"hospedeiro_idhospedeiro_hospedeiro"},
          {model:  models.substrato, as:"substrato_idsubstrato_substrato"}
        ]},
        {model:  models.habitat_ani, as:"habitat_ani_idhabitat_ani_habitat_ani",  include: [
          {model:  models.hospedeiro, as:"hospedeiro_idhospedeiro_hospedeiro"},
          {model:  models.sitio, as:"sitio_idsitio_sitio"}
        ]},
      ]},
      {model: models.variedade, as: "variedade_idvariedade_variedade",  include: [
        { model: models.sub_especie, as: "sub_especie_idsub_especie_sub_especie",  include: { 
          model: models.especie, as: "especie_idespecie_especie", include:{
            model: models.genero, as: "genero_idgenero_genero", include: {
              model: models.familia, as: "familia_idfamilia_familium", include: {
                model: models.ordem, as: "ordem_idordem_ordem", include: {
                  model: models.classe, as: "classe_idclasse_classe", include: {
                    model: models.filo, as: "filo_idfilo_filo", include: {
                      model: models.reino, as: "reino_idreino_reino", include: {
                        model: models.dominio, as: "dominio_iddominio_dominio"
                      }
                    }
                  }
                }
              }
            }
          }
        }
        }

      ]},
    ]
  }
  ]})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Elements.",
      });
    });
};

// Find a single Element with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Element.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Element with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Element with id=" + id,
      });
    });
};

// Update a Element by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Element.update(req.body, {
    where: { idrepique: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Element was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Element with id=${id}. Maybe Element was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Element with id=" + id,
      });
    });
};

// Delete a Element with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Element.destroy({
    where: { idrepique: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Element was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Element with id=${id}. Maybe Element was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Element with id=" + id,
      });
    });
};

// Delete all Elements from the database.
exports.deleteAll = (req, res) => {
  Element.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Elements were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Elements.",
      });
    });
};

// Find all published Elements
exports.findAllParam = (req, res) => {
  var p = req.query;
  Element.findAll({ where: p })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Elements.",
      });
    });
};
