const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _imagem = require("../controllers/imagem");

/////////imagem

  // Create a new Tutorial
  router.post("/", _imagem.create);

  // Retrieve all _imagem
  router.get("/", _imagem.findAll);

  // Retrieve all published _imagem
  router.get("/search", _imagem.findAllParam);

  // Retrieve a single Tutorial with id
  router.get("/:id", _imagem.findOne);

  // Update a Tutorial with id
  router.put("/:id", _imagem.update);

  // Delete a Tutorial with id
  router.delete("/:id", _imagem.delete);

  // Delete all _imagem
  router.delete("/", _imagem.deleteAll);


  app.use('/api/imagem', router);

}