const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _microorganismo_has_carac_micromorfologica = require("../controllers/microorganismo_has_carac_micromorfologica");

  // Create a new microorganismo_has_carac_micromorfologica
  router.post("/", _microorganismo_has_carac_micromorfologica.create);

  // Retrieve all _microorganismo_has_carac_micromorfologica
  router.get("/", _microorganismo_has_carac_micromorfologica.findAll);

  // Retrieve all published _microorganismo_has_carac_micromorfologica
  router.get("/search", _microorganismo_has_carac_micromorfologica.findAllParam);

  // Retrieve a single microorganismo_has_carac_micromorfologica with id
  router.get("/:id", _microorganismo_has_carac_micromorfologica.findOne);

  // Update a microorganismo_has_carac_micromorfologica with id
  router.put("/:id", _microorganismo_has_carac_micromorfologica.update);

  // Delete a microorganismo_has_carac_micromorfologica with id
  router.delete("/:id", _microorganismo_has_carac_micromorfologica.delete);

  // Delete all _microorganismo_has_carac_micromorfologica
  router.delete("/", _microorganismo_has_carac_micromorfologica.deleteAll);


  app.use('/microorganismo_has_carac_micromorfologica', router);

}