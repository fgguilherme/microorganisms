const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _dominio = require("../controllers/dominio");

/////////DOMINIO

  // Create a new Tutorial
  router.post("/", _dominio.create);

  // Retrieve all _dominio
  router.get("/", _dominio.findAll);

  // Retrieve all published _dominio
  router.get("/search", _dominio.findAllParam);

  // Retrieve a single Tutorial with id
  router.get("/:id", _dominio.findOne);

  // Update a Tutorial with id
  router.put("/:id", _dominio.update);

  // Delete a Tutorial with id
  router.delete("/:id", _dominio.delete);

  // Delete all _dominio
  router.delete("/", _dominio.deleteAll);


  app.use('/api/dominio', router);

}