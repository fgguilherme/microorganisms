const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _unidade = require("../controllers/unidade");

/////////unidade

  // Create a new Tutorial
  router.post("/", _unidade.create);

  // Retrieve all _unidade
  router.get("/", _unidade.findAll);

  // Retrieve all published _unidade
  router.get("/search", _unidade.findAllParam);

  // Retrieve a single Tutorial with id
  router.get("/:id", _unidade.findOne);

  // Update a Tutorial with id
  router.put("/:id", _unidade.update);

  // Delete a Tutorial with id
  router.delete("/:id", _unidade.delete);

  // Delete all _unidade
  router.delete("/", _unidade.deleteAll);


  app.use('/api/unidade', router);

}