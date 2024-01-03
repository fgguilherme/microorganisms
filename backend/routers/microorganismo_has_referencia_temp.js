const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _microorganismo_has_referencia_temp = require("../controllers/microorganismo_has_referencia_temp");

  // Create a new microorganismo_has_referencia_temp
  router.post("/", _microorganismo_has_referencia_temp.create);

  // Retrieve all _microorganismo_has_referencia_temp
  router.get("/", _microorganismo_has_referencia_temp.findAll);

  // Retrieve all published _microorganismo_has_referencia_temp
  router.get("/search", _microorganismo_has_referencia_temp.findAllParam);

  // Retrieve a single microorganismo_has_referencia_temp with id
  router.get("/:id", _microorganismo_has_referencia_temp.findOne);

  // Update a microorganismo_has_referencia_temp with id
  router.put("/:id", _microorganismo_has_referencia_temp.update);

  // Delete a microorganismo_has_referencia_temp with id
  router.delete("/:id", _microorganismo_has_referencia_temp.delete);

  // Delete all _microorganismo_has_referencia_temp
  router.delete("/", _microorganismo_has_referencia_temp.deleteAll);


  app.use('/microorganismo_has_referencia_temp', router);

}