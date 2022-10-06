const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _metodo_preservacao = require("../controllers/metodo_preservacao");

/////////metodo_preservacao

  // Create a new metodo_preservacao
  router.post("/", _metodo_preservacao.create);

  // Retrieve all _metodo_preservacao
  router.get("/", _metodo_preservacao.findAll);

  // Retrieve all published _metodo_preservacao
  router.get("/search", _metodo_preservacao.findAllParam);

  // Retrieve a single metodo_preservacao with id
  router.get("/:id", _metodo_preservacao.findOne);

  // Update a metodo_preservacao with id
  router.put("/:id", _metodo_preservacao.update);

  // Delete a metodo_preservacao with id
  router.delete("/:id", _metodo_preservacao.delete);

  // Delete all _metodo_preservacao
  router.delete("/", _metodo_preservacao.deleteAll);


  app.use('/api/metodo_preservacao', router);

}