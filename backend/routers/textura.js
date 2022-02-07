const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _textura = require("../controllers/textura");

/////////textura

  // Create a new Tutorial
  router.post("/", _textura.create);

  // Retrieve all _textura
  router.get("/", _textura.findAll);

  // Retrieve all published _textura
  router.get("/search", _textura.findAllParam);

  // Retrieve a single Tutorial with id
  router.get("/:id", _textura.findOne);

  // Update a Tutorial with id
  router.put("/:id", _textura.update);

  // Delete a Tutorial with id
  router.delete("/:id", _textura.delete);

  // Delete all _textura
  router.delete("/", _textura.deleteAll);


  app.use('/api/textura', router);

}