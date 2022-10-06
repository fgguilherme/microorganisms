const models = require("../models").models;

var router = require("express").Router();
module.exports = app => {
    var _microorganismo_has_imagem_micro = require("../controllers/microorganismo_has_imagem_micro");

  // Create a new microorganismo_has_imagem_micro
  router.post("/", _microorganismo_has_imagem_micro.create);

  // Retrieve all _microorganismo_has_imagem_micro
  router.get("/", _microorganismo_has_imagem_micro.findAll);

  // Retrieve all published _microorganismo_has_imagem_micro
  router.get("/search", _microorganismo_has_imagem_micro.findAllParam);

  // Retrieve a single microorganismo_has_imagem_micro with id
  router.get("/:id", _microorganismo_has_imagem_micro.findOne);

  // Update a microorganismo_has_imagem_micro with id
  router.put("/:id", _microorganismo_has_imagem_micro.update);

  // Delete a microorganismo_has_imagem_micro with id
  router.delete("/:id", _microorganismo_has_imagem_micro.delete);

  // Delete all _microorganismo_has_imagem_micro
  router.delete("/", _microorganismo_has_imagem_micro.deleteAll);


  app.use('/api/imagem_micro', router);

}