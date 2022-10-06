const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _doacao = require("../controllers/doacao");

  // Create a new doacao
  router.post("/", _doacao.create);

  // Retrieve all _doacao
  router.get("/", _doacao.findAll);

  // Retrieve all published _doacao
  router.get("/search", _doacao.findAllParam);

  // Retrieve a single doacao with id
  router.get("/:id", _doacao.findOne);

  // Update a doacao with id
  router.put("/:id", _doacao.update);

  // Delete a doacao with id
  router.delete("/:id", _doacao.delete);

  // Delete all _doacao
  router.delete("/", _doacao.deleteAll);


  app.use('/api/doacao', router);

}