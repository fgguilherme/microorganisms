const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _pesquisador = require("../controllers/pesquisador");

/////////pesquisador

  // Create a new Tutorial
  router.post("/", _pesquisador.create);

  // Retrieve all _pesquisador
  router.get("/", _pesquisador.findAll);

  // Retrieve all published _pesquisador
  router.get("/search", _pesquisador.findAllParam);

  // Retrieve a single Tutorial with id
  router.get("/:id", _pesquisador.findOne);

  // Update a Tutorial with id
  router.put("/:id", _pesquisador.update);

  // Delete a Tutorial with id
  router.delete("/:id", _pesquisador.delete);

  // Delete all _pesquisador
  router.delete("/", _pesquisador.deleteAll);


  app.use('/api/pequisador', router);

}