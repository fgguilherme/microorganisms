const db = require("../models");
const Element = db.models.microorganismo;

const ElementHasMetodo_preservacao = db.models.microorganismo_has_metodo_preservacao;
const ElementMetodo_preservacao = db.models.metodo_preservacao;
const ElementHasCarac_micromorfologica = db.models.microorganismo_has_carac_micromorfologica;
const ElementCarac_micromorfologica = db.models.carac_micromorfologica;
const ElementHasImagem_macro = db.models.microorganismo_has_imagem_macro;
const ElementImagem = db.models.imagem;
const ElementHasImagem_micro = db.models.microorganismo_has_imagem_micro;
const ElementHas_anexos = db.models.microorganismo_has_anexos;
const ElementAnexos = db.models.anexos;

const Op = db.Sequelize.Op;
// Create and Save a new Element
exports.create = async (req, res) => {
  // Validate request
  if (!req.bady.idmicroorganismo || !req.bady.variedade_idvariedade || !req.bady.status || !req.bady.referencia_taxa || !req.bady.data_reg_col_orig || !req.bady.cod_orig || !req.bady.hist_orig || !req.bady.pesquisador_coleta || !req.bady.origem_geo || !req.bady.lat || !req.bady.lon || !req.bady.datum || !req.bady.precisao || !req.bady.coment_orig || !req.bady.data_isol || !req.bady.pesquisador_isolamento || !req.bady.info_isolamento || !req.bady.data_ident || !req.bady.pesquisador_ident || !req.bady.data_preserv || !req.bady.pesquisador_preserv || !req.bady.coment_isolamento || !req.bady.cor_colonia || !req.bady.textura_idtextura || !req.bady.borda_idborda || !req.bady.relevo_idrelevo || !req.bady.exudato_idexudato || !req.bady.cor_exudato || !req.bady.pigmento_idpigmento || !req.bady.cor_pigmento || !req.bady.temp_crescimento || !req.bady.referencia_temp || !req.bady.laboratorio_mol || !req.bady.data_mol || !req.bady.cod_mol || !req.bady.sequencia_mol || !req.bady.meta_mol || !req.bady.habitat_idhabitat || !req.bady.metodo_preservacao_idmetodo_preservacao || !req.bady.carac_micromorfologica_idcarac_micromorfologica || !req.bady.imagem_idimagem || !req.bady.anexos_idanexos) {
    res.status(400).send({
      message: "Content missing mandatory data!"
    });
    return;
  }
  if (req.bady.metodo_preservacao_idmetodo_preservacao) {

    const id = req.bady.metodo_preservacao_idmetodo_preservacao;

    const metodo_preservacao = await ElementMetodo_preservacao.findByPk(id)

    if (metodo_preservacao == null) {
      res.status(400).send({
        message: "Invalid preservation method!"
      });
      return;
    }
  }
  if (req.bady.carac_micromorfologica_idcarac_micromorfologica) {

    const id = req.bady.carac_micromorfologica_idcarac_micromorfologica;

    const carac_micromorfologica = await ElementCarac_micromorfologica.findByPk(id)

    if (carac_micromorfologica == null) {
      res.status(400).send({
        message: "Invalid micromorphological feature!"
      });
      return;
    }
  }
  if (req.bady.imagem_idimagem) {

    const id = req.bady.imagem_idimagem;

    const imagem = await ElementImagem.findByPk(id)

    if (imagem == null) {
      res.status(400).send({
        message: "Invalid image!"
      });
      return;
    }
  }
  if (req.bady.anexos_idanexos) {

    const id = req.bady.anexos_idanexos;

    const anexos = await ElementAnexos.findByPk(id)

    if (imagem == null) {
      res.status(400).send({
        message: "Invalid attachments!"
      });
      return;
    }
  }

  // Create a Element
  const element = req.body;
  var needWait = 0;
  console.log(req.body)

  // Save Element in the database
  Element.create(element).then(data => {

    console.log("-----------");
    console.log(data.dataValues);
    console.log("-----------");

    if (req.body.metodo_preservacao_idmetodo_preservacao) {
      console.log("has Metodo_preservacao");
      needWait++;
      var elementHasMetodo_preservacao = {
        "metodo_preservacao_idmetodo_preservacao": req.body.metodo_preservacao_idmetodo_preservacao,
        "microorganismo_idmicroorganismo": data.dataValues.idmicroorganismo
      }
      ElementHasMetodo_preservacao.create(elementHasMetodo_preservacao)
        .then(d => {
          console.log("done_Metodo_preservacao");
          needWait--;
          if (needWait == 0) {
            res.send(data);
          }
      })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "err001"
          });
        });
    };
    if (req.body.carac_micromorfologica_idcarac_micromorfologica) {
      console.log("has Carac_micromorfologica");
      needWait++;
      var elementHasCarac_micromorfologica = {
        "carac_micromorfologica_idcarac_micromorfologica": req.body.carac_micromorfologica_idcarac_micromorfologica,
        "microorganismo_idmicroorganismo": data.dataValues.idmicroorganismo
      }
      ElementHasCarac_micromorfologica.create(elementHasCarac_micromorfologica).then(d => {
        console.log("done_Carac_micromorfologica");
        needWait--;
        if (needWait == 0) {
          res.send(data);
        }
      })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "err002"
          });
        });
    };
    if (req.body.microorganismo_has_imagem_macro) {
      console.log("has imagem_macro");
      needWait++;
      var elementHasImagem_macro = {
        "microorganismo_has_imagem_macro": req.body.microorganismo_has_imagem_macro,
        "microorganismo_idmicroorganismo": data.dataValues.idmicroorganismo
      }
      ElementHasImagem_macro.create(elementHasImagem_macro).then(d => {
        console.log("done_imagem_macro");
        needWait--;
        if (needWait == 0) {
          res.send(data);
        }
      })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "err003"
          });
        });
    };
    if (req.body.microorganismo_has_imagem_micro) {
      console.log("has imagem_micro");
      needWait++;
      var elementHasImagem_micro = {
        "microorganismo_has_imagem_micro": req.body.microorganismo_has_imagem_micro,
        "microorganismo_idmicroorganismo": data.dataValues.idmicroorganismo
      }
      ElementHasImagem_micro.create(elementHasImagem_micro).then(d => {
        console.log("done_imagem_macro");
        needWait--;
        if (needWait == 0) {
          res.send(data);
        }
      })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "err004"
          });
        });
    };
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Element."
    });
  });
};

// Retrieve all Elements from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Element.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Elements."
      });
    });
};

// Find a single Element with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Element.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Element with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Element with id=" + id
      });
    });
};

// Update a Element by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Element.update(req.body, {
    where: { idmicroorganismo: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Element was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Element with id=${id}. Maybe Element was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Element with id=" + id
      });
    });
};

// Delete a Element with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Element.destroy({
    where: { idmicroorganismo: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Element was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Element with id=${id}. Maybe Element was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Element with id=" + id
      });
    });
};

// Delete all Elements from the database.
exports.deleteAll = (req, res) => {
  Element.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Elements were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Elements."
      });
    });
};

// Find all published Elements
exports.findAllParam = (req, res) => {
  var p = req.query;
  Element.findAll({ where: p })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Elements."
      });
    });
};