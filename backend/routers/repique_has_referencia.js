const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _repique_has_referencia = require("../controllers/repique_has_referencia");

  // Create a new repique_has_referencia
  router.post("/", _repique_has_referencia.create);

  // Retrieve all _repique_has_referencia
  router.get("/", _repique_has_referencia.findAll);

  // Retrieve all published _repique_has_referencia
  router.get("/search", _repique_has_referencia.findAllParam);

  // Retrieve a single repique_has_referencia with id
  router.get("/:id", _repique_has_referencia.findOne);

  // Update a repique_has_referencia with id
  router.put("/:id", _repique_has_referencia.update);

  // Delete a repique_has_referencia with id
  router.delete("/:id", _repique_has_referencia.delete);

  // Delete all _repique_has_referencia
  router.delete("/", _repique_has_referencia.deleteAll);


  app.use('/repique_has_referencia', router);

}