const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _genero = require("../controllers/genero");

/////////genero

  // Create a new Tutorial
  router.post("/", _genero.create);

  // Retrieve all _genero
  router.get("/", _genero.findAll);

  // Retrieve all published _genero
  router.get("/search", _genero.findAllParam);

  // Retrieve a single Tutorial with id
  router.get("/:id", _genero.findOne);

  // Update a Tutorial with id
  router.put("/:id", _genero.update);

  // Delete a Tutorial with id
  router.delete("/:id", _genero.delete);

  // Delete all _genero
  router.delete("/", _genero.deleteAll);


  app.use('/api/genero', router);

}