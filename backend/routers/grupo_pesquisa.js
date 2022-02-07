const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _grupo_pesquisa = require("../controllers/grupo_pesquisa");

/////////grupo_pesquisa

  // Create a new Tutorial
  router.post("/", _grupo_pesquisa.create);

  // Retrieve all _grupo_pesquisa
  router.get("/", _grupo_pesquisa.findAll);

  // Retrieve all published _grupo_pesquisa
  router.get("/search", _grupo_pesquisa.findAllParam);

  // Retrieve a single Tutorial with id
  router.get("/:id", _grupo_pesquisa.findOne);

  // Update a Tutorial with id
  router.put("/:id", _grupo_pesquisa.update);

  // Delete a Tutorial with id
  router.delete("/:id", _grupo_pesquisa.delete);

  // Delete all _grupo_pesquisa
  router.delete("/", _grupo_pesquisa.deleteAll);


  app.use('/api/grupopesq', router);

}