const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _microorganismo_has_anexos = require("../controllers/microorganismo_has_anexos");

  // Create a new microorganismo_has_anexos
  router.post("/", _microorganismo_has_anexos.create);

  // Retrieve all _microorganismo_has_anexos
  router.get("/", _microorganismo_has_anexos.findAll);

  // Retrieve all published _microorganismo_has_anexos
  router.get("/search", _microorganismo_has_anexos.findAllParam);

  // Retrieve a single microorganismo_has_anexos with id
  router.get("/:id", _microorganismo_has_anexos.findOne);

  // Update a microorganismo_has_anexos with id
  router.put("/:id", _microorganismo_has_anexos.update);

  // Delete a microorganismo_has_anexos with id
  router.delete("/:id", _microorganismo_has_anexos.delete);

  // Delete all _microorganismo_has_anexos
  router.delete("/", _microorganismo_has_anexos.deleteAll);


  app.use('/microorganismo_has_anexos', router);

}