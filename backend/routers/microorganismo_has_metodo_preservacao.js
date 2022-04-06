const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _microorganismo_has_metodo_preservacao = require("../controllers/microorganismo_has_metodo_preservacao");

  // Create a new microorganismo_has_metodo_preservacao
  router.post("/", _microorganismo_has_metodo_preservacao.create);

  // Retrieve all _microorganismo_has_metodo_preservacao
  router.get("/", _microorganismo_has_metodo_preservacao.findAll);

  // Retrieve all published _microorganismo_has_metodo_preservacao
  router.get("/search", _microorganismo_has_metodo_preservacao.findAllParam);

  // Retrieve a single microorganismo_has_metodo_preservacao with id
  router.get("/:id", _microorganismo_has_metodo_preservacao.findOne);

  // Update a microorganismo_has_metodo_preservacao with id
  router.put("/:id", _microorganismo_has_metodo_preservacao.update);

  // Delete a microorganismo_has_metodo_preservacao with id
  router.delete("/:id", _microorganismo_has_metodo_preservacao.delete);

  // Delete all _microorganismo_has_metodo_preservacao
  router.delete("/", _microorganismo_has_metodo_preservacao.deleteAll);


  app.use('/api/microorganismo_has_metodo_preservacao', router);

}