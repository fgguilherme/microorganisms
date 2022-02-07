const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _exudato = require("../controllers/exudato");

/////////exudato

  // Create a new Tutorial
  router.post("/", _exudato.create);

  // Retrieve all _exudato
  router.get("/", _exudato.findAll);

  // Retrieve all published _exudato
  router.get("/search", _exudato.findAllParam);

  // Retrieve a single Tutorial with id
  router.get("/:id", _exudato.findOne);

  // Update a Tutorial with id
  router.put("/:id", _exudato.update);

  // Delete a Tutorial with id
  router.delete("/:id", _exudato.delete);

  // Delete all _exudato
  router.delete("/", _exudato.deleteAll);


  app.use('/api/exudato', router);

}