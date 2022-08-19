const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _repique_has_imagem = require("../controllers/repique_has_imagem");

  // Create a new repique_has_imagem
  router.post("/", _repique_has_imagem.create);

  // Retrieve all _repique_has_imagem
  router.get("/", _repique_has_imagem.findAll);

  // Retrieve all published _repique_has_imagem
  router.get("/search", _repique_has_imagem.findAllParam);

  // Retrieve a single repique_has_imagem with id
  router.get("/:id", _repique_has_imagem.findOne);

  // Update a repique_has_imagem with id
  router.put("/:id", _repique_has_imagem.update);

  // Delete a repique_has_imagem with id
  router.delete("/:id", _repique_has_imagem.delete);

  // Delete all _repique_has_imagem
  router.delete("/", _repique_has_imagem.deleteAll);


  app.use('/imagem_repique', router);

}