const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _imagem = require("../controllers/imagem");

/////////imagem

  // Create a new imagem
  router.post("/", _imagem.create);

  // Retrieve all _imagem
  router.get("/", _imagem.findAll);

  // Retrieve all published _imagem
  router.get("/search", _imagem.findAllParam);

  // Retrieve a single imagem with id
  router.get("/:id", _imagem.findOne);

  // Update a imagem with id
  router.put("/:id", _imagem.update);

  // Delete a imagem with id
  router.delete("/:id", _imagem.delete);

  // Delete all _imagem
  router.delete("/", _imagem.deleteAll);


  app.use('/imagem', router);

}