const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _exudato = require("../controllers/exudato");

/////////exudato

  // Create a new exudato
  router.post("/", _exudato.create);

  // Retrieve all _exudato
  router.get("/", _exudato.findAll);

  // Retrieve all published _exudato
  router.get("/search", _exudato.findAllParam);

  // Retrieve a single exudato with id
  router.get("/:id", _exudato.findOne);

  // Update a exudato with id
  router.put("/:id", _exudato.update);

  // Delete a exudato with id
  router.delete("/:id", _exudato.delete);

  // Delete all _exudato
  router.delete("/", _exudato.deleteAll);


  app.use('/exudato', router);

}