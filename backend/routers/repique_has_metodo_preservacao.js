const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _repique_has_metodo_preservacao = require("../controllers/repique_has_metodo_preservacao");

  // Create a new repique_has_metodo_preservacao
  router.post("/", _repique_has_metodo_preservacao.create);

  // Retrieve all _repique_has_metodo_preservacao
  router.get("/", _repique_has_metodo_preservacao.findAll);

  // Retrieve all published _repique_has_metodo_preservacao
  router.get("/search", _repique_has_metodo_preservacao.findAllParam);

  // Retrieve a single repique_has_metodo_preservacao with id
  router.get("/:id", _repique_has_metodo_preservacao.findOne);

  // Update a repique_has_metodo_preservacao with id
  router.put("/:id", _repique_has_metodo_preservacao.update);

  // Delete a repique_has_metodo_preservacao with id
  router.delete("/:id", _repique_has_metodo_preservacao.delete);

  // Delete all _repique_has_metodo_preservacao
  router.delete("/", _repique_has_metodo_preservacao.deleteAll);


  app.use('/repique_has_metodo_preservacao', router);

}