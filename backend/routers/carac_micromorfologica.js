const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _carac_micromorfologica = require("../controllers/carac_micromorfologica");

/////////carac

  // Create a new carac_micromorfologica
  router.post("/", _carac_micromorfologica.create);

  // Retrieve all carac_micromorfologica
  router.get("/", _carac_micromorfologica.findAll);

  // Retrieve all published carac_micromorfologica
  router.get("/search", _carac_micromorfologica.findAllParam);

  // Retrieve a single carac_micromorfologica with id
  router.get("/:id", _carac_micromorfologica.findOne);

  // Update a carac_micromorfologica with id
  router.put("/:id", _carac_micromorfologica.update);

  // Delete a carac_micromorfologica with id
  router.delete("/:id", _carac_micromorfologica.delete);

  // Delete all carac_micromorfologica
  router.delete("/", _carac_micromorfologica.deleteAll);


  app.use('/carac_micromorfologica', router);

}