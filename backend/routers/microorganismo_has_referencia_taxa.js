const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _microorganismo_has_referencia_taxa = require("../controllers/microorganismo_has_referencia_taxa");

  // Create a new microorganismo_has_referencia_taxa
  router.post("/", _microorganismo_has_referencia_taxa.create);

  // Retrieve all _microorganismo_has_referencia_taxa
  router.get("/", _microorganismo_has_referencia_taxa.findAll);

  // Retrieve all published _microorganismo_has_referencia_taxa
  router.get("/search", _microorganismo_has_referencia_taxa.findAllParam);

  // Retrieve a single microorganismo_has_referencia_taxa with id
  router.get("/:id", _microorganismo_has_referencia_taxa.findOne);

  // Update a microorganismo_has_referencia_taxa with id
  router.put("/:id", _microorganismo_has_referencia_taxa.update);

  // Delete a microorganismo_has_referencia_taxa with id
  router.delete("/:id", _microorganismo_has_referencia_taxa.delete);

  // Delete all _microorganismo_has_referencia_taxa
  router.delete("/", _microorganismo_has_referencia_taxa.deleteAll);


  app.use('/api/microorganismo_has_referencia_taxa', router);

}