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
  if (!req.body.variedade_idvariedade || !req.body.status || !req.body.data_reg_col_orig || !req.body.cod_orig || !req.body.hist_orig || !req.body.pesquisador_coleta || !req.body.origem_geo || !req.body.lat || !req.body.lon || !req.body.datum || !req.body.precisao || !req.body.coment_orig || !req.body.data_isol || !req.body.pesquisador_isolamento || !req.body.info_isolamento || !req.body.data_ident || !req.body.pesquisador_ident || !req.body.data_preserv || !req.body.pesquisador_preserv || !req.body.coment_isolamento || !req.body.cor_colonia || !req.body.textura_idtextura || !req.body.borda_idborda || !req.body.relevo_idrelevo || !req.body.exudato_idexudato || !req.body.cor_exudato || !req.body.pigmento_idpigmento || !req.body.cor_pigmento || !req.body.temp_crescimento || !req.body.laboratorio_mol || !req.body.data_mol || !req.body.cod_mol || !req.body.sequencia_mol || !req.body.meta_mol || !req.body.habitat_idhabitat || !req.body.microorganismo_has_referencia_taxa || !req.body.carac_micromorfologica_idcarac_micromorfologica || !req.body.imagem_idimagem || !req.body.anexos_idanexos) {
    res.status(400).send({
      message: "Content missing mandatory data!"
    });
    return;
  }
  if (req.body.metodo_preservacao_idmetodo_preservacao) {

    const id = req.body.metodo_preservacao_idmetodo_preservacao;

    const metodo_preservacao = await ElementMetodo_preservacao.findByPk(id)

    if (metodo_preservacao == null) {
      res.status(400).send({
        message: "Invalid preservation method!"
      });
      return;
    }
  }
  if (req.body.carac_micromorfologica_idcarac_micromorfologica) {

    const id = req.body.carac_micromorfologica_idcarac_micromorfologica;

    const carac_micromorfologica = await ElementCarac_micromorfologica.findByPk(id)

    if (carac_micromorfologica == null) {
      res.status(400).send({
        message: "Invalid micromorphological feature!"
      });
      return;
    }
  }
  if (req.body.imagem_idimagem) {

    const id = req.body.imagem_idimagem;

    const imagem = await ElementImagem.findByPk(id)

    if (imagem == null) {
      res.status(400).send({
        message: "Invalid image!"
      });
      return;
    }
  }
  if (req.body.anexos_idanexos) {

    const id = req.body.anexos_idanexos;

    const anexos = await ElementAnexos.findByPk(id)

    if (anexos == null) {
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
  Element.create(element)
  .then(data => {

    console.log("------------");
    console.log(data.dataValues);
    console.log("------------");

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
    if (req.body.microorganismo_has_anexos) {
      console.log("has anexos");
      needWait++;
      var elementHasAnexos = {
        "microorganismo_has_anexos": req.body.microorganismo_has_anexos,
        "microorganismo_idmicroorganismo": data.dataValues.idmicroorganismo
      }
      ElementHas_anexos.create(elementHasAnexos).then(d => {
        console.log("done_anexos");
        needWait--;
        if (needWait == 0) {
          res.send(data);
        }
      })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "err005"
          });
        });
    };
    if (needWait == 0) {
      res.send(data);
    }
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