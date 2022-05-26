const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _dominio = require("../controllers/dominio");

/////////DOMINIO

  // Create a new dominio
  router.post("/", _dominio.create);

  // Retrieve all _dominio
  router.get("/", _dominio.findAll);

  // Retrieve all published _dominio
  router.get("/search", _dominio.findAllParam);

  // Retrieve a single dominio with id
  router.get("/:id", _dominio.findOne);

  // Update a dominio with id
  router.put("/:id", _dominio.update);

  // Delete a dominio with id
  router.delete("/:id", _dominio.delete);

  // Delete all _dominio
  router.delete("/", _dominio.deleteAll);


  app.use('/dominio', router);

}