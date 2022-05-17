const db = require("../models");
const Element = db.models.referencia;
const models = db.models
const Op = db.Sequelize.Op;
// Create and Save a new Element
exports.create = (req, res) => {
  // Validate request
  if (!req.body.referencia) {
    res.status(400).send({
      message: "Content missing mandatory data!"
    });
    return;
  }

  // Create a Element
  const element = req.body;
  console.log(req.body)

  // Save Element in the database
  Element.create(element)
    .then(data => {
      res.send(data);
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
      where: {idreferencia: id }
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
      where: {idreferencia: id }
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
exports.findAllParam = async (req, res) => {
    var p = req.query;
    // console.log("===========================")
    // console.log(p)
    const mic = {"microorganismo_idmicroorganismo":p?.idmicroorganismo}
    const rep = {"repique_idrepique":p?.idrepique}
    // console.log("===========================")
    const repq_ref = await models.repique_has_referencia.findAll({ where: rep, include: [
      { model: models.referencia, as: "referencia_idreferencia_referencium"}
    ]})
    const taxa_ref = await models.microorganismo_has_referencia_taxa.findAll({ where: mic, include: [
      { model: models.referencia, as: "referencia_idreferencia_referencium"}
    ]})
    const temp_ref = await models.microorganismo_has_referencia_temp.findAll({ where: mic, include: [
      { model: models.referencia, as: "referencia_idreferencia_referencium"}
    ]})
    // console.log(repq_ref)
    // console.log(taxa_ref)
    // console.log(temp_ref)
    r = {
      "repq_ref":repq_ref,
      "taxa_ref":taxa_ref,
      "temp_ref":temp_ref
    }
    res.send(r);
};