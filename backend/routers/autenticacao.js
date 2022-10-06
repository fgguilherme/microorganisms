const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _autenticacao = require("../controllers/autenticacao");

  // Create a new autenticacao
  router.post("/", _autenticacao.create);

  // Retrieve all _autenticacao
  router.get("/", _autenticacao.findAll);

  // Retrieve all published _autenticacao
  router.get("/search", _autenticacao.findAllParam);

  // Retrieve a single autenticacao with id
  router.get("/:id", _autenticacao.findOne);

  // Update a autenticacao with id
  router.put("/:id", _autenticacao.update);

  // Delete a autenticacao with id
  router.delete("/:id", _autenticacao.delete);

  // Delete all _autenticacao
  router.delete("/", _autenticacao.deleteAll);


  app.use('/api/autenticacao', router);

}