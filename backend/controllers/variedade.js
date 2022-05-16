const db = require("../models");
const Element = db.models.variedade;
const Op = db.Sequelize.Op;
const models = db.models
// Create and Save a new Element
exports.create = (req, res) => {
  // Validate request
  if (!req.body.variedade || !req.body.autor || !req.body.sub_especie_idsub_especie) {
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
    Element.findByPk(id, {include: [
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

    ]})
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
      where: {idvariedade: id }
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
      where: {idvariedade: id }
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